PRAGMA foreign_keys = ON;

-- sqlite3 guess_the_anime_op.db < guesslist.sql > results.txt

-- BY SCORE
-- .output animeopeningguesslist.txt
-- def titles
-- .output def_titles_list_score.txt
SELECT anime.def_title
FROM anime
INNER JOIN top_1000_by_score ON anime.mal_id = top_1000_by_score.anime_id;
-- .output stdout

-- eng titles
-- .output eng_titles_list_score.txt
SELECT anime.eng_title
FROM anime
INNER JOIN top_1000_by_score ON anime.mal_id = top_1000_by_score.anime_id;
-- .output stdout

-- BY VIEWCOUNT
-- def titles
-- .output def_titles_list_viewcount.txt
SELECT anime.def_title
FROM anime
INNER JOIN top_1000_by_viewcount ON anime.mal_id = top_1000_by_viewcount.anime_id;
-- .output stdout

-- eng titles
-- .output eng_titles_list_viewcount.txt
SELECT anime.eng_title
FROM anime
INNER JOIN top_1000_by_viewcount ON anime.mal_id = top_1000_by_viewcount.anime_id;
-- .output stdout