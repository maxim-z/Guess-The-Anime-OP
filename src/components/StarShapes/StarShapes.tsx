import { useEffect, useState } from 'react';
import './StarShapes.css'
import { useIsMobile } from '@components/CustomUseHooks/useIsMobile';

function StarShapes() {
  const [numStars, setStars] = useState(30);
  const isMobile = useIsMobile();

  useEffect(() => {
    // re render
  }, [numStars]);

  useEffect(() => {
    setStars(isMobile ? 15 : 30); // render less stars for smaller screens
  }, [isMobile]);

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
            <div key={`star_${id}`} className="star" 
                style={{ width: `max(${rWidth}vw, 3px)`, /*height: `${rWidth}vw`, */
                animation: `star-spin ${animationTime}s linear infinite ${animationDirection ? 'reverse' : 'normal'}`,
                top: `${rTop}%`, left: `${rLeft}%` }}>
                <span className='stick one'></span>
                <span className='stick two'></span>
            </div>
            )
        })}
      </div>
  );
}

export default StarShapes;