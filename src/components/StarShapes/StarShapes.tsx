import { useEffect, useState, type JSX, type ReactHTMLElement } from 'react';
import './StarShapes.css'
import type { HeaderProps } from '@types/props';

type StarShapesProps = {
    children?: React.ReactNode;
  };

function StarShapes({ children }: StarShapesProps): JSX.Element {
  const [numStars, setStars] = useState(30);

  useEffect(() => {
    // re render
  }, [numStars]);

  useEffect(() => {
    // set the initial value and update number of stars based on it
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    if (mediaQuery.matches) {
      setStars(15);
    }
    // handle the change
    const handleResize = (e : MediaQueryListEvent) => {
      // only change it when screen size changes from mobile to computer
      setStars(e.matches ? 15 : 30)
    }
    // listen to changes
    mediaQuery.addEventListener('change', handleResize);
    // remove listener after unmount
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    }
  }, []);

  return (
    <div className='stars'>
        {/* <div className="star">
            <span className="circle top-left"></span>
            <span className="circle top-right"></span>
            <span className="circle bottom-left"></span>
            <span className="circle bottom-right"></span>
        </div> */}
        {[...Array(numStars)].map((_, i) => {
          const id = i+1;
          const rWidth = 0.2 + Math.random() * 0.2; // vw
          const animationTime = 3.5 + Math.random(); // s
          let animationDirection = Math.random() > 0.5 // t or f
          let rTop = -10 + Math.random() * 45 // %
          if (Math.random() > 0.5) {
            rTop = 75 + Math.random() * 35 // %
          }
          const rLeft = -10 + Math.random() * 110 // %
          return (
            <>
            <div key={`star_${id}`} className="star" 
                style={{ width: `max(${rWidth}vw, 3px)`, /*height: `${rWidth}vw`, */
                animation: `spin ${animationTime}s linear infinite`,
                animationDirection: animationDirection ? 'reverse' : 'normal',
                top: `${rTop}%`, left: `${rLeft}%` }}>
                <span className='stick one'></span>
                <span className='stick two'></span>
              </div>
              </>
            )
        })}
      </div>
  );
}

export default StarShapes;