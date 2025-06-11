import requests
import json
import time
import random

MAX_ANIME=5000
ANIME_PER_PAGE=25
NUM_PAGES=200

def get_top_anime(page):
    url=f"https://api.jikan.moe/v4/top/anime?page={page}" # returns 25 per page so I will need to make 200 requests for the top 5000
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        return data
    else:
        print(f"{response.status_code}")
        return None

# write pages from start to end in a json file of the top anime
def save_top_anime(start, end):
    with open("top_anime_code.json", "w") as file:
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
    print("Finished!")

# save all the top anime to a single json file with 200 lines containing all 5000 top entries
#save_top_anime(1, NUM_PAGES)