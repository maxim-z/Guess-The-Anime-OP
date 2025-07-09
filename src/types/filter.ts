// Used for keeping track of how songs are filtered
export type FilterType = 
|   "Top 1000 by Song Viewcount"
|   "Random Preset 1"
|   "Random Preset 2"
|   "Random Preset 3"
|   "Top 1000 by Anime Score"
|   "Random Preset 4"
|   "Random Preset 5"
|   "Random Preset 6";

export const filters: FilterType[] = [
    "Top 1000 by Song Viewcount",
    "Random Preset 1",
    "Random Preset 2",
    "Random Preset 3",
    "Top 1000 by Anime Score",
    "Random Preset 4",
    "Random Preset 5",
    "Random Preset 6"
  ] as const;
  
// export type FilterType = typeof filters[number];

export type FilterProps = {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}