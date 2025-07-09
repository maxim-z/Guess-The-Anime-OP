import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { filters } from "@types/filter";
import { song_params } from "@types/song";
import type { SongFilterType, SongType } from "@types/song";
import './GuessTheSong.css';
import MediaPlayer from "@components/MediaPlayer/MediaPlayer";
import GuessBar from "@components/GuessBar/GuessBar";

// Query the DB by wrapping a python script with a fastapi and having this file call the endpoint

function GuessTheSong() {
    const [song, setSong] = useState<SongType>(null);
    const [error, setError] = useState<string | null>(null);

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

    useEffect(() => {
        fetchSong()
    }, [songId]);

    // return appropriate html based on song and error states
    if (validSong && song) {
        return (
            <div>
                <div>Guess the song {songId} and {decodedFilter}</div>
                {song_params.map((param) => {
                    return (
                        <div>{song[param]}</div>
                    )
                })}
                <GuessBar />
                <MediaPlayer />
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