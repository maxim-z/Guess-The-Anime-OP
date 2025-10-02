import type { ElectronicDisplayProps } from "@types";
import { motion, useAnimation } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import seedrandom from "seedrandom";

type coveredQuestionMarks = {
    letter:string; 
    pos:number;
}

function ElectronicDisplay({hintsRevealed, songTitle, songArtist} : ElectronicDisplayProps) {
    const controls = useAnimation();
    const [firstAnimation, setFirstAnimation] = useState(false);
    // string contains songTitle by songArtist
    const [totalSongString, setTotalSongString] = useState('');
    // const [firstAnimationDuration, setFirstAnimaitonDuration] = useState(7);
    const [secondAnimationDuration, setSecondAnimaitonDuration] = useState(5);
    const songStringRef = useRef<HTMLSpanElement>(null);
    // get the number of hints to uncover more and more of the question marks each time a guess is made
    const [uncoverQuestionMarks, setUncoverQuestionMarks] = useState<coveredQuestionMarks[]>([]);
    // helpful for keeping animations looking similar when I get varying length of strings
    // 7s/12letters = ~0.583s/letter for first animation
    // side note 5s/12letters = ~0.417s/letter for second animation

    const handleAnimationEnd = useCallback(() => {
        if (!songStringRef.current) return;
        const secondAnimStringWidth = songStringRef.current?.offsetWidth + 35;
        setFirstAnimation((prev) => {
            if (prev) { // if true switch to the second animation
                controls.set({x: 0});
                controls.start({
                    x: [0, -secondAnimStringWidth],
                    transition: {
                        x: {
                            duration: secondAnimationDuration,
                            ease: 'linear'
                        }
                    }
                })
                return false;
            } else { // if false switch to the first animation
                controls.set({x: 150});
                controls.start({
                    x: [150, 0, 0],
                    transition: {
                        x: {
                            duration: 5,
                            times: [0, 0.7, 1],
                            ease: 'easeOut'
                        }
                    }
                })
                return true;
            }
        });
    }, [firstAnimation, secondAnimationDuration]); 

    useEffect(() => {
        // reveal song letters in a predetermined order based on the number of hints revealed
        // by the time all 5 hints are revealed the entire song title and artist is to be revealed as well
        let lettersToReveal = Math.floor(((totalSongString.length - 4) / 5.0) * hintsRevealed);
        lettersToReveal = lettersToReveal <= uncoverQuestionMarks.length ? lettersToReveal : uncoverQuestionMarks.length; 
        // we want to reveal the entire string
        if (hintsRevealed === 5) lettersToReveal = uncoverQuestionMarks.length;
        // make copies of songTitle by songArtist and the ??? by ??? to work on
        const tempStr = totalSongString.split('');
        for (let i = 0; i < lettersToReveal; i++) {
            // update a random ? to be a letter from the totalSongString
            const q = uncoverQuestionMarks[i];
            tempStr[q.pos] = q.letter;
        };
        setTotalSongString(tempStr.join(''));
    }, [hintsRevealed, uncoverQuestionMarks, songTitle, songArtist]);

    // start the first animation upon loading it's a smoother introduction
    // build reveal order of question marks
    useEffect(() => {
        const songString = '?'.repeat(songTitle.length) + ' by ' + '?'.repeat(songArtist.length);
        const secondAnimDuration = 0.3 * songString.length;
        // get the songTitle/Artist letters and positions and shuffle them for the random reveal order of the question marks
        const arr : coveredQuestionMarks[] = [];
        for (let i = 0; i < songTitle.length; i++) {
            arr.push({letter: songTitle[i], pos: i});
        };
        for (let i = 0; i < songArtist.length; i++) {
            arr.push({letter: songArtist[i], pos: i+songTitle.length+4}); // evrything before ... ' by ' and is 4 
        };
        const rng = seedrandom(`${songTitle}`);
        const shuffled = arr.map((val) => ({ val, sort: rng() })) // pair with a random number
                            .sort((a, b) => a.sort - b.sort) // sort by the random number which shuffles it
                            .map(({val}) => val); // unpair from the random number
        setUncoverQuestionMarks(shuffled);
        setTotalSongString(songString);
        setSecondAnimaitonDuration(secondAnimDuration);
        setFirstAnimation(false);
        handleAnimationEnd();
    }, [songTitle, songArtist]);

    return (
        <motion.div 
            className='ElectronicDisplay absolute w-[135px] h-[25px] top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-1
                        bg-black border-2 border-teal-100/70 text-violet-300 font-[Orbitron] tracking-[2px] drop-shadow-[0_0_8px_rgba(80,44,158,0.8)]
                        overflow-hidden'
        >                       
            <motion.div
                animate={controls}
                transition={{
                    duration: 5,
                    // times: [0, 0.3, 0.35, 0.35, 0.7, 1],
                    // repeat: Infinity,
                    ease: 'linear'
                }}
                onAnimationComplete={() => handleAnimationEnd()}
            >
                <span 
                    ref={songStringRef}
                    className="whitespace-pre">
                        {totalSongString}
                </span>
            </motion.div>
        </motion.div>
    )
}

export default ElectronicDisplay;