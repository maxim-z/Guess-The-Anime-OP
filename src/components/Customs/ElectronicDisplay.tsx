import { motion, useAnimation } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

function ElectronicDisplay() {
    const controls = useAnimation();
    const [firstAnimation, setFirstAnimation] = useState(false);
    // get song title and artist

    // get the number of hints to uncover more and more of the question marks each time a guess is made

    const handleAnimationEnd = useCallback(() => {
        if (firstAnimation) {
            setFirstAnimation(false);
            controls.start({
                x: [150, 0, 0],
                transition: {
                    x: {
                        duration: 7,
                        times: [0, 0.7, 1],
                        ease: 'easeOut'
                    }
                }
            })
        } else {
            setFirstAnimation(true);
            controls.start({
                x: [0, -250],
                transition: {
                    x: {
                        duration: 5,
                        ease: 'linear'
                    }
                }
            })
        }
    }, [firstAnimation]); 
    // start the animations upon loading
    useEffect(() => {
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
                ????????????
            </motion.div>
        </motion.div>
    )
}

export default ElectronicDisplay;