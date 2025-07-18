import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { filters, type FilterType } from "@types/filter";
import type { GuessedStatusType, SongType } from "@types/song";
import './GuessTheSong.css';
import MediaPlayer from "@components/MediaPlayer/MediaPlayer";
import GuessBar from "@components/GuessBar/GuessBar";
import Hints from "@components/Hints/Hints";
import { useGuessStatesContext } from "@components/ContextProviders/GuessStatesContext";
import { useFilterContext } from "@components/ContextProviders/FilterContext";

// Query the DB by wrapping a python script with a fastapi and having this file call the endpoint

function GuessTheSong() {
    // for back button to go to home page
    const navigate = useNavigate();
    
    // grab needed parameters from the current url
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    const filter = queryParams.get('filter');
    // get id and filter from /guess?id=...&filter=...
    const songId = id ? parseInt(id, 10) : null;
    const decodedFilter = filter ?? "";
    // check that the id is valid and that decodedFilter matches one of the FilterType strings
    const validSong = songId && songId > 0 && songId < 1001 && filters.map((f) => f == decodedFilter).length > 0;

    const [song, setSong] = useState<SongType>(null);
    const [error, setError] = useState<string | null>(null);
    // for Hints
    const [hintsRevealed, setHintsRevealed] = useState(0);
    // for GuessBar
    const [guesses, setGuesses] = useState<string[]>([]);
    
    // update guess states
    const { guessStates, updateGuessStates } = useGuessStatesContext();
    const filterContext = useFilterContext();

    // replace once ModeContext is written
    const section = 'op';
    
    // Did the user guess correctly and win??! and for GuessBar and MediaPlayer
    const [status, setStatus] = useState<GuessedStatusType>(() => guessStates[section]?.[filterContext.filter]?.[songId ?? ""]?.status ?? 'Attempting');
    
    // grab the song details with the fast api
    const fetchSong = () => {
        if (!songId) return;
        fetch(`http://localhost:8080/song?id=${songId}&filter=${decodedFilter}`)
            .then((res) => {
                if (!res.ok) {
                    setError(`${res.status}: Error fetching song ${songId}`);
                    throw new Error(`Error fetching song ${songId}: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => setSong(data))
            .catch((err) => console.error("Fetch error:", err));
    }

    // keep local state in sync
    useEffect(() => {
        fetchSong();
        const songEntry = guessStates[section]?.[filterContext.filter]?.[songId ?? ''];
        setGuesses(songEntry?.guesses ?? []);
        setHintsRevealed(songEntry?.guesses.length ?? 0);
        setStatus(songEntry?.status ?? 'Attempting');
    }, [songId, filterContext.filter, guessStates]);

    const submitGuess = useCallback((newGuess : string) => {
        const guess = newGuess.trim();
        if (!songId || guess === '') return;

        // update local ui
        setHintsRevealed((prev) => prev + 1);
        setGuesses((prev) => [...prev, guess]);
        const guessedAnimeCorrectly = song?.def_title === guess || song?.eng_title === guess;
        const failedToGuess = hintsRevealed === 6 ? true : false;
        const result : GuessedStatusType = guessedAnimeCorrectly ? 'Correct' : (failedToGuess ? 'Incorrect' : 'Attempting')
        setStatus(result);
        
        // update context
        updateGuessStates(section, filterContext.filter, songId, guess, result);
    }, [songId, filterContext.filter, guesses, status, guessStates]);

    useEffect(() => {
        console.log('guessStates updated', guessStates);
    }, [guessStates]);

    // return appropriate html based on song and error states
    if (validSong && song) {
        return (
            <div>
                <div>Guess the song {songId} and {decodedFilter}</div>
                <div>Num guesses: {hintsRevealed}</div>
                {status === 'Correct' && (
                    <div>You guessed correctly!</div>
                )}
                {status === 'Incorrect' && (
                    <div>Better Luck Next Time!</div>
                )}
                {guesses}
                <Hints hintsRevealed={hintsRevealed} song={song} />
                <GuessBar onSubmit={submitGuess} guesses={guesses} won={status === 'Correct'} disabled={status === 'Correct' || status === 'Incorrect'} />
                <MediaPlayer showVideo={status === 'Correct' || status === 'Incorrect'} />
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
        )
    } else if (error) {
        return (
            <div>
                <div>{error}</div>
            </div>
        )
    } else {
        return (
            <span className="Loading">
                Song Loading
                <span className="dot one">.</span>
                <span className="dot two">.</span>
                <span className="dot three">.</span>
            </span>
        )
    }
}

export default GuessTheSong;