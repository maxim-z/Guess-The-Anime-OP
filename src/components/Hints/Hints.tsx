import './Hints.css'
import type { SongFilterType } from '@types/song'
import type { HintProps } from '@types/props'

function Hints( {hintsRevealed, song, endGameState} : HintProps) {
    const hintCategories : SongFilterType[] = ['num_episodes', 'year_released', 'genres', 'score', 'studio']

    return (
        <div className='HintContainer'>            
            {song && hintCategories.map((param, i) => {
                return (i < hintsRevealed || endGameState) ? ( 
                    <div
                        className={`Hint ${i == hintsRevealed-1 ? 'NewHint' : ''}`}
                        style={i == hintsRevealed - 1 ? {animation: `flipHints 0.1s ease-in ${Math.floor(Math.random() * 5) + 3}`}
                                                      : {animation: 'none'}}
                    >
                        {param}: {song[param]}
                    </div>
                ) : (
                    <div
                        className='Hint Hidden'
                    >
                        ??????????
                    </div>
                )
            })}
        </div>
    )
}

export default Hints;