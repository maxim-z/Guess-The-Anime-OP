import './Hints.css'
import type { SongFilterType } from '@types'
import type { HintProps } from '@types'

function Hints( {hintsRevealed, song, endGameState} : HintProps) {
    const hintCategories : SongFilterType[] = ['num_episodes', 'year_released', 'genres', 'score', 'studios']

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