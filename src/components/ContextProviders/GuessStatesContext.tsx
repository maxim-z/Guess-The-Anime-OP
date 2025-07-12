import type { FilterType } from "@types/filter"
import type { GuessedType } from "@types/song"
import { readFileSync } from "fs"
import { createContext, useContext, useState } from "react"

// {filter: {songId: {status:'', guesses: []}, songId: ...}, filter: {}, ...}
type GuessStatesMap = {
    [filter in FilterType]? : {
        [songId : string] : {
            'status' : GuessedType, // Correct | Incorrect | None
            'guesses' : string[] // anime_1, anime_2, anime_3... anime_n
        }
    }
}

// what information and functions the context will provide
type GuessStateContextType = {
    // animeGuessList: string[];
    guessStates: GuessStatesMap;
    updateGuessStates: (filter: FilterType, songId: number, newGuess: string | null, result: GuessedType) => void;
}

const GuessStatesContext = createContext<GuessStateContextType | undefined>(undefined);

// return nothing if being accessed outside the provider
export const useGuessStatesContext = () => {
    const context = useContext(GuessStatesContext);
    if (!context) throw new Error("useGuessStateContext must be used within the provider!");
    return context;
};

export const GuessStatesProvider = ({children} : {children: React.ReactNode}) => {
    // load animeGuessList from localStorage or from txt file
    // const [animeGuessList, setAnimeGuessList] = useState<string[]>(() => {
    //     const raw = localStorage.getItem('animeGuessList');
    //     return raw ? JSON.parse(raw) : 
    //         readFileSync('../../assets/animeGuessList.txt')
    // });

    // load guessState from localStorage
    const [guessStates, setGuessStates] = useState<GuessStatesMap>(() => {
        const raw = localStorage.getItem('guessState');
        console.log(raw ? JSON.parse(raw) : {});
        return raw ? JSON.parse(raw) : {};
    });


    // can update just the result by passing null for newGuess or update both by passing a string for newGuess
    const updateGuessStates = ((filter: FilterType, songId: number, newGuess: string | null, result: GuessedType) => {
        setGuessStates(prev => {
            // see if guesses are empty
            const prevGuesses = prev[filter]?.[songId]?.guesses ?? [];
            // update with a new guess if it exists and isn't just an empty string
            const updatedGuesses = (newGuess || newGuess?.trim() === '') ? [...prevGuesses, newGuess] : prevGuesses;
            const updated = {
                ...prev,
                [filter]: {
                    ...(prev[filter] || {}),
                    [songId]: {
                        status: result,
                        guesses: updatedGuesses
                    },
                },
            };
            localStorage.setItem('guessState', JSON.stringify(guessStates));
            return updated;
        })
    });

    // wrap App in Provider in main.tsx
    return (
        <GuessStatesContext.Provider value={{ /*animeGuessList,*/ guessStates, updateGuessStates }}>
            {children}
        </GuessStatesContext.Provider>
    );
};