import React, { useState, useRef, useEffect } from 'react'
import './GuessBar.css'
import type { GuessBarProps } from '@types';
import { endingAnimeGuessListEnglishTitle, baseOpeningList } from '@components/ContextProviders/GuessStatesContext';
import { useModeContext } from '@components/ContextProviders/ModeContext';

function GuessBar({onSubmit, guesses, won, disabled} : GuessBarProps) {
    const [search, setSearch] = useState('');
    const [selectedAnime, setSelectedAnime] = useState<string | null>(null);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const searchRef = useRef<HTMLInputElement>(null);
    // used to keep guesses in users view when searching
    const animeSearchListElementRef = useRef<HTMLUListElement>(null);
    
    const { mode } = useModeContext();
    const animeList = mode === 'Opening' ? baseOpeningList : endingAnimeGuessListEnglishTitle;

    const [filtered, setFiltered] = useState<string[]>([]);
    useEffect(() => {
        const searchList = search
            // return a list of anime that match the search query
            ? animeList.filter((anime) => {
                const animeLowerCase = anime.toLowerCase();
                const searchLowerCase = search.toLocaleLowerCase();
                // does any word in the anime start with search
                // checks if search starts with ex. The Apothecary Diaries, Apothecary Diaries, Diaries
                // so that if person keeps typing past The and to The A it will still show the result because
                // if we only checked The, Apothecary, and Diaries separately the result would disappear
                const splitAnime = animeLowerCase.split(' '); // ['The', 'Apothecary', 'Diaries']
                const matchesSearch = splitAnime.filter((_, i) => splitAnime.slice(i).join(' ').startsWith(searchLowerCase)).length > 0; // 'The Apothecary Diaries', 'Apothecary Diaries', 'Diaries'
                // is anime already one of the ones guessed
                const matchesGuessed = guesses.filter((guess) => guess.trim().toLowerCase() === anime.toLowerCase()).length > 0 ? true : false;
                // if it matches the selected anime filter it out
                const noMatchSelectedAnime = selectedAnime
                    ? animeLowerCase != selectedAnime.toLowerCase() // anime doesn't include selectedAnime
                    : true // selectedAnime is null so anime can't include selectedAnime
                // starts with the search query, has not already been guessed, and is not the currently selected anime
                return matchesSearch && !matchesGuessed && noMatchSelectedAnime;
            })
            : [] // search is '' so there is nothing to search
        setFiltered(searchList.splice(0, 5));
    }, [search])

    useEffect(() => {
        searchRef.current?.focus(); // auto-focus on search
    }, []);

    useEffect(() => {
        if (!animeSearchListElementRef.current) return;
        // scroll to the element we just highlighted
        animeSearchListElementRef.current.scrollIntoView();
    }, [filtered]);

    // Re-focus on searchRef
    const handleBlur = () => {
        setTimeout(() => searchRef.current?.focus(), 0); // let other events resolve
    };

    // for choosing out of list with mouse
    const handleSelect = (anime: string) => {
        setSelectedAnime(anime);
        setSearch(anime);
        setHighlightedIndex(-1);
    };

    const submitGuess = () => {
        if (selectedAnime) {
            // setGuessed((prev) => [...prev, selectedAnime.trim()]);
            onSubmit(selectedAnime.trim());
        } else {
            onSubmit('Skipped!');
        }
        // reset
        setSearch('');
        setHighlightedIndex(-1);
        setSelectedAnime(null);
        searchRef.current?.focus(); // auto-focus on search
    }

    // for navigating list with up/down arrows and choosing/submitting with enter
    const handleKeyboardInput = ((e: React.KeyboardEvent<HTMLInputElement>) => {
        // if (disabled) return;
        // cycle down the list
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setHighlightedIndex((prev) => 
                prev < filtered.length - 1 ? prev + 1 : 0
            )
        // cycle up the list
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setHighlightedIndex((prev) => 
                prev > 0 ? prev - 1 : filtered.length - 1
            )
        // selectAnime or submit the anime
        } else if (e.key === 'Enter') {
            // select the anime
            if (highlightedIndex >= 0 && highlightedIndex < filtered.length) {
                const anime = filtered[highlightedIndex];
                handleSelect(anime);
            // submit the anime
            } else if (selectedAnime && selectedAnime.trim() !== '') {
                submitGuess();
            } else if (filtered.length > 0 && searchRef.current) {
                // set value of input as the selected anime
                // let the user submit their typed in answer instead of needing to highlight it
                setSelectedAnime(searchRef.current.value);
                submitGuess();
            }
        }
    });

    return (
        <div className='GuessContainer relative flex flex-col justify-center'>
            {/* Put guessed entries here */}
            {guesses.length > 0 && (
                <ul className='GuessedList p-1 flex flex-col items-center'>
                    {guesses.map((guess, i) => (
                        <li
                            key={`guess_${guess}_${i}`}
                            className={`${(won && i == guesses.length-1) ? 'CorrectGuess' : 'IncorrectGuess'}
                                        text-center w-[50%]`}>
                           {guess} 
                        </li>
                    ))}
                </ul>
            )}
            {/* Want to add a submit button which will use the selectedAnime as input
                and if the user presses enter in the input it will submit it as well as a guess */}
            {!disabled && (
            <div className='SearchBarContainer flex flex-row gap-4 justify-center'>
                <input 
                    type='text'
                    ref={searchRef}
                    disabled={disabled}
                    id='SearchBar'
                    className='SearchBar'
                    placeholder='Guess...'
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setSelectedAnime(null);
                        setHighlightedIndex(-1);
                    }}
                    onKeyDown={handleKeyboardInput}
                    onBlur={handleBlur}
                />
                <button 
                    className='SubmitSearchButton bg-gray-500 text-white rounded p-1'
                    onClick={submitGuess}
                    // disabled={!selectedAnime}
                >
                    {`${selectedAnime ? 'Guess!' : 'Skip'}`}
                </button>
            </div>)}
            

            {filtered.length > 0 && (
                <ul id='AnimeSearchListID'
                    ref={animeSearchListElementRef}
                    className='AnimeSearchList absolute w-[100%] bg-black top-[100%] left-0'>
                    {filtered.map((anime, i) => (
                        <li
                            // ref={i == filtered.length - 1 ? animeSearchListElementRef : null}
                            key={`${anime}_${i}`}
                            className={`AnimeItem ${i == highlightedIndex ? 'Highlighted' : ''} w-[100%] text-wrap`}
                            onClick={ () => { 
                                setSearch(anime); 
                                setSelectedAnime(anime);
                            }}
                            onMouseDown={() => handleSelect(anime)}
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