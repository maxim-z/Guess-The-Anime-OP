from anime_db import ANIME_DB, ANIME_TABLE, YT_OPS_TABLE, get_connection, get_table, update_row
import os
from dotenv import load_dotenv
from googleapiclient.discovery import build
import time
import random
import re
import json

# Purpose of this file:
### Use the youtube api to gather the youtube urls and viewcounts for the ops/eds

FILE_PATH = os.path.dirname(__file__)
OP_SEARCH_RESULTS_JSON = os.path.join(FILE_PATH, "anime_json/op_search_results/")

def get_searcher():
    # Get YT_API_KEY
    load_dotenv()
    # build a service to access the youtube api
    yt_api = build('youtube', 'v3', developerKey=os.getenv("YT_API_KEY"))
    return yt_api

def extract_video_id(url):
    return re.search(r"(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|&|$)", url).group(1)

def youtube_video_viewcount(yt_api, url):
    video_id = extract_video_id(url)
    request = yt_api.videos().list(
        part="statistics",
        id=video_id
    )
    response = request.execute()
    stats = response.get('items', [{}])[0].get('statistics', {})
    return int(stats.get('viewCount', 0))

def save_yt_search(query, yt_api, index, max_results=10):
    request = yt_api.search().list( # gets results in youtube search for 'song name' by relevance
        part="snippet",
        q=query,
        type="video",
        maxResults=max_results,
        videoEmbeddable="true"
    )
    response = request.execute()
    # write to json
    curr = f"{index}.json"
    writeTo = os.path.join(OP_SEARCH_RESULTS_JSON, curr)
    with open(writeTo, "w", encoding="utf-8") as file:
        json.dump(response, file, ensure_ascii=False)
    print(f"Wrote to: {writeTo}")

# need to update this method once I collect the necessary urls so that I can get their viewcounts as well
def save_yt_search_json(cursor, connection, table, yt_api):
    rows = get_table(cursor, table)
    for index, row in enumerate(rows[399:499], start=400):
        url, viewcount = "", 0
        query = row['op_name'] # + " official anime opening full"
        save_yt_search(query, yt_api, index)
        time.sleep(random.uniform(15.0, 20.0))

# def update_yt_urls_op_db(cursor, connection, table, yt_api):
#     rows = get_table(cursor, table)
#     for index, row in enumerate(rows[399:499], start=400):
#         url, viewcount = "", 0
#         query = row['op_name'] # + " official anime opening full"
#         get_yt_url(query, yt_api, index)
#         # update_row(cursor, connection, YT_OPS_TABLE, "yt_url", url, row['id'])
#         # update_row(cursor, connection, YT_OPS_TABLE, "yt_viewcount", viewcount, row['id'])
#         # print(f"id:{row['id']} {url} -> {viewcount}")
#         time.sleep(random.uniform(15.0, 20.0))