from yt_op_viewcounts import *
from anime_db import *
import json

def main():
    yt_api = get_searcher()
    cursor, connection = get_connection(ANIME_DB)
    # create_table_anime(cursor)
    # transfer_anime_to_db(1, 200, cursor, connection)
    # cursor, connection = get_connection(TOP_1000_OP_DB)
    # create_table_yt_ops(cursor)
    # create_table_yt_eds(cursor)
    # initialize_yt_ops_eds_table(cursor, connection, ANIME_OPS_EDS_JSON)
    # save_yt_searches_json(cursor, 1, YT_OPS_TABLE, OP_SEARCH_RESULTS_JSON, yt_api)
    save_yt_searches_json(cursor, 4000, YT_EDS_TABLE, ED_SEARCH_RESULTS_JSON, yt_api)

    # save_sanitized_guesslist_to_txt(cursor, ANIME_TABLE, ['def_title', 'eng_title'], 0, "animeopeningguesslist.txt")
    # save_sql_to_sanitized_guesslist_to_txt(cursor, 'guesslist.sql', 'results.txt', 'animeopeningguesslist.txt')
    # save_rows_to_txt(cursor, YT_EDS_TABLE, ['song_title', 'song_artist'], 0, "queries_eds.txt")

    # Writing youtube video viewcounts to json
    # save_batch_yt_viewcounts_json(yt_api, 1999, 4500)

    # Writing viewcounts to db
    # write_viewcounts(cursor, connection, YT_OPS_TABLE)

    # Writing random presets
    # create_table_random_presets(cursor, connection, 5, 6)
    # initialize_random_presets_table(cursor, connection, 1000)
    # create_table_random_preset_2(cursor)
    # create_table_random_preset_3(cursor)
    # create_table_random_preset_4(cursor)
    # create_table_random_preset_5(cursor)
    # create_table_random_preset_6(cursor)
    # write_random_preset(cursor, connection, "1", "1380729.txt")
    # write_random_preset(cursor, connection, "2", "29852731.txt")
    # write_random_preset(cursor, connection, "3", "32859871.txt")
    # write_random_preset(cursor, connection, "4", "529567109.txt")
    # write_random_preset(cursor, connection, "5", "4982729739.txt")
    # write_random_preset(cursor, connection, "6", "9387128740.txt")

if __name__ == "__main__":
    main()