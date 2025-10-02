import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
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
import { useIsMobile } from "@components/CustomUseHooks/UseIsMobile";

// Query the DB by wrapping a python script with a fastapi and having this file call the endpoint

function GuessTheSong() {
    // for back button to go to home page
    const navigate = useNavigate();
    // for mobile
    const isMobile = useIsMobile();
    
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

    // After a guess is made scroll to the Hints
    const hintsRef = useRef<HTMLDivElement>(null);
    
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

        // evaluate guess
        // game ends if the user guesses correctly or if they get all 5 hints and guess incorrectly
        const guessedAnimeCorrectly = song?.def_title.includes(guess) || song?.eng_title.includes(guess);
        const failedToGuess = hintsRevealed === 5 ? true : false;
        // guessed correctly = WIN
        // failedToGuess = LOSE
        // !failedToGuess = ATTEMPTING
        const result : GuessedStatusType = guessedAnimeCorrectly ? 'Correct' : (failedToGuess ? 'Incorrect' : 'Attempting');
        // update local ui
        setHintsRevealed((prev) => prev + 1);
        setGuesses((prev) => [...prev, guess]);
        setStatus(result);
        
        // update context
        updateGuessStates(mode, filter, songId, guess, result);

        // scroll up to hints
        if (!hintsRef.current) return;
        hintsRef.current?.scrollIntoView();
    }, [songId, song, filter, guesses, status, hintsRevealed, guessStates]);

    // return appropriate html based on song and error states
    // only returns GuessTheSong if the song fetched from the db exists
    if (song) {
        return (
            <div className="GuessTheSongContainer w-[100%] h-[100%] flex flex-col items-center justify-center gap-[1vw]">
                <h1 
                    className="Title w-full text-center"
                >
                    Guess Anime {mode} {songId}!
                </h1>
                <div>{decodedFilter}</div>
                {/* <div>Num guesses: {hintsRevealed}</div> */}
                {status === 'Correct' && (
                    <div className="w-full text-center animate-bounce">You guessed correctly!</div>
                )}
                {status === 'Incorrect' && (
                    <div className="w-full text-center">Better Luck Next Time!</div>
                )}
                <div className="AnimeInfoContainer flex justify-center w-[80vw] max-w-[640px]">
                    {endGameState && (
                        <div 
                            className="flex flex-col text-center w-full" 
                        >
                            {!song.def_title.startsWith(song.eng_title) && song.eng_title !== song.def_title ? (
                                <div className="flex flex-col p-2">
                                    <div>{song.eng_title}</div>
                                    <div>{song.def_title}</div>
                                </div>
                            ) : (
                                <div className="p-2">{song.eng_title}</div>
                            )}
                            <div className="flex flex-row justify-center">
                                <div className="w-1/2 flex justify-center">
                                    <img 
                                        className="aspect-[2/3] max-h-[300px]" 
                                        src={song.img_url} 
                                        alt={`${song.eng_title}`}
                                    />
                                </div>
                                <div className="w-1/2 flex flex-col items-center content-center justify-center gap-4">
                                    <Hints hintsRevealed={hintsRevealed} song={song} endGameState={endGameState} />
                                    {!isMobile && (
                                        <div className="w-[100%]">
                                            <GuessBar onSubmit={submitGuess} guesses={guesses} won={status === 'Correct'} disabled={endGameState} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    {!endGameState && (
                        <div 
                            ref={hintsRef}
                            className="w-1/2 flex justify-center"
                        >
                            <Hints hintsRevealed={hintsRevealed} song={song} endGameState={endGameState} />
                        </div>
                    )}
                </div>
                <MediaPlayer 
                    hintsRevealed={hintsRevealed} 
                    videoId={song.yt_video_id} 
                    showVideo={endGameState}
                    songTitle={song.song_title} 
                    songArtist={song.song_artist} 
                />
                {!endGameState && (
                    <GuessBar onSubmit={submitGuess} guesses={guesses} won={status === 'Correct'} disabled={endGameState} />
                )}
                {endGameState && isMobile && (
                    <GuessBar onSubmit={submitGuess} guesses={guesses} won={status === 'Correct'} disabled={endGameState} />
                )}
                <div className="ButtonsContainer w-full h-full flex flex-row items-center justify-center gap-[1vw]">
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
                <div>I'm currently using a free tier for db hosting so please wait 30-60 seconds and click again the server is spinning back up for you!</div>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded" 
                    onClick={() => navigate('/')}
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