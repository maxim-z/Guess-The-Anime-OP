import type { MovingTextProps } from "@types";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
/* 
    Moving text that spawns on the outer edges of a box of (width x height) px.
    It moves across the width or height in four possible directions with a max travel speed of 60-150px/sec.
*/
function MovingText({ text, moveDirection, width, height } : MovingTextProps) {
    const controls = useAnimation();
    // const [animationDuration, setAnimationDuration] = useState(10.0 + Math.random() * 10.0);
    // text you want to be moving
    const [customText, setCustomText] = useState('');
    // initial position of text
    // const [textPos, setTextPos] = useState<{xPos: number, yPos: number}>({xPos: 100, yPos: 100});
    // direction in which text will be moving, left->right, right->left, top->bottom, bottom->top
    const [direction, setDirection] = useState(1); // 1, 2, 3, 4 everything else will default to 4
    const isX = (moveDirection == 1 || moveDirection == 2) ? true : false;
    // const [textRef, {} ] = useElementSize<HTMLDivElement>();
    const textRef = useRef<HTMLDivElement>(null);

    const handleAnimationEnd = () => {
        if (!textRef.current) return;
        // set text to original position
        // play animation
        const textPos = {xPos: Math.random() * width, yPos: Math.random() * height};
        // const direction = Math.floor(Math.random() * 4.0) + 1;
        const pixelSec = Math.random() * 90.0 + 60.0;
        const animStringWidth = textRef.current?.offsetWidth;
        const animStringHeight = textRef.current?.offsetHeight;
        if (direction == 1) { // left->right
            const animationDuration = width / pixelSec + Math.random() * 5.0; // 15px-30px/s + random time
            controls.set({x: -animStringWidth, y: textPos.yPos});
            controls.start({
                x: [-animStringWidth, width],
                y: textPos.yPos, // keep constant
                transition: { x: {  duration: animationDuration, ease: 'linear' } }
            })
        } else if (direction == 2) { // right->left
            const animationDuration = width / pixelSec + Math.random() * 5.0; // 15px-30px/s + random time
            controls.set({x: width, y: textPos.yPos});
            controls.start({
                x: [width, -animStringWidth],
                y: textPos.yPos,
                transition: { x: {  duration: animationDuration, ease: 'linear' } }
            })
        } else if (direction == 3) { // top->bottom
            const animationDuration = height / pixelSec + Math.random() * 5.0; // 15px-30px/s + random time
            controls.set({x: textPos.xPos, y: -animStringHeight});
            controls.start({
                x: textPos.xPos, // keep constant
                y: [-animStringHeight, height],
                transition: { y: { duration: animationDuration, ease: 'linear'} }
            })
        } else { // direction == 4, bottom->top
            const animationDuration = height / pixelSec + Math.random() * 5.0; // 15px-30px/s + random time
            controls.set({x: textPos.xPos, y: height});
            controls.start({
                x: textPos.xPos,
                y: [height, -animStringHeight],
                transition: { y: { duration: animationDuration, ease: 'linear'} }
            })
        }
    }; 

    // set up the state
    useEffect(() => {
        if (!textRef.current) return;
        const formattedText = (isX) ? text : text.split("").join("\n");

        setCustomText(formattedText);
        // guarantee time it takes for text to travel across the width/height + text.width/height
        // minus a random time to make it faster
        // const travelDist = (moveDirection == 1 || moveDirection == 2) ? width + textRef.current.
        // setAnimationDuration(Math.random() * 10.0 + 10.0); 
        setDirection(moveDirection);
        // setTextPos({xPos: Math.random() * width, yPos: Math.random() * height});
        // requestAnimationFrame(() => handleAnimationEnd());
    }, [text]);
    
    // useEffect(() => {

    // }, [elWidth, elHeight]);

    // start the animation once the positions are updated
    useEffect(() => {
        if (!textRef.current) return;
        requestAnimationFrame(() => handleAnimationEnd());
    }, [customText]);

    return (
        <motion.div
            className={`absolute pointer-events-none`}
            style={{
                fontSize: `${Math.random() * 15 + 15}px`,
                maxWidth: `${isX ? 'none' : '30px'}`, // text width x 30px
                maxHeight: `${isX ? '30px' : 'none'}` // 30px x text height
            }}
            animate={controls}
            onAnimationComplete={handleAnimationEnd}
        >
            <div 
                ref={textRef}
                className="whitespace-pre text-center">
                    {customText}
            </div>
        </motion.div>
    )
}

export default MovingText;