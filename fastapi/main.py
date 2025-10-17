import socket
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import sqlite3
import os
import psycopg2

app = FastAPI()

# TLDR if something uses DB_URL it's production if not it's local

# local
FILE_PATH = os.path.dirname(__file__)
LOCAL_DB = os.path.join(FILE_PATH, "top_1000.db")
# prod
DB_URL = os.getenv("DB_URL")

# prod
if DB_URL:
    origins = [
        "http://localhost",
        "http://localhost:8080",
        "http://127.0.0.1",
        "http://127.0.0.1:8080",
        "https://maxim-z.github.io",  # root GitHub Pages domain
        "https://maxim-z.github.io/Guess-The-Anime-OP"  # project page
    ]
else: # local
    origins = ['*']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"]
)

def get_connection():
    if DB_URL: # prod
        conn = psycopg2.connect(DB_URL, sslmode='require')
        cursor = conn.cursor()
        return conn, cursor
    else: # local
        # connect to db and cursor lets us interact with it
        sqliteConnection = sqlite3.connect(LOCAL_DB)
        sqliteConnection.row_factory = sqlite3.Row # make rows behave like dicts not tuples 
        cursor = sqliteConnection.cursor()
        cursor.execute("PRAGMA foreign_keys = ON;")
        return sqliteConnection, cursor

def close_connection(conn, cursor):
    cursor.close()
    conn.close()

song_filters = [
    "Top 1000 by Anime Score",
    "Random Preset 1",
    "Random Preset 2",
    "Random Preset 3",
    "Top 1000 by Song Viewcount",
    "Random Preset 4",
    "Random Preset 5",
    "Random Preset 6"
]

tables = {
    song_filters[0]: "top_1000_by_score",
    song_filters[1]: "random_presets",
    song_filters[2]: "random_presets",
    song_filters[3]: "random_presets",
    song_filters[4]: "top_1000_by_viewcount",
    song_filters[5]: "random_presets",
    song_filters[6]: "random_presets",
    song_filters[7]: "random_presets"
}

num = {
    "Random Preset 1": "1",
    "Random Preset 2": "2",
    "Random Preset 3": "3",
    "Random Preset 4": "4",
    "Random Preset 5": "5",
    "Random Preset 6": "6"
}

# returns a single row
def query_one(sql: str, params=()):
    # run a single SELECT query and return one row
    conn, cursor = get_connection()
    # replace for local
    if not DB_URL:
        sql = sql.replace("%s", "?")
    cursor.execute(sql, params)
    row = cursor.fetchone()
    close_connection(conn, cursor)
    return row

# matches the id to the song_order from one of the random presets 1-6
# so for example if yuusha by yoasobi is id 1 in top_1000_by_score when using the random presets for it which would be 4-6
# if random preset 4 has id 412 with song_order 1 yuusha by yoasobi will now be the 412th element in the song list
def matched_id(id: int, filter: str):
    sql = f"SELECT song_order_{num[filter]} FROM {tables[filter]} WHERE id = (%s)"
    params = (str(id).strip(),)
    row = query_one(sql, params)
    return row[0] if row else None # song_order

def get_from_table_top_1000_by_score(id):
    sql = '''SELECT 
                    anime_id,     
                    eng_title,
                    def_title,
                    rank,
                    year_released,
                    season,
                    num_episodes,
                    score,
                    num_members,
                    genres,
                    studios,
                    id,
                    song_title,
                    song_artist,
                    yt_video_id,
                    yt_viewcount,
                    type,
                    source,
                    img_url,
                    synopsis
                FROM top_1000_by_score 
                INNER JOIN anime ON anime.mal_id=top_1000_by_score.anime_id
                ORDER BY score DESC LIMIT 1 OFFSET (%s)'''
    params = (str(id-1).strip(),)
    song = query_one(sql, params)
    return song

def get_from_table_top_1000_by_viewcount(id: int):
    sql = '''SELECT 
                    anime_id,     
                    eng_title,
                    def_title,
                    rank,
                    year_released,
                    season,
                    num_episodes,
                    score,
                    num_members,
                    genres,
                    studios,
                    id,
                    song_title,
                    song_artist,
                    yt_video_id,
                    yt_viewcount,
                    type,
                    source,
                    img_url,
                    synopsis
                FROM top_1000_by_viewcount 
                INNER JOIN anime ON anime.mal_id=top_1000_by_viewcount.anime_id
                ORDER BY yt_viewcount DESC LIMIT 1 OFFSET (%s)'''
    params = (str(id-1).strip(),)
    song = query_one(sql, params)
    return song

def get_song(id: int, filter: str):
    if id < 1 or id > 1000: # out of range
        raise HTTPException(status_code=404, detail=f"Song with id: {id} is out of range, only 1-1000 exist")
    song = None
    detail = ""
    if filter == song_filters[0]: # by score
        song = get_from_table_top_1000_by_score(id)
    elif filter == song_filters[1] or filter == song_filters[2] or filter == song_filters[3]: # random presets 1-3 using by score table
        m_id = matched_id(id, filter)
        if m_id:
            song = get_from_table_top_1000_by_viewcount()
        else: detail += ", matched_id failed"
    
    elif filter == song_filters[4]: # by viewcount
        song = get_from_table_top_1000_by_viewcount(id)
    elif filter == song_filters[5] or filter == song_filters[6] or filter == song_filters[7]: # random presets 4-6 using by viewcount table
        m_id = matched_id(id, filter)
        if m_id:
            song = get_from_table_top_1000_by_score(m_id)
        else:
            detail += ", matched_id failed"

    if song is None:
        # Raise HTTP 404 Not Found if no song found
        raise HTTPException(status_code=404, detail=f"Song with id: {id} and filter: {filter} not found {detail}")

    return {"anime_id": song[0], "eng_title": song[1], "def_title": song[2],
             "rank": song[3], "year_released": song[4], "season": song[5],
              "num_episodes": song[6], "score": song[7], "num_members": song[8],
               "genres": song[9], "studios": song[10], "id": song[11],
                "song_title": song[12], "song_artist": song[13], "yt_video_id": song[14], "yt_viewcount": song[15],
                "type": song[16], "source": song[17], "img_url": song[18], "synopsis": song[19]}

@app.get("/song")
def read_song(id: int, filter: str):
    return get_song(id, filter)

# page = 1-200 as there are 5 songs on each page
@app.get("/page")
def read_page(pageNum: int, filter: str):
    res = []
    for x in range(5):
        song_id = (pageNum-1)*5 + x + 1
        res.append(get_song(song_id, filter))
    return res