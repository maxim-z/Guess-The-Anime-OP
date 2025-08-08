import { filters, type FilterType } from "@types"
import { statusFilters, type GuessedStatusType } from "@types"
import { createContext, useCallback, useContext, useState, useMemo, useEffect } from "react"
import fallBackOpeningGuessList from '../../assets/animeopeningguesslist.txt?raw'
import fallBackEndingGuessList from '../../assets/animeendingguesslist.txt?raw'
import z from "zod"
import { modes, type ModeType } from "@types"

// all possible anime guesses for the openings
export const baseOpeningList = fallBackOpeningGuessList
    .split('\n')
    .map(g => g.trim())
    // .filter(Boolean);
// ordered
// def title
// eng title and so on

export const openingAnimeGuessListDefaultTitle = baseOpeningList.filter((_, i) => i % 2 === 1 ? true : false);
export const openingAnimeGuessListEnglishTitle = baseOpeningList.filter((_, i) => i % 2 === 0 ? true : false);

// all possible anime guesses for the endings
const baseEndingsList = fallBackEndingGuessList
    .split('\n')
    .map(g => g.trim())
    // .filter(Boolean);
// ordered
// def title
// eng title and so on

export const endingAnimeGuessListDefaultTitle = baseEndingsList.filter((_, i) => i % 2 === 1 ? true : false);
export const endingAnimeGuessListEnglishTitle = baseEndingsList.filter((_, i) => i % 2 === 0 ? true : false);

// {filter: {songId: {status:'', guesses: []}, songId: ...}, filter: {}, ...}
export type GuessStatesMap = {
    [mode in ModeType] : {
        [filter in FilterType]? : {
            [songId : string] : {
                'status' : GuessedStatusType, // Correct | Incorrect | None
                'guesses' : string[] // anime_1, anime_2, anime_3... anime_n
            }
        }
    }
}

// zod enforcing typechecking section for GuessStatesMap
// used when loading JSON Progress for guessing the songs
// can do this because the arrays passed in are declared as [...] as const
const modeEnum = z.enum(modes); // Opening...
const filterEnum = z.enum(filters); // Top 1000...
const statusEnum = z.enum(statusFilters); // Correct...
// guess schema
const guessEntrySchema = z.object({
    status: statusEnum,
    guesses: z.array(z.string())
});
// song id -> guessEntry
const songMapSchema = z.record(z.string(), guessEntrySchema);
// filter -> songs
const filterMapSchema = z.object(
    Object.fromEntries(
        filterEnum.options.map((f) => [f, songMapSchema.optional()]) // Top 1000 : {songid...} Random Preset 1 ...
    )
);
// mode -> filter
export const guessStatesSchema = z.object(
    Object.fromEntries(
        modeEnum.options.map((m) => [m, filterMapSchema.optional()]) // Opening, ...
    )
);
// mode -> filter -> song -> guess entry
export type guessStatesType = z.infer<typeof guessStatesSchema>;

// what information and functions the context will provide
type GuessStateContextType = {
    guessStates: GuessStatesMap;
    updateGuessStates: (section: ModeType, filter: FilterType, songId: number, newGuess: string | null, result: GuessedStatusType) => void;
    loadGuessStates: (data: GuessStatesMap) => void;
    saveGuessStates: () => void;
}

const GuessStatesContext = createContext<GuessStateContextType | undefined>(undefined);

// return nothing if being accessed outside the provider
export const useGuessStatesContext = () => {
    const context = useContext(GuessStatesContext);
    if (!context) throw new Error("useGuessStateContext must be used within the provider!");
    return context;
};

export const GuessStatesProvider = ({children} : {children: React.ReactNode}) => {
    // load guessState from localStorage
    const [guessStates, setGuessStates] = useState<GuessStatesMap>(() => {
        const raw = localStorage.getItem('guessStates');
        console.log(raw ? JSON.parse(raw) : {});
        return raw ? JSON.parse(raw) : {};
    });

    // only update localstorage when guessStates changes
    useEffect(() => {
        localStorage.setItem('guessStates', JSON.stringify(guessStates));
    }, [guessStates]);

    // can update just the result by passing null for newGuess or update both by passing a string for newGuess
    const updateGuessStates = useCallback(
        (
            section: ModeType,
            filter: FilterType, 
            songId: number, 
            newGuess: string | null, 
            result: GuessedStatusType
        ) => {
            setGuessStates(prev => {
                const sectionData = prev[section] ?? {};
                // see if guesses are empty
                const prevGuesses = sectionData[filter]?.[songId]?.guesses ?? [];
                // update with a new guess if it exists and isn't just an empty string
                const updatedGuesses = (newGuess != null /*&& newGuess.trim() !== ''*/) ? [...prevGuesses, newGuess] : prevGuesses;
                const updated = {
                    ...prev,
                    [section] : {
                        ...sectionData,
                        [filter]: {
                            ...(sectionData[filter] || {}),
                            [songId]: {
                                status: result,
                                guesses: updatedGuesses
                            },
                        },
                    }
                };
                return updated;
            });
    }, []);

    // load guess state from json
    const loadGuessStates = useCallback((data: GuessStatesMap) => setGuessStates(data), []);

    // save guess state to json
    const saveGuessStates = useCallback(() => {
        const blob = new Blob([JSON.stringify(guessStates, null, 2)], {
          type: 'application/json',
        });
        const url = URL.createObjectURL(blob);
    
        const a = document.createElement('a');
        a.href = url;
        a.download = 'GuessTheAnimeOpeningEndingProgress.json';
        a.click();
        URL.revokeObjectURL(url);
    }, [guessStates]);

    // only update when guessStates changes
    const value = useMemo(() => ({guessStates, updateGuessStates, loadGuessStates, saveGuessStates }), [guessStates, saveGuessStates]);

    // wrap App in Provider in main.tsx
    return (
        <GuessStatesContext.Provider value={value}>
            {children}
        </GuessStatesContext.Provider>
    );
};