from yt_op_viewcounts import get_searchers, get_yt_url, update_yt_urls_op_db
from anime_db import ANIME_DB, YT_OPS_TABLE, YT_EDS_TABLE, get_connection, update_row

def main():
    yt_api, ddg = get_searchers()
    cursor, connection = get_connection(ANIME_DB)
    #update_yt_urls_op_db(cursor, YT_OPS_TABLE, ddg)
    update_row(cursor, connection, YT_OPS_TABLE, "yt_url", "hi there", 1)

if __name__ == "__main__":
    main()