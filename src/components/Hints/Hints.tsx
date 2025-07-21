import './Hints.css'
import type { SongFilterType } from '@types/song'
import type { HintProps } from '@types/props'

function Hints( {hintsRevealed, song, endGameState} : HintProps) {
    const hintCategories : SongFilterType[] = ['num_episodes', 'year_released', 'genres', 'score', 'studio']

    return (
        <div>            
            {song && hintCategories.map((param, i) => {
                return (i < hintsRevealed || endGameState) ? ( 
                    <div>{param}: {song[param]}</div>
                ) : (
                    <div>Hidden Hint</div>
                )
            })}
        </div>
    )
}

export default Hints;