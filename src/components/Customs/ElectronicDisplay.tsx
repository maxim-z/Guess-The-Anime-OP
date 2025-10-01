import type { ElectronicDisplayProps } from "@types";
import { motion, useAnimation } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

function ElectronicDisplay({hintsRevealed, songTitle, songArtist} : ElectronicDisplayProps) {
    const controls = useAnimation();
    const [firstAnimation, setFirstAnimation] = useState(false);
    // string contains songTitle by songArtist
    const [totalSongString, setTotalSongString] = useState('');
    // const [firstAnimationDuration, setFirstAnimaitonDuration] = useState(7);
    const [secondAnimationDuration, setSecondAnimaitonDuration] = useState(5);
    const songStringRef = useRef<HTMLSpanElement>(null);
    // get the number of hints to uncover more and more of the question marks each time a guess is made
    const [uncoverQuestionMarks, setUncoverQuestionMarks] = useState<{letter:string, pos:number}[]>([]);
    // helpful for keeping animations looking similar when I get varying length of strings
    // 7s/12letters = ~0.583s/letter for first animation
    // side note 5s/12letters = ~0.417s/letter for second animation

    const handleAnimationEnd = useCallback(() => {
        if (!songStringRef.current) return;
        const secondAnimStringWidth = songStringRef.current?.offsetWidth + 35;
        setFirstAnimation((prev) => {
            if (prev) { // if true switch to the second animation
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

    // useEffect(() => {
    //     const lettersToReveal = Math.ceil(totalSongString.length / hintsRevealed) * hintsRevealed;
    //     const tempStr = totalSongString;
    //     [...Array(lettersToReveal)].map((_,i) => {
    //         const r = uncoverQuestionMarks[Math.random(420)];
    //         tempStr.charAt(r.pos) = r.letter;
    //     });
    //     setTotalSongString(tempStr);
    // }, [hintsRevealed]);

    // start the first animation upon loading it's a smoother introduction
    useEffect(() => {
        const songString = '?'.repeat(songTitle.length) + ' by ' + '?'.repeat(songArtist.length);
        const secondAnimDuration = 0.3 * songString.length;
        // 
        const arr : {letter:string, pos:number}[] = [];
        [...Array(songTitle.length)].map((l, i) => {
            arr.push({letter: l, pos: i});
        });
        [...Array(songArtist.length)].map((l, i) => {
            arr.push({letter: l, pos: i});
        });
        setUncoverQuestionMarks(arr);
        // const firstAnimDuration = 0.583 * songString.length; 
        setTotalSongString(songString);
        // setFirstAnimaitonDuration(firstAnimDuration);
        setSecondAnimaitonDuration(secondAnimDuration);
        handleAnimationEnd();
    }, []);

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