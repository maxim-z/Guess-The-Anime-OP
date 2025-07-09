import { useState } from 'react'
import './GuessBar.css'

function GuessBar() {
    const [search, setSearch] = useState('');
    const [selectedAnime, setSelectedAnime] = useState<string | null>(null);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    
    const animeList = ['Apothecary Diaries', 'Apothecary Diaries Season 2', 'Attack on Titan', 'Frieren', 'Hunter x Hunter', 'Steins Gate'];
    const filtered = search
            // return a list of anime that match the search query
            ? animeList.filter((anime) => {
                const animeLowerCase = anime.toLowerCase();
                // does anime start with search
                const matchesSearch = animeLowerCase.startsWith(search.toLowerCase());
                // if it matches the selected anime filter it out
                const noMatchSelectedAnime = selectedAnime
                    ? animeLowerCase != selectedAnime.toLowerCase() // anime doesn't include selectedAnime
                    : true // selectedAnime is null so anime can't include selectedAnime
                return matchesSearch && noMatchSelectedAnime;
            })
            : []; // search is '' so there is nothing to search

            const handleKeyboardInput = ()

    return (
        <div className='GuessContainer'>
            {/* Want to add a submit button which will use the selectedAnime as input
                and if the user presses enter in the input it will submit it as well as a guess */}
            <input 
                type='text' 
                id='SearchBar' 
                className='SearchBar'
                placeholder='Guess...'
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setSelectedAnime(null);
                    setHighlightedIndex(-1);
                }}
            />
            
            {filtered.length > 0 && (
                <ul className='AnimeSearchList'>
                    {filtered.map((anime, i) => (
                        <li
                            key={anime}
                            className={`AnimeItem ${i == highlightedIndex ? 'Highlighted' : ''}`}
                            onClick={ () => { 
                                setSearch(anime); 
                                setSelectedAnime(anime);} 
                            }
                        >
                            {anime}
                        </li>
                    ))}
                </ul>
            )}

        </div>
    )
}

export default GuessBar;