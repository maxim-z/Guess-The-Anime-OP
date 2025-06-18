from yt_op_viewcounts import get_searcher, get_yt_url, update_yt_urls_op_db, extract_video_id
from anime_db import ANIME_DB, YT_OPS_TABLE, YT_EDS_TABLE, get_connection, update_row
import json

def main():
    yt_api = get_searcher()
    cursor, connection = get_connection(ANIME_DB)
    update_yt_urls_op_db(cursor, connection, YT_OPS_TABLE, yt_api)

if __name__ == "__main__":
    main()