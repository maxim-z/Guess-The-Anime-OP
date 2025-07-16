import type { FilterType } from "@types/filter"
import type { GuessedType } from "@types/song"
import { createContext, useCallback, useContext, useState, useMemo, useEffect } from "react"
import fallBackGuessList from '../../assets/animeguesslist.txt?raw'

// all possible anime guesses for the openings
export const openingAnimeGuessList = fallBackGuessList
    .split('\n')
    .map(g => g.trim())
    .filter(Boolean)

// {filter: {songId: {status:'', guesses: []}, songId: ...}, filter: {}, ...}
export type GuessStatesMap = {
    'op' : {
        [filter in FilterType]? : {
            [songId : string] : {
                'status' : GuessedType, // Correct | Incorrect | None
                'guesses' : string[] // anime_1, anime_2, anime_3... anime_n
            }
        }
    }
    // add ed here with the same definition as for op
}

// what information and functions the context will provide
type GuessStateContextType = {
    guessStates: GuessStatesMap;
    updateGuessStates: (filter: FilterType, songId: number, newGuess: string | null, result: GuessedType) => void;
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
            filter: FilterType, 
            songId: number, 
            newGuess: string | null, 
            result: GuessedType
        ) => {
            setGuessStates(prev => {
                const op = prev['op'];
                // see if guesses are empty
                const prevGuesses = op[filter]?.[songId]?.guesses ?? [];
                // update with a new guess if it exists and isn't just an empty string
                const updatedGuesses = (newGuess != null && newGuess.trim() !== '') ? [...prevGuesses, newGuess] : prevGuesses;
                const updated = {
                    ...prev,
                    'op' : {
                        [filter]: {
                            ...(op[filter] || {}),
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