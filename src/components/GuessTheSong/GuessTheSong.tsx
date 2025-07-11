import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { filters } from "@types/filter";
import type { SongType } from "@types/song";
import './GuessTheSong.css';
import MediaPlayer from "@components/MediaPlayer/MediaPlayer";
import GuessBar from "@components/GuessBar/GuessBar";
import Hints from "@components/Hints/Hints";
import { useGuessStatesContext } from "@components/ContextProviders/GuessStatesContext";
import { useFilterContext } from "@components/ContextProviders/FilterContext";

// Query the DB by wrapping a python script with a fastapi and having this file call the endpoint

function GuessTheSong() {
    const [song, setSong] = useState<SongType>(null);
    const [error, setError] = useState<string | null>(null);
    // for Hints
    const [hintsRevealed, setHintsRevealed] = useState(0);
    // for GuessBar
    const [guess, setGuess] = useState('');
    const [guesses, setGuesses] = useState<string[]>([]);
    // Did the user guess correctly and win??! and for GuessBar and MediaPlayer
    let guessedAnimeCorrectly = song?.eng_title === guess || song?.def_title === guess ? true : false;
    const failedToGuessCorrectly = hintsRevealed == 6 ? true : false;

    // update guess states
    const guessContext = useGuessStatesContext();
    const filterContext = useFilterContext();

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

    // loads the state that this songId was previously in
    const reloadGuessing = () => {
        // reset guess states
        setGuess('');
        setHintsRevealed(0);
        // now load whatever is in context
        if (songId) {
            const getGuesses = guessContext.guessStates[filterContext.filter]?.[songId].guesses;
            const loadedGuesses = getGuesses ? [...getGuesses] : [];
            setGuesses(loadedGuesses);
            setHintsRevealed(loadedGuesses.length);
            const status = guessContext.guessStates[filterContext.filter]?.[songId].status;
            if (status && status === 'Correct') {
                guessedAnimeCorrectly = true;
            }
        }
    }

    // useEffect(() => {
    //     if (hintsRevealed === 0){
    //         // if its reloaded update the state
    //         reloadGuessing();
    //     }
    // }, [hintsRevealed]);

    useEffect(() => {
        fetchSong();
        reloadGuessing();
    }, [songId]);

    useEffect(() => {
        if (songId && guess.trim() !== '') {
            setHintsRevealed((prev) => prev + 1);
            setGuesses((prev) => [...prev, guess]);
            const result = guessedAnimeCorrectly ? 'Correct' : (failedToGuessCorrectly ? 'Incorrect' : 'Attempting');
            guessContext.updateGuessStates(filterContext.filter, songId, guess, result);
        }
    }, [guess])

    // return appropriate html based on song and error states
    if (validSong && song) {
        return (
            <div>
                <div>Guess the song {songId} and {decodedFilter}</div>
                <div>Num guesses: {hintsRevealed}</div>
                {guessedAnimeCorrectly && (
                    <div>You guessed correctly!</div>
                )}
                {failedToGuessCorrectly && (
                    <div>Better Luck Next Time!</div>
                )}
                {guesses}
                <Hints hintsRevealed={hintsRevealed} song={song} />
                <GuessBar onSubmit={setGuess} guesses={guesses} won={guessedAnimeCorrectly} disabled={guessedAnimeCorrectly || failedToGuessCorrectly} />
                <MediaPlayer showVideo={guessedAnimeCorrectly || failedToGuessCorrectly} />
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