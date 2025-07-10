import './Hints.css'
import type { SongFilterType } from '@types/song'
import type { HintProps } from '@types/props'

function Hints( {hintsRevealed, song} : HintProps) {
    const hintCategories : SongFilterType[] = ['num_episodes', 'year_released', 'genres', 'score', 'studio']

    return (
        <>
        {song && hintCategories.map((param, i) => {
            return (i < hintsRevealed) ? ( 
                <div>{param}: {song[param]}</div>
            ) : (
                <div>Hidden Hint</div>
            )
        })}
        </>
    )
}

export default Hints;