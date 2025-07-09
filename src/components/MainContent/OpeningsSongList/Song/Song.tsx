import { useState } from "react";
import type { FilterType } from "./types/types";
import "./Song.css"

type SongProps = {
    song_id: number;
    song_filter: FilterType
}

function Song( {song_id, song_filter} : SongProps ) {
    const [guessed, setGuessed] = useState<'Correct' | 'Incorrect' | 'None'>('None'); // Correct = green Incorrect = red None = default color


    return (
        <div className="Song">{song_id}</div>
    )
}

export default Song;