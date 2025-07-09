from anime_db import ANIME_DB, ANIME_TABLE, YT_OPS_TABLE, get_connection, get_table, update_row
import os
import sys
from dotenv import load_dotenv
from googleapiclient.discovery import build
import time
import random
import re
import json
import heapq

# Purpose of this file:
### Use the youtube api to gather the youtube urls and viewcounts for the ops/eds

SEARCH_QUERY_LIMIT = 100 # with a 10,000 quota this is how many video.searches are possible with yt api

FILE_PATH = os.path.dirname(__file__)
OP_SEARCH_RESULTS_JSON = os.path.join(FILE_PATH, "anime_json/op_search_results/")
OP_VIEWCOUNTS_JSON = os.path.join(FILE_PATH, "anime_json/op_viewcounts/")
ED_SEARCH_RESULTS_JSON = os.path.join(FILE_PATH, "anime_json/ed_search_results/")
ED_VIEWCOUNTS_JSON = os.path.join(FILE_PATH, "anime_json/ed_viewcounts/")
# finalized lists of top 1000 songs for ops/eds by viewcount and by score
TOP_1000_JSON = os.path.join(FILE_PATH, "anime_json/top_1000/")

def get_searcher():
    # load secrets
    load_dotenv()
    # build a service to access the youtube api
    yt_api = build('youtube', 'v3', developerKey=os.getenv("YT_API_KEY"))
    return yt_api

def extract_video_id(url):
    return re.search(r"(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|&|$)", url).group(1)

def get_youtube_video_viewcount_extract(yt_api, url):
    video_id = extract_video_id(url)
    request = yt_api.videos().list(
        part="statistics",
        id=video_id
    )
    response = request.execute()
    stats = response.get('items', [{}])[0].get('statistics', {})
    return int(stats.get('viewCount', 0))

def get_yt_search(query, yt_api, index, dir, max_results=50):
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
    # writeTo = os.path.join(OP_SEARCH_RESULTS_JSON, curr)
    writeTo = os.path.join(dir, curr)
    with open(writeTo, "w", encoding="utf-8") as file:
        json.dump(response, file, ensure_ascii=False)
    print(f"Wrote to: {writeTo}")

# need to update this method once I collect the necessary urls so that I can get their viewcounts as well
def save_yt_searches_json(cursor, start_index : int, table, dir, yt_api):
    # check that its a valid directory and grab its files
    if not dir in (OP_SEARCH_RESULTS_JSON, ED_SEARCH_RESULTS_JSON):
        print("Exiting directory does not match accepted ones")
        sys.exit()
    # # sorts file numerically extracting only the digits out of *.json
    # files = sorted([int(re.search(r'\d+', f).group()) for f in os.listdir(dir) if os.path.isfile(os.path.join(dir, f))])

    # # go through the rows and write the searches to dir/index.json
    # biggest_file_num = files[-1]+SEARCH_QUERY_LIMIT if files else SEARCH_QUERY_LIMIT # want to do at least the query limit for searches while filling in any gaps
    # max_range = biggest_file_num if len(rows) >= biggest_file_num else len(rows)
    rows = get_table(cursor, table)
    completed = 0
    for index in range(start_index, len(rows)):
        # if a file already exists skip it
        if os.path.exists(os.path.join(dir, f"{index}.json")):
            print(f"Skipping [{index}]")
            continue

        row = rows[index-1] # table starts at 0 not 1 but our json files start at 1.json ...
        query = f"{row['song_title']} {row['song_artist']}".strip()
        print(query)
        if query == "":
            print(f"Skipping file {index}.json no song_title")
            continue
        get_yt_search(query, yt_api, index, dir)
        completed += 1
        if completed == 100:
            break
        # writeTo = os.path.join(dir, f"{index}.json")
        # print(f"saving to {writeTo}")
        time.sleep(random.uniform(10.0, 15.0))

def get_youtube_videos_viewcount(yt_api, video_ids):
    ids_string = ",".join(video_ids)
    request = yt_api.videos().list(
        part="statistics",
        id=ids_string
    )
    response = request.execute()
    view_counts = []
    for item in response.get('items', []):
        id = item['id']
        stats = item.get('statistics', {})
        view_count = int(stats.get('viewCount', 0))
        view_counts.append(view_count)
        # print(f"video_id: {id} view_count: {view_count}")
    return view_counts

# saves the viewcounts of the videos from the op_search_results/num_search.json into 
def save_yt_viewcounts_json(yt_api, start, video_ids):
    viewcounts = get_youtube_videos_viewcount(yt_api, video_ids)
    print(f"viewCounts -> {viewcounts}")
    lengthOfSearches = 10 # each op/ed search result contains 10 results
    for i in range(5):
        wpath = os.path.join(OP_VIEWCOUNTS_JSON, f"{start+i}.json")
        print(f"writing to {wpath}")
        with open(wpath, "w", encoding="utf-8") as wfile:
            wfile.write("[")
            # i*10 because we want ranges of 10 since that's how many videos are included in each search
            # 0-9, 10-19, ... 40-49
            for index, viewcount in enumerate(viewcounts[i*lengthOfSearches:(i+1)*lengthOfSearches], start=i*lengthOfSearches):
                vdict = {"videoId": video_ids[index], "viewCount": viewcount}
                # print(f"index: {index} {vdict}")
                wfile.write(json.dumps(vdict, ensure_ascii=False))
                if index < (i+1)*lengthOfSearches - 1: # ex [10:20] grabs 10-19 so we want index < 19 not 20
                    wfile.write(", ")
            wfile.write("]")

# if you want to batch write for 1-1000.json start = 1 end = 1000
def save_batch_yt_viewcounts_json(yt_api, start, end):
    total_batches = int(((end+1) - start) / 5)
    for i in range(start, end+1, 5):
        video_ids = []
        # yt api accepts up to 50 video ids per list so 10 per json file which is 5 files
        for x in range(5):
            fpath = os.path.join(OP_SEARCH_RESULTS_JSON, f"{i+x}.json")
            print(f"opening file {fpath}")
            # just to make sure program doesnt crash on accident
            if os.path.exists(fpath):
                with open(fpath, "r", encoding="utf-8") as file:
                    searches = json.load(file)
                    for search in searches['items']:
                        video_ids.append(search['id']['videoId'])

        batch_num = int((i - start) / 5) + 1
        print(video_ids)
        if len(video_ids) > 0:
            save_yt_viewcounts_json(yt_api, i, video_ids) # i=1 -> 1.json, i=1000 -> 1000.json
            print(f"Completed batch {batch_num}/{total_batches}")
        else:
            print(f"No youtube id's found batch {batch_num}/{total_batches} not completed")
        time.sleep(random.uniform(1.0, 1.5))

class MaxHeap(object):
    def __init__(self, item): self.item = item
    def __lt__(self, other): return self.item['viewcount'] > other.item['viewcount']
    def __eq__(self, other): return self.item['viewcount'] == other.item['viewcount']
    def __str__(self): return str(self.item)

# saves to one json file [{yt_video_id, yt_viewcount}, {yt_video_id, yt_viewcount}, ... {yt_video_id, yt_viewcount}]
# with the first entry being top 1 while the last entry is the top 1000
def top_1000_json(dir, op):
    # check that its a valid directory and grab its files
    if not dir in (OP_VIEWCOUNTS_JSON, ED_VIEWCOUNTS_JSON):
        print("Exiting directory does not match accepted ones")
        sys.exit()
    # sorts file numerically extracting only the digits out of *.json
    files = sorted([f for f in os.listdir(dir) if os.path.isfile(os.path.join(dir, f))])
    file_name = "op" if op else "ed"
    with open(os.path.join(TOP_1000_JSON, f"{file_name}_by_score.json"), "w", encoding="utf-8") as top_score:
        with open(os.path.join(TOP_1000_JSON, f"{file_name}_by_viewcount.json"), "w", encoding="utf-8") as top_viewcount:
            top_score.write("[")
            top_viewcount.write("[")
            max_heap_viewcount = []
            length = len(files)
            for index, file in enumerate(files, start=1):
                with open(os.path.dir(dir, file), "r", encoding="utf-8") as f:
                    videos = json.load(f)
                    highest_viewcount = {"yt_video_id":"", "yt_viewcount":0}
                    for video in videos:
                        if video['viewCount'] > highest_viewcount['yt_viewcount']:
                            highest_viewcount['yt_video_id'] = video['videoId']
                            highest_viewcount['yt_viewcount'] = video['viewCount']
                    heapq.heappush(max_heap_viewcount, MaxHeap(highest_viewcount))
                    top_score.write(json.dumps(highest_viewcount, ensure_ascii=False))
                    if index < length:
                        top_score.write(",")
            top_score.write("]")
            for i in range(1000):
                top_viewcount.write(json.dumps(heapq.heappop(max_heap_viewcount), ensure_ascii=False))
                if i < 999:
                    top_viewcount.write(",")
            top_viewcount.write("]")

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