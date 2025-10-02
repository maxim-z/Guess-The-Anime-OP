import './Hints.css'
import type { SongFilterType } from '@types'
import type { HintProps } from '@types'

function Hints( {hintsRevealed, song, endGameState} : HintProps) {
    const hintCategories : SongFilterType[] = ['num_episodes', 'year_released', 'genres', 'score', 'studios']
    const hintCategoriesBeautified = ['Number of Episodes', 'Year Released', 'Genres', 'Score', 'Studios']

    return (
        <div className='HintContainer w-[90%]'>            
            {song && hintCategories.map((param, i) => {
                return (i < hintsRevealed || endGameState) ? ( 
                    <div
                        key={`revealedhint_${i}`}
                        className={`Hint ${i == hintsRevealed-1 ? 'NewHint' : ''}`}
                        style={i == hintsRevealed - 1 ? {animation: `flipHints 0.1s ease-in ${Math.floor(Math.random() * 5) + 3}`}
                                                      : {animation: 'none'}}
                    >
                        {hintCategoriesBeautified[i]}: {song[param]}
                    </div>
                ) : (
                    <div
                        key={`hiddenhint_${i}`}
                        className='Hint Hidden'
                    >
                        Hint #{i+1}
                    </div>
                )
            })}
        </div>
    )
}

export default Hints;