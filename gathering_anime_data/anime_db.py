import json
import sqlite3
import os
import re
import traceback

# Purpose of this file
### Handles JSON to DB writes
### Handles DB reads and DB writes

FILE_PATH = os.path.dirname(__file__)
TOP_ANIME_JSON = os.path.join(FILE_PATH, "anime_json/top_anime_info.json") # {P1:{}, P2:{}, P3:{}, ... PN:{}}
ANIME_OPS_EDS = os.path.join(FILE_PATH, "anime_json/anime_ops_eds.json")   # [{mal_id:###, ops:[], eds:[]}, {...}, ...]
ANIME_DB = "guess_the_anime_op.db"
ANIME_TABLE = "anime"
YT_OPS_TABLE = "yt_ops"
YT_EDS_TABLE = "yt_eds"
ALL_TABLES = [ANIME_DB, YT_OPS_TABLE, YT_EDS_TABLE]

def get_connection(db):
    # connect to db and cursor lets us interact with it
    sqliteConnection = sqlite3.connect(db)
    sqliteConnection.row_factory = sqlite3.Row # make rows behave like dicts not tuples 
    cursor = sqliteConnection.cursor()
    return cursor, sqliteConnection

def create_table_anime(cursor):
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS anime (
        mal_id INTEGER PRIMARY KEY NOT NULL,
        eng_title TEXT,
        def_title TEXT,
        jp_title TEXT,
        rank INTEGER DEFAULT 0,
        year_released INTEGER DEFAULT 0,
        season TEXT,
        num_episodes INTEGER DEFAULT 0,
        score FLOAT DEFAULT 0.0,
        num_members INTEGER DEFAULT 0,
        genres TEXT,
        studio TEXT
    ) WITHOUT ROWID;
    ''')

# stores anime openings data
def create_table_yt_ops(cursor):
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS yt_ops (
        id INTEGER PRIMARY KEY,
        anime_id INTEGER NOT NULL,
        op_name TEXT,
        yt_url TEXT,
        yt_viewcount INTEGER,
        FOREIGN KEY(anime_id) REFERENCES anime(mal_id)
    )
    ''')

# stores anime endings data
def create_table_yt_eds(cursor):
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS yt_eds (
        id INTEGER PRIMARY KEY,
        anime_id INTEGER NOT NULL,
        ed_name TEXT,
        yt_url TEXT,
        yt_viewcount INTEGER,
        FOREIGN KEY(anime_id) REFERENCES anime(mal_id)
    )
    ''')

def write_page_to_db(page, page_number, cursor, connection):
    for index, anime in enumerate(page, start=1):
        try:
            mal_id = anime['mal_id']
            
            title_map = {t['type']: t['title'] for t in anime['titles'] if t['type'] in ["English", "Default", "Japanese"]}
            eng_title = title_map.get('English', '')
            def_title = title_map.get('Default', '')
            jp_title = title_map.get('Japanese', '')

            rank = anime['rank']
            year_released = anime['year']
            season = anime['season'] or ""
            num_episodes = anime['episodes']
            score = anime['score']
            num_members = anime['members']
            genres = str(",".join([g['name'] for g in anime['genres']]))
            studio = anime['studios'][0]['name'] if anime.get('studios') and len(anime['studios']) > 0 else ""

            cursor.execute('''
                INSERT INTO anime
                        (mal_id, eng_title, def_title, jp_title, rank, year_released, season, num_episodes, score, num_members, genres, studio)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (mal_id, eng_title, def_title, jp_title, rank, year_released, season, num_episodes, score, num_members, genres, studio))
            connection.commit()
            
            # print(f"ADDED {eng_title}!")

        except Exception as e:
            print(f"SKIPPED! index -> {index} : {e}")
            with open("failed.txt", "a") as f:
                f.write(f"SKIPPED! page:{page_number} index:{index} : {e}\n")
    print(f"Completed page {page_number}")

# transfers top anime pages from start page to end page and json to sqlite
def transfer_anime_to_db(start, end, cursor, connection):
    with open(TOP_ANIME_JSON, "r") as file:
        top_anime = json.load(file)
        for page_number in range(start, end+1):
            write_page_to_db(top_anime[f'P{page_number}'], page_number, cursor, connection)
    print(f"Wrote to anime_db")

# reads anime openings from anime_ops_eds.db and returns all the rows
def get_table(cursor, table):
    cursor.execute(f"SELECT * FROM {table}")
    return cursor.fetchall()

# reads anime openings from anime_ops_eds.db and rows only with the selected columns
def get_table_cols(cursor, table, cols): # table = name of table, cols = array of column names that we want to grab
    parameters = re.sub("'", "", str(cols)[1:-1])
    if parameters == "": # if cols is [""] or ["*"] it will grab all of the cols
        parameters = "*"
    cursor.execute(f"SELECT {parameters} FROM {table}")
    return cursor.fetchall()

# source has to match the json structure [{}, {}, {}, ...]
def initialize_yt_ops_eds_table(cursor, connection, source):
    with open(source, "r") as file:
        ops_eds = json.load(file)
        counter = 0
        length = len(ops_eds)
        for songs in ops_eds:
            counter += 1
            if counter % int(length * 0.1) == 0:
                print(f"Progress: {counter}/{length}")
            try:
                anime_id = songs['mal_id']
                ops = songs['ops']
                eds = songs['eds']

                for op in ops:
                    front_pass = re.sub(r"\A\d*:\s*", "", op) # gets rid of 1: or 2: and so on from the front of the string
                    clean_op = re.sub(r"\s*\(eps[\d,\s\-]+\)\Z", "", front_pass) # removes the episodes the op/ed were featured in from the back of the string (eps ??? - ???)
                    cursor.execute('''
                    INSERT INTO yt_ops
                            (anime_id, op_name, yt_url, yt_viewcount)
                            VALUES (?, ?, ?, ?)
                    ''', (anime_id, clean_op, "", 0))

                for ed in eds:
                    front_pass = re.sub(r"\A\d*:\s*", "", ed)
                    clean_ed = re.sub(r"\s*\(eps[\d,\s\-]+\)\Z", "", front_pass)
                    cursor.execute('''
                    INSERT INTO yt_eds
                            (anime_id, ed_name, yt_url, yt_viewcount)
                            VALUES (?, ?, ?, ?)
                    ''', (anime_id, clean_ed, "", 0))

                connection.commit()
                
            except Exception as e:
                print(f"{anime_id} : {e}")
                traceback.print_exc()
        print(f"Finished writing to {source}!")

def update_row(cursor, connection, table, col_name, value, row_id):
    try:
        cursor.execute(f"UPDATE {table} SET {col_name} = ? WHERE id = ?", (value, row_id))
        connection.commit()
    except sqlite3.OperationalError as e:
        print(f"SQL error: {e}")

# cursor, connection = get_connection(ANIME_DB)
# # cursor.execute("PRAGMA foreign_keys = ON")
# create_table_yt_ops(cursor)
# create_table_yt_eds(cursor)
# initialize_yt_ops_eds_table(cursor, connection, ANIME_OPS_EDS)
# create_table_anime(cursor)
# transfer_anime_to_db(1,200, cursor, connection)