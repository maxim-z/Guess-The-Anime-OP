from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import sqlite3

DATABASE = "top_1000.db"

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    # allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# def get_songs():
#     conn = sqlite3.connect(DATABASE)
#     cursor = conn.cursor()
#     cursor.execute('''SELECT 
#                         anime_id,     
#                         eng_title,
#                         def_title,
#                         rank,
#                         year_released,
#                         season,
#                         num_episodes,
#                         score,
#                         num_members,
#                         genres,
#                         studio,
#                         id,
#                         op_name,
#                         yt_url,
#                         yt_viewcount
#                    FROM top_1000''')
#     songs = cursor.fetchall()
#     conn.close()
#     return [{"anime_id": row[0], "eng_title": row[1], "def_title": row[2],
#              "rank": row[3], "year_released": row[4], "season": row[5],
#               "num_episodes": row[6], "score": row[7], "num_members": row[8],
#                "genres": row[9], "studio": row[10], "id": row[11],
#                 "op_name": row[12], "yt_url": row[13], "yt_viewcount": row[14]} for row in songs]

# @app.get("/songs")
# def read_songs():
#     return get_songs()

song_filters = [
    "Top 1000 by Song Viewcount",
    "Random Preset 1",
    "Random Preset 2",
    "Random Preset 3",
    "Top 1000 by Anime Score",
    "Random Preset 4",
    "Random Preset 5",
    "Random Preset 6"
]

tables = {
    song_filters[0]: "top_1000_by_viewcount",
    song_filters[1]: "random_presets",
    song_filters[2]: "random_presets",
    song_filters[3]: "random_presets",
    song_filters[4]: "top_1000_by_score",
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

# matches the id to the song_order from one of the random presets 1-6
# so for example if yuusha by yoasobi is id 1 in top_1000_by_score when using the random presets for it which would be 4-6
# if random preset 4 has id 412 with song_order 1 yuusha by yoasobi will now be the 412th element in the song list
def matched_id(id, filter):
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute(f"SELECT song_order_{num[filter]} FROM {tables[filter]} WHERE id = (?)", (str(id).strip(),))
    updated_id = cursor.fetchone()
    conn.close()
    return updated_id[0] # song_order

def get_from_table_top_1000_by_viewcount(id):
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute('''SELECT 
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
                        studio,
                        id,
                        song_title,
                        song_artist,
                        yt_video_id,
                        yt_viewcount
                   FROM top_1000_by_viewcount LIMIT 1 OFFSET (?)''', (str(id-1).strip(),))
                #    FROM top_1000_by_viewcount WHERE id=(?)''', (str(id).strip(),))
    song = cursor.fetchone()
    conn.close()
    return song

def get_from_table_top_1000_by_score(id):
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute('''SELECT 
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
                        studio,
                        id,
                        song_title,
                        song_artist,
                        yt_video_id,
                        yt_viewcount
                   FROM top_1000_by_score 
                   LEFT JOIN anime ON anime.mal_id=top_1000_by_score.anime_id LIMIT 1 OFFSET (?)''', (str(id-1).strip(),))
                #    FROM top_1000_by_score WHERE id=(?)''', (str(id).strip(),))
    song = cursor.fetchone()
    conn.close()
    return song

def get_song(id, filter):
    song = None
    if filter == song_filters[0]: # by viewcount
        song = get_from_table_top_1000_by_viewcount(id)
    elif filter == song_filters[1] or filter == song_filters[2] or filter == song_filters[3]: # random presets 1-3 using by viewcount table
        song = get_from_table_top_1000_by_viewcount(matched_id(id, filter))
    
    elif filter == song_filters[4]: # by score
        song = get_from_table_top_1000_by_score(id)
    elif filter == song_filters[5] or filter == song_filters[6] or filter == song_filters[7]: # random presets 4-6 using by score table
        song = get_from_table_top_1000_by_score(matched_id(id, filter))

    if song is None:
        # Raise HTTP 404 Not Found if no song found
        raise HTTPException(status_code=404, detail=f"Song with id: {id} and filter: {filter} not found")

    return {"anime_id": song[0], "eng_title": song[1], "def_title": song[2],
             "rank": song[3], "year_released": song[4], "season": song[5],
              "num_episodes": song[6], "score": song[7], "num_members": song[8],
               "genres": song[9], "studio": song[10], "id": song[11],
                "song_title": song[12], "song_artist": song[13], "yt_video_id": song[14], "yt_viewcount": song[15]}

@app.get("/song")
def read_song(id: int, filter: str):
    return get_song(id, filter)