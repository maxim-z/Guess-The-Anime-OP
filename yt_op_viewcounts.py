from anime_db import ANIME_DB, ANIME_TABLE, YT_OPS_TABLE, get_connection, get_table, update_row
import requests
import os
from dotenv import load_dotenv, dotenv_values
from googleapiclient.discovery import build
from duckduckgo_search import DDGS
import time
import random
import re

# Purpose of this file:
### Use the youtube api to gather the youtube urls and viewcounts for the ops/eds
# cursor, connection = get_connection(ANIME_DB)

def get_searchers():
    # Get YT_API_KEY
    load_dotenv()
    # build a service to access the youtube api
    yt_api = build('youtube', 'v3', developerKey={os.getenv("YT_API_KEY")})
    # Custom User-Agent string (mimics Chrome on Windows)
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                    "(KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
    }
    ddg = DDGS(headers=headers)
    return yt_api, ddg

# gather the youtube urls with ddg because search is super expensive on yt api
def get_yt_url(query, ddg):
    results = ddg.text(f"{query} site:youtube.com", max_results=1)
    return results[0]['href'] if len(results) > 0 else None

def update_yt_urls_op_db(cursor, table, ddg):
    rows = get_table(cursor, table)
    for row in rows[:5]:
        url = get_yt_url(row['op_name'], ddg)
        update_row(cursor, YT_OPS_TABLE, "yt_url", url, row['id'])
        print(f"update url : {url} for id:{row['id']}")
        time.sleep(random.uniform(5.0, 6.0)) # ddg limits at 30 requests per minute so it has to be at least a 2 sec delay

def extract_video_id(url):
    return re.sub(r"(?:v=|\/)[0-9A-Za-z_-]{11}(?:\?|&||$)")

def youtube_video_viewcount(yt_api, url):
    video_id = extract_video_id(url)
    request = yt_api.video().list(
        part="statistics",
        id=video_id
    )
    response = request.execute()
    stats = response.get('items', [{}])[0].get('statistics', {})
    return stats.get('viewCount', {})

# def youtube_search(query, api_key, max_results=5):
#     url = 'https://www.googleapis.com/youtube/v3/search'
#     params = {
#         'part': 'snippet',
#         'q': query,
#         'type': 'video',
#         'maxResults': max_results,
#         'key': api_key
#     }

#     response = requests.get(url, params=params)
#     data = response.json()
#     for item in data.get('items', []):
#         title = item['snippet']['title']
#         video_id = item['id']['videoId']
#         print(f"{title}: https://www.youtube.com/watch?v={video_id}")

# def get_yt_url(song_name):
#     url = ""
#     response = requests.get(url)
#     return response

# def update_yt_url_viewcount():
#     rows = get_table(cursor, YT_OPS_TABLE)
#     for row in rows:
#         url = get_yt_url(row['op_name'])