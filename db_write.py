import json
import sqlite3

# connect to db and cursor lets us interact with it
sqliteConnection = sqlite3.connect("guess_the_anime_op.db")
cursor = sqliteConnection.cursor()

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
    studio TEXT,
    yt_op_url TEXT,
    yt_viewcount INTEGER DEFAULT 0
) WITHOUT ROWID;
''')

with open("top_anime_code.json", "r") as file:
    j = json.load(file)

    page_one = j['P1']
    #anime_ids = page_one.get("mal_id", [])
    for i, anime in enumerate(page_one[:5], start=1):
        try:
            mal_id = anime['mal_id']
            
            title_map = {t['type']: t['title'] for t in anime['titles'] if t['type'] in ["English", "Default", "Japanese"]}
            eng_title = title_map['English']
            def_title = title_map['Default']
            jp_title = title_map['Japanese']

            rank = anime['rank']
            year_released = anime['year']
            season = anime['season'] or ""
            num_episodes = anime['episodes']
            score = anime['score']
            num_members = anime['members']
            genres = str(",".join([g['name'] for g in anime['genres']]))
            print(f"{genres}")
            studio = anime['studios'][0]['name'] or ""

            cursor.execute('''
                INSERT INTO anime
                        (mal_id, eng_title, def_title, jp_title, rank, year_released, season, num_episodes, score, num_members, genres, studio)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (mal_id, eng_title, def_title, jp_title, rank, year_released, season, num_episodes, score, num_members, genres, studio))
            sqliteConnection.commit()
            
            print(f"ADDED {eng_title}!")

        except Exception as e:
            print(f"SKIPPED! {anime['title']} : {e}")