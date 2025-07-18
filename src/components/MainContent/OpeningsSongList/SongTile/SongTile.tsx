import "./SongTile.css"
import { useGuessStatesContext } from "@components/ContextProviders/GuessStatesContext";
import { useFilterContext } from "@components/ContextProviders/FilterContext";

function Song( {song_id} : {song_id : number} ) {
    const { filter } = useFilterContext();
    const { guessStates } = useGuessStatesContext();

    const guessed = guessStates['op']?.[filter]?.[song_id]?.status ?? 'None';

    return (
        <div className={`Song ${guessed}`}>
            {song_id}
        </div>
    )
}

export default Song;