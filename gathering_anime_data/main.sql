PRAGMA foreign_keys = ON;

-- Top 1000 unique openings by anime score and by highest viewcount of each song tied to the anime
-- Have to drop the table first before re-running since I insert into
CREATE TABLE IF NOT EXISTS top_1000_by_score (
    id INTEGER PRIMARY KEY,
    anime_id INTEGER NOT NULL,
    song_title TEXT,
    song_artist TEXT,
    yt_video_id TEXT,
    yt_viewcount INTEGER,
    FOREIGN KEY(anime_id) REFERENCES anime(mal_id)
);

CREATE TABLE IF NOT EXISTS top_1000_by_viewcount (
    id INTEGER PRIMARY KEY,
    anime_id INTEGER NOT NULL,
    song_title TEXT,
    song_artist TEXT,
    yt_video_id TEXT,
    yt_viewcount INTEGER,
    FOREIGN KEY(anime_id) REFERENCES anime(mal_id)
);

-- GROUP by anime id and get the top viewcount out of each section and 
-- dedupe by song artist, title cause there's duplicates across different mal id's
CREATE TEMP TABLE temp_by_viewcount AS
WITH per_anime AS (
    SELECT
        anime.score,
        anime.mal_id AS anime_id, 
        yt_ops.song_title, 
        yt_ops.song_artist, 
        yt_ops.yt_video_id, 
        yt_ops.yt_viewcount,
        ROW_NUMBER() OVER (
            PARTITION BY anime.mal_id 
            ORDER BY yt_ops.yt_viewcount DESC
        ) AS row_num_anime
    FROM anime
    LEFT JOIN yt_ops ON anime.mal_id = yt_ops.anime_id
    WHERE anime.type = 'TV' 
      AND yt_ops.yt_video_id != ''
),
deduped AS (
    SELECT 
        *,
        ROW_NUMBER() OVER (
            PARTITION BY song_title, song_artist 
            ORDER BY yt_viewcount DESC
        ) AS row_num_song
    FROM per_anime
    WHERE row_num_anime = 1
)
SELECT
    score,
    anime_id,
    song_title,
    song_artist,
    yt_video_id,
    yt_viewcount,
    row_num_anime,
    row_num_song
FROM deduped
WHERE row_num_song = 1;

-- TOP 1000 BY SCORE
DELETE FROM top_1000_by_score;
-- insert the first row of the grouped viewcounts
INSERT INTO top_1000_by_score (anime_id, song_title, song_artist, yt_video_id, yt_viewcount)
SELECT anime_id, song_title, song_artist, yt_video_id, yt_viewcount
FROM temp_by_viewcount
WHERE row_num_song = 1
ORDER BY score DESC
LIMIT 1000;

-- TOP 1000 BY VIEWCOUNT
DELETE FROM top_1000_by_viewcount;
-- insert the first row of the grouped anime id's by viewcount
INSERT INTO top_1000_by_viewcount (anime_id, song_title, song_artist, yt_video_id, yt_viewcount)
SELECT anime_id, song_title, song_artist, yt_video_id, yt_viewcount
FROM temp_by_viewcount
WHERE row_num_song = 1
ORDER BY yt_viewcount DESC
LIMIT 1000;

DROP TABLE IF EXISTS temp_by_viewcount;