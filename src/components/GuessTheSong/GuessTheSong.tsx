import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { filters, type FilterType } from "@types";
import { type GuessedStatusType, type SongType } from "@types";
import './GuessTheSong.css';
import MediaPlayer from "@components/MediaPlayer/MediaPlayer";
import GuessBar from "@components/GuessBar/GuessBar";
import Hints from "@components/Hints/Hints";
import { useGuessStatesContext } from "@components/ContextProviders/GuessStatesContext";
import { useFilterContext } from "@components/ContextProviders/FilterContext";
import { useModeContext } from "@components/ContextProviders/ModeContext";
import type { ModeType } from "@types";
import { MAX_SONGS } from "@config/config";

// Query the DB by wrapping a python script with a fastapi and having this file call the endpoint

function GuessTheSong() {
    // for back button to go to home page
    const navigate = useNavigate();
    
    // grab needed parameters from the current url
    const location = useLocation();
    const [queryParams, setQueryParams] = useState<URLSearchParams | null>(null);
    // get id and filter from /guess?id=...&filter=...
    const [songId, setSongId] = useState<number | null>(null);
    const [decodedFilter, setDecodedFilter] = useState<FilterType | string>('');
    // check that the id is valid and that decodedFilter matches one of the FilterType strings
    // const validSong = songId && songId > 0 && songId < 1001 && filters.map((f) => f == decodedFilter).length > 0;

    const [song, setSong] = useState<SongType>(null);
    const [error, setError] = useState<string | null>(null);
    // for Hints
    const [hintsRevealed, setHintsRevealed] = useState(0);
    // for GuessBar
    const [guesses, setGuesses] = useState<string[]>([]);
    
    // update guess states
    const { guessStates, updateGuessStates } = useGuessStatesContext();
    const { filter, updateFilter } = useFilterContext();

    // replace once ModeContext is written
    const { mode } = useModeContext();
    
    // Did the user guess correctly and win??! and for GuessBar and MediaPlayer
    const [status, setStatus] = useState<GuessedStatusType>(() => guessStates[mode as ModeType]?.[filter]?.[songId ?? ""]?.status ?? 'Attempting');
    // Did an end game state get reached?
    const [endGameState, setendGameState] = useState(() => status === 'Correct' || status === 'Incorrect');
    
    const API_BASE = "https://guess-the-anime-op.onrender.com";
    // process.env.NODE_ENV === "production"
    //   ? "https://guess-the-anime-op.onrender.com"
    //   : "http://localhost:8080";

    // grab the song details with the fast api
    const fetchSong = () => {
        if (!songId || decodedFilter === '') {
            setSong(null);
            setError(`Song ${songId} with filter does not exist`);
            return;
        }
        fetch(`${API_BASE}/song?id=${songId}&filter=${decodedFilter}`)
            .then((res) => {
                if (!res.ok) {
                    setSong(null);
                    setError(`${res.status}: Error fetching song ${songId}`);
                    throw new Error(`Error fetching song ${songId}: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => setSong(data))
            .catch((err) => console.error("Fetch error:", err));
    }

    // when using buttons to navigate need to read in params from location again
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        setQueryParams(queryParams);
        const id = queryParams.get('id');
        const filter = queryParams.get('filter') ?? '';
        // get id and filter from /guess?id=...&filter=...;
        const parsedId = id ? parseInt(id) >= 1 && parseInt(id) <= MAX_SONGS ? parseInt(id) : null : null;
        const decodedFilter = filters.includes(filter as FilterType) ? filter as FilterType : '';

        // check if it's a valid id if not set to null
        if (parsedId && parsedId >= 1 && parsedId <= MAX_SONGS) {
            setSongId(parsedId);
        } else {
            setSongId(null);
        }
        setDecodedFilter(decodedFilter);
        if (filter !== '') updateFilter(filter as FilterType);
    }, [location.search]);

    // check if the end game state has been reached
    useEffect(() => {
        setendGameState(status === 'Correct' || status === 'Incorrect');
    }, [status]);

    // keep local state in sync
    useEffect(() => {
        fetchSong();
        const songEntry = guessStates[mode as ModeType]?.[filter]?.[songId ?? ''];
        setGuesses(songEntry?.guesses ?? []);
        setHintsRevealed(songEntry?.guesses.length ?? 0);
        setStatus(songEntry?.status ?? 'Attempting');
    }, [songId, filter, guessStates]);

    const submitGuess = useCallback((newGuess : string) => {
        const guess = newGuess.trim();
        if (!songId) return;

        // update local ui
        setHintsRevealed((prev) => prev + 1);
        setGuesses((prev) => [...prev, guess]);
        const guessedAnimeCorrectly = song?.def_title.includes(guess) || song?.eng_title.includes(guess);
        const failedToGuess = hintsRevealed === 5 ? true : false;
        // guessed correctly with hintsRevealed < 5 = WIN
        // failedToGuess = LOSE
        // !failedToGuess = ATTEMPTING
        const result : GuessedStatusType = guessedAnimeCorrectly && !failedToGuess ? 'Correct' : (failedToGuess ? 'Incorrect' : 'Attempting')
        setStatus(result);
        
        // update context
        updateGuessStates(mode, filter, songId, guess, result);
    }, [songId, song, filter, guesses, status, hintsRevealed, guessStates]);

    // return appropriate html based on song and error states
    // only returns GuessTheSong if the song fetched from the db exists
    if (song) {
        return (
            <div className="GuessTheSongContainer">
                <div className="">Guess anime {songId}!</div>
                <div>{decodedFilter}</div>
                {/* <div>Num guesses: {hintsRevealed}</div> */}
                {status === 'Correct' && (
                    <div>You guessed correctly!</div>
                )}
                {status === 'Incorrect' && (
                    <div>Better Luck Next Time!</div>
                )}
                <div className="AnimeInfoContainer">
                    {endGameState && (
                        <div 
                            className="ColWrapper" 
                            style={{textAlign: 'center'}}
                        >
                            <div>{song.eng_title}</div>
                            <div>{song.def_title}</div>
                            <img src="https://cdn.myanimelist.net/images/anime/1015/138006.webp" alt={`${song.eng_title}`} />
                        </div>
                    )}
                    <Hints hintsRevealed={hintsRevealed} song={song} endGameState={endGameState} />
                </div>
                <MediaPlayer hintsRevealed={hintsRevealed} videoId={song.yt_video_id} showVideo={endGameState} />
                <GuessBar onSubmit={submitGuess} guesses={guesses} won={status === 'Correct'} disabled={endGameState} />
                <div className="ButtonsContainer">
                    <button 
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                        onClick={(e) => {
                            e.preventDefault()
                            if (songId && queryParams) {
                                const prevId = songId > 1 ? songId - 1 : MAX_SONGS;
                                queryParams.set('id', prevId.toString());
                                navigate(`/guess?${queryParams.toString()}`);
                            }
                        }}
                    >
                        Prev
                    </button>
                    <button 
                        className="bg-[var(--primary-color)] text-white px-4 py-2 rounded"
                        onClick={() => navigate('/')}
                    >
                        Back
                    </button>
                    <button
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                        onClick={(e) => {
                            e.preventDefault()
                            if (songId && queryParams) {
                                const nextId = songId < MAX_SONGS ? songId + 1 : 1;
                                queryParams.set('id', nextId.toString());
                                navigate(`/guess?${queryParams.toString()}`);
                            }
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        )
    } else if (error) {
        return (
            <div>
                <div>{error}</div>
                <div>Go back and wait 10-15 seconds and click again the server is spinning back up for you!</div>
                <button
                    className="bg-gray-500 text-white px-4 py-2 rounded" 
                    onClick={() => navigate(-1)}
                >
                    Back
                </button>
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