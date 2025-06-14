import requests
import json
import time
import random
import os

# Purpose of this file:
### Grab needed anime data through jikan api calls and save it to JSON

FILE_PATH = os.path.dirname(__file__)
TOP_ANIME_JSON = os.path.join(FILE_PATH, "anime_json/top_anime_info.json") # {P1:{}, P2:{}, P3:{}, ... PN:{}}
ANIME_OPS_EDS = os.path.join(FILE_PATH, "anime_json/anime_ops_eds.json")   # [{mal_id:###, ops:[], eds:[]}, {...}, ...]

MAX_ANIME=5000
ANIME_PER_PAGE=25
NUM_PAGES=200

# returns the response without any modifications
def generic_response(url):
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data
    else:
        print(f"{response.status_code} : {url}")
        return None

def get_top_anime(page):
    return generic_response(f"https://api.jikan.moe/v4/top/anime?page={page}") # returns 25 per page so I will need to make 200 requests for the top 5000

def get_themes(id):
    return generic_response(f"https://api.jikan.moe/v4/anime/{id}/themes") # returns the opening and ending themes for an anime

# write pages from start to end in a json file of the top anime
def save_top_anime(start, end): # {P1:{}, P2:{}, P3:{}, ... PN:{}}
    with open(TOP_ANIME_JSON, "w") as file:
        for page in range(start, end+1): # start to end
            top_anime = get_top_anime(page)
            if not top_anime: # skip if there was an error
                continue

            if page == start:
                file.write("{")
            file.write(f"\"P{page}\":{json.dumps(top_anime['data'])}")
            if page < end: # for all the pages but the last one
                file.write(",\n")
                time.sleep(random.uniform(3.5, 7.5))
            else: # for the last page
                file.write("}") # close the json object
            print(f"Wrote page: {page}!")
    print(f"Finished writing to {TOP_ANIME_JSON}!")

# save all the top anime to a single json file with 200 lines containing all 5000 top entries
# save_top_anime(1, NUM_PAGES)

# adds the opening and ending songs for an anime to the json
def save_themes(start, end):
    ops_eds = [] # [{mal_id:###, ops:[], eds:[]}, {...}, ...]
    with open("backup.json", "w") as backup:
        with open(TOP_ANIME_JSON, "r") as f_top_anime:
            top_anime = json.load(f_top_anime)
            for i in range(start, end+1):
                page = top_anime[f'P{i}']
                for index, anime in enumerate(page, start=1):
                    title = anime['title']
                    mal_id = anime['mal_id']
                    response = get_themes(mal_id)
                    if not response:
                        print(f"ERROR! {title} : {mal_id}")
                        continue
                    themes = response['data']
                    curr = {"mal_id":mal_id, "ops":themes['openings'], "eds":themes['endings']}
                    ops_eds.append(curr)
                    backup.write(f"{json.dumps(curr, ensure_ascii=False)}\n")
                    # print(f"page: {i} index: {index}")
                    time.sleep(random.uniform(1.0, 2.0))
                print(f"Completed page {i}")
    with open(ANIME_OPS_EDS, "w") as f_ops_eds:
        # f_ops_eds.write(f"{json.dumps(ops_eds)}")
        json.dump(ops_eds, f_ops_eds, ensure_ascii=False)
        print(f"Wrote themes to {ANIME_OPS_EDS}!")

# save_themes(1,200)