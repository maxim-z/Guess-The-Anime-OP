import type { MovingTextContainerProps } from "@types";
import MovingText from "./MovingText";
import { openingAnimeGuessListDefaultTitle } from '@components/ContextProviders/GuessStatesContext';
import { useMemo } from "react";

function MovingTextContainer({ width, height } : MovingTextContainerProps) {
    const movingTexts = useMemo(() => {
        return [...Array(50)].map((_, i) => ({
          id: `${i}_movingtext`,
          text: openingAnimeGuessListDefaultTitle[Math.floor(Math.random() * openingAnimeGuessListDefaultTitle.length)],
          direction: Math.floor(Math.random() * 4 + 1),
        }));
      }, []); 

    return (
        <div className='MovingTextContainer absolute w-[100%] h-[100%] overflow-hidden'>
          {movingTexts.map(({ id, text, direction }) => {
            return (
              <MovingText 
                key={id}
                text={text} 
                moveDirection={direction}
                width={width}
                height={height} />
            )
          })}
        </div>
    )
}

export default MovingTextContainer