import json
import sqlite3
import os
import re
import traceback

# Purpose of this file
### Handles JSON to DB writes
### Handles DB reads and DB writes

FILE_PATH = os.path.dirname(__file__)
# JSON grabbed with top_anime_data_fetcher.py
TOP_ANIME_JSON = os.path.join(FILE_PATH, "anime_json/top_anime_info.json") # {P1:{}, P2:{}, P3:{}, ... PN:{}}
ANIME_OPS_EDS_JSON = os.path.join(FILE_PATH, "anime_json/anime_ops_eds.json")   # [{mal_id:###, ops:[], eds:[]}, {...}, ...]
# sqlite databases
ANIME_DB = os.path.join(FILE_PATH, "guess_the_anime_op.db")
TOP_1000_OP_DB = os.path.join(FILE_PATH, "../fastapi/top_1000.db")
# sqlite tables 
ANIME_TABLE = "anime"
YT_OPS_TABLE = "yt_ops"
LEN_YT_OPS = 4450
YT_EDS_TABLE = "yt_eds"
LEN_YT_EDS = 7467
TOP_1000_BY_SCORE = "top_1000_by_score"
TOP_1000_BY_VIEWCOUNT = "top_1000_by_viewcount"
ALL_TABLES = [ANIME_DB, YT_OPS_TABLE, YT_EDS_TABLE]
# folders
RANDOM_PRESETS = os.path.join(FILE_PATH, "random_presets/")

def get_connection(db):
    # connect to db and cursor lets us interact with it
    sqliteConnection = sqlite3.connect(db)
    sqliteConnection.row_factory = sqlite3.Row # make rows behave like dicts not tuples 
    cursor = sqliteConnection.cursor()
    cursor.execute("PRAGMA foreign_keys = ON;")
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
        studios TEXT,
        type TEXT,
        source TEXT,
        img_url TEXT,
        synopsis TEXT
    ) WITHOUT ROWID;
    ''')

# stores anime openings data
def create_table_yt_ops(cursor):
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS yt_ops (
        id INTEGER PRIMARY KEY,
        anime_id INTEGER NOT NULL,
        song_title TEXT,
        song_artist TEXT,
        yt_video_id TEXT,
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
        song_title TEXT,
        song_artist TEXT,
        yt_video_id TEXT,
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
            genres = str(", ".join([genre['name'] for genre in anime['genres']]))
            studios = str(", ".join([studio['name'] for studio in anime['studios']]))
            anime_type = anime['type']
            source = anime['source']
            img_url = anime['images']['jpg']['large_image_url']
            synopsis = anime['synopsis']

            cursor.execute('''
                INSERT INTO anime
                        (mal_id, eng_title, def_title, jp_title, rank, year_released, season, num_episodes, score, num_members, genres, studios, type, source, img_url, synopsis)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (mal_id, eng_title, def_title, jp_title, rank, year_released, season, num_episodes, score, num_members, genres, studios, anime_type, source, img_url, synopsis))
            connection.commit()
            
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
                    second_pass = re.sub(r"\s*\(eps.*\)\Z", "", front_pass) # removes the episodes the op/ed were featured in from the back of the string (eps ??? - ???)
                    third_pass = re.sub(r'["\'&?%+#=/\\:<>[\](){\}]', '', second_pass) # gets rid of " ' & ? % + # = / \ : < > [ ] ( ) { }
                    # splits Mirai Kuru Kuru Yume Kururu ミライくるくるユメくるる by Maria Sawada 澤田真里愛
                    # into
                    # song_title = Mirai Kuru Kuru Yume Kururu ミライくるくるユメくるる
                    # song_artist = Maria Sawada 澤田真里愛
                    split = third_pass.split(" by ", 1)
                    song_title, song_artist = (split + [''])[:2] # if no by in string song_title = split[0] which is the entire string and song_artist = "" otherwise they get assigned the first and second part of split respectively
                    cursor.execute('''
                    INSERT INTO yt_ops
                            (anime_id, song_title, song_artist, yt_video_id, yt_viewcount)
                            VALUES (?, ?, ?, ?, ?)
                    ''', (anime_id, song_title, song_artist, "", 0))
                # copy of what happens for ops
                for ed in eds:
                    front_pass = re.sub(r"\A\d*:\s*", "", ed)
                    second_pass = re.sub(r"\s*\(eps.*\)\Z", "", front_pass)
                    third_pass = re.sub(r'["\'&?%+#=/\\:<>[\](){\}]', '', second_pass)
                    split = third_pass.split(" by ", 1)
                    song_title, song_artist = (split + [''])[:2]
                    cursor.execute('''
                    INSERT INTO yt_eds
                            (anime_id, song_title, song_artist, yt_video_id, yt_viewcount)
                            VALUES (?, ?, ?, ?, ?)
                    ''', (anime_id, song_title, song_artist, "", 0))

                connection.commit()
                
            except Exception as e:
                print(f"{anime_id} : {e}")
                traceback.print_exc()
        print(f"Finished writing to {ANIME_DB}!")

# writes a to a txt file
# col_name_1 col_name_2 ... col_name_n
# col_name_1 col_name_2 ... col_name_n
# ...
def save_rows_to_txt(cursor, table, col_names, start_row, write_to):
    write_to = os.path.join(FILE_PATH, write_to)
    with open(write_to, "w", encoding="utf-8") as file:
        for index, row in enumerate(get_table(cursor, table), start=1):
            if index < start_row:
                continue
            for index, col in enumerate(col_names, start=1):
                file.write(f"{row[col]}")
                # if index < len(col_names):
                #     file.write("\n") # write a space between cols except for col_n and \n
                file.write("\n")
    print(f"Wrote to {write_to}!")

# removes duplicates and sorts the list alphabetically
def save_sanitized_guesslist_to_txt(cursor, table, col_names, start_row, write_to):
    write_to = os.path.join(FILE_PATH, write_to)
    with open(write_to, "w", encoding="utf-8") as file:
        all_titles = []
        for index, row in enumerate(get_table(cursor, table), start=1):
            if index < start_row:
                continue
            for index, col in enumerate(col_names, start=1):
                all_titles.append(row[col])
        
        sanitized_list = sorted(set(all_titles))
        for entry in sanitized_list:    
            file.write(f"{entry}")
            file.write("\n")
    print(f"Wrote to {write_to}!")

# executes a .sql file and reads from the .txt where the .sql dumped its results
# removes duplicates and sorts the list alphabetically
def save_sql_to_sanitized_guesslist_to_txt(cursor, sql_file, read_from, write_to):
    write_to = os.path.join(FILE_PATH, write_to)
    # cursor.execute(f".read {sql_file}")
    with open(read_from, "r", encoding="utf-8") as file:            
        sanitized_list = sorted(set(file.read().split('\n')))
        with open(write_to, "w", encoding="utf-8") as file_w: 
            for entry in sanitized_list:    
                file_w.write(f"{entry}")
                file_w.write("\n")
        print(f"Wrote to {write_to}!")

def update_row(cursor, connection, table, col_name, value, row_id):
    try:
        cursor.execute(f"UPDATE {table} SET {col_name} = ? WHERE id = ?", (value, row_id))
        connection.commit()
    except sqlite3.OperationalError as e:
        print(f"SQL error: {e}")

# WRITING RANDOM PRESETS
def update_random_preset(cursor, col_number, value, row_id):
    try:
        cursor.execute(f"UPDATE random_presets SET song_order_{col_number} = ? WHERE id = ?", (value, row_id))
    except sqlite3.OperationalError as e:
        print(f"SQL error: {e}")

# grabs a txt file with numbers from 1 to 1000 randomly placed on each line and puts those into the song_order column of a random_preset_# table
def write_random_preset(cursor, connection, col_number, txt_file):
    with open(os.path.join(RANDOM_PRESETS, txt_file), "r") as file:
        for index, row in enumerate(file, start=1):
            order_id = row.strip()
            update_random_preset(cursor, col_number, order_id, index)
        connection.commit()

def create_table_random_presets(cursor, connection, length, num_presets):
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS random_presets (
        id INTEGER PRIMARY KEY,
        song_order_1 INTEGER DEFAULT 0,
        song_order_2 INTEGER DEFAULT 0,
        song_order_3 INTEGER DEFAULT 0,
        song_order_4 INTEGER DEFAULT 0,
        song_order_5 INTEGER DEFAULT 0,
        song_order_6 INTEGER DEFAULT 0,
        FOREIGN KEY(id) REFERENCES yt_ops(id)
    )
    ''')

# num_orders determines how many rows are in the table which corresponds to the number of lines in each of the random_presets/#########.txt 
def initialize_random_presets_table(cursor, connection, num_orders):
    for i in range(num_orders):
        cursor.execute(f"INSERT INTO random_presets (song_order_1) VALUES (?)", (0,))
    connection.commit()

# cursor, connection = get_connection(ANIME_DB)
# # cursor.execute("PRAGMA foreign_keys = ON")
# create_table_yt_ops(cursor)
# create_table_yt_eds(cursor)
# initialize_yt_ops_eds_table(cursor, connection, ANIME_OPS_EDS_JSON)
# create_table_anime(cursor)
# transfer_anime_to_db(1,200, cursor, connection)

# write anime_json/op/ed_viewcounts to yt_ops
# def write_viewcounts(cursor, connection, table):
#     len_table = LEN_YT_OPS if table == YT_OPS_TABLE else YT_EDS_TABLE
#     location = "op" if table == YT_OPS_TABLE else "ed"
#     for i in range(1, len_table+1):
#         fpath = os.path.join(FILE_PATH, f"anime_json/{location}_viewcounts/{i}.json")
#         if os.path.exists(fpath):
#             with open(fpath, "r", encoding="utf-8") as f:
#                 obj = json.load(f)
#                 max = len(obj) if len(obj) < 5 else 5
#                 videoId = ''
#                 highestViewcount = 0
#                 for j in range(0, max):
#                     currViewcount = obj[j]['viewCount']
#                     if currViewcount > highestViewcount:
#                         videoId = obj[j]['videoId']
#                         highestViewcount = currViewcount
#                 update_row(cursor, connection, table, 'yt_video_id', videoId, i)
#                 update_row(cursor, connection, table, 'yt_viewcount', highestViewcount, i)
#             print(f"Completed [{i}]")
#         else:
#             print(f"Skipped [{i}]")

# write anime_json/op/ed_viewcounts to yt_ops in a smarter way
def write_viewcounts(cursor, connection, table):
    len_table = LEN_YT_OPS if table == YT_OPS_TABLE else YT_EDS_TABLE
    location = "op" if table == YT_OPS_TABLE else "ed"
    for i in range(1, len_table+1):
        search_path = os.path.join(FILE_PATH, f"anime_json/{location}_search_results/{i}.json")
        fpath = os.path.join(FILE_PATH, f"anime_json/{location}_viewcounts/{i}.json")
        if os.path.exists(fpath):
            with open(fpath, "r", encoding="utf-8") as f:
                obj = json.load(f)
                max = len(obj) if len(obj) < 5 else 5 # only want to take into account the top 5 search results by relevance
                
                sorted_videos_desc = sorted(obj, key=lambda x: x['viewCount'])
                print(sorted_videos_desc)
                videoIds = ','.join(v['videoId'] for v in sorted_videos_desc[:5])
                highestViewcounts = ','.join(v['viewCount'] for v in sorted_videos_desc[:5])
                update_row(cursor, connection, table, 'yt_video_id', videoIds, i)
                update_row(cursor, connection, table, 'yt_viewcount', highestViewcounts, i)
                
                # videoId = ''
                # highestViewcount = 0
                # for j in range(0, max):
                #     currViewcount = sorted_videos_desc[j]['viewCount']
                #     if currViewcount > highestViewcount:
                #         videoId = sorted_videos_desc[j]['videoId']
                #         highestViewcount = currViewcount
                # update_row(cursor, connection, table, 'yt_video_id', videoId, i)
                # update_row(cursor, connection, table, 'yt_viewcount', highestViewcount, i)
            print(f"Completed [{i}]")
        else:
            print(f"Skipped [{i}]")