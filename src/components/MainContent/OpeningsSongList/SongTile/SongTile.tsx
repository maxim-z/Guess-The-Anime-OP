import "./SongTile.css"
import { useModeContext } from "@components/ContextProviders/ModeContext";
import { useFilterContext } from "@components/ContextProviders/FilterContext";
import { useGuessStatesContext } from "@components/ContextProviders/GuessStatesContext";
import type { ModeType } from "@types";

function Song( {song_id} : {song_id : number} ) {
    const { mode } = useModeContext();
    const { filter } = useFilterContext();
    const { guessStates } = useGuessStatesContext();

    const guessed = guessStates[mode as ModeType]?.[filter]?.[song_id]?.status ?? 'None';

    return (
        <div className={`Song ${guessed}`}>
            {song_id}
        </div>
    )
}

export default Song;