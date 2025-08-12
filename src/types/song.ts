// Used in GuessTheSong and Songs.tsx
export type GuessedStatusType = 'Correct' | 'Incorrect' | 'Attempting' | 'None';
export const statusFilters : GuessedStatusType[] = ['Correct', 'Incorrect', 'Attempting', 'None'] as const;

// Used for api calls
export type SongFilterType =
|  "anime_id"
|  "eng_title"
|  "def_title"
|  "rank"
|  "year_released"
|  "season"
|  "num_episodes"
|  "score"
|  "num_members"
|  "genres"
|  "studios"
|  "id"
|  "song_title"
|  "song_artist"
|  "yt_video_id"
|  "yt_viewcount"
|   "type"
|   "source"
|   "img_url"
|   "synopsis"

export const song_params: SongFilterType[] = [
  "anime_id",
  "eng_title",
  "def_title",
  "rank",
  "year_released",
  "season",
  "num_episodes",
  "score",
  "num_members",
  "genres",
  "studios",
  "id",
  "song_title",
  "song_artist",
  "yt_video_id",
  "yt_viewcount",
  "type",
  "source",
  "img_url",
  "synopsis"
] as const;

export type SongType = null | {
  anime_id: number,
  eng_title: string,
  def_title: string,
  rank: number,
  year_released: number,
  season: string,
  num_episodes: number,
  score: number,
  num_members: number,
  genres: string,
  studios: string,
  id: number,
  song_title: string,
  song_artist: string,
  yt_video_id: string,
  yt_viewcount: number,
  type: string,
  source: string,
  img_url: string,
  synopsis: string
}

export type SongProps = {
    song_id: number;
    song_filter: SongFilterType
}