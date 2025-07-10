import { useEffect, useState } from "react";
import type { FilterType } from "./types/types";
import "./SongTile.css"

type SongProps = {
    song_id: number;
    song_filter: FilterType
}

function Song( {song_id, song_filter} : SongProps ) {
    const [guessed, setGuessed] = useState('None'); // Correct = green Incorrect = red None = default color

    useEffect(() => {
        const getGuess = localStorage.getItem(`${song_id}`);
        if (getGuess){
            setGuessed(getGuess);
        }
    }, [])

    return (
        <div 
            className={`Song ${guessed}`}>{song_id}</div>
    )
}

export default Song;