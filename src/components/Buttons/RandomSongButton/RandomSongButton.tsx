import './RandomSongButton.css'
import { useNavigate } from 'react-router-dom';
import { MAX_SONGS } from '@config/config';
import { useFilterContext } from '@components/ContextProviders/FilterContext';
// import { useCallback, useRef, useState } from 'react';

function RandomSongButton() {
  const navigate = useNavigate();

  // Filter Updates
  const filterContext = useFilterContext();
  
  // // get the current scale of the button from the animation
  // const getCurrentScale = (el : HTMLElement): number[] => {
  //   const style = getComputedStyle(el);
  //   const styleBefore = getComputedStyle(el, '::before');
  //   const styleAfter = getComputedStyle(el, '::after');
  //   const matrix = new DOMMatrixReadOnly(style.transform);
  //   const matrixBefore = new DOMMatrixReadOnly(styleBefore.transform);
  //   const matrixAfter = new DOMMatrixReadOnly(styleAfter.transform);
  //   // assumes uniform scaling
  //   return [matrix.a, matrixBefore.a, matrixAfter.a]; // returns scaling of element, element::before, element::after
  // }

  // // FOR USE IN SMOOTH TRANSITIONS BETWEEN LINEAR ANIMATIONS WITH A SINGLE GROWING/SHRINKING PHASE
  // // Animation for random song button
  // // Only works if scaling goes up then down ex. [1, 1.5, 1] can't handle complex ones like [1, 1.5, 1.2, 2.1, 1]
  // const randomSongButtonRef = useRef<HTMLButtonElement>(null);
  // const [animation, setAnimation] = useState<'enter' | 'leave' | 'infinite'>('infinite');
  // const currentScale = useRef(1.0);
  // const [direction, setDirection] = useState<'none' | 'growing' | 'shrinking'>('none');
  // const [hover, setHover] = useState(false);
  // // only have to include numbers that make the transition smooth from infinite animation -> hover and the reverse
  // const scalingNums = [1, 1.5] // the min and max scaling for each animation of the element, ::before, ::after for transitions
  // const durations = [3.25, 2.75] // for non-hovering and hovering
  // // the states will be added as a class for the button which will switch between the animations
  // const updateAnimation = useCallback(() => {
  //   if (!randomSongButtonRef.current) return;
  //   // randomSongButtonRef.current.style.animation = 'none';
  //   if (animation === 'enter' || animation === 'leave') {
  //     // force animation switches to render
  //     // randomSongButtonRef.current.classList.remove('pulseTransition', 'infinite', 'growing', 'shrinking', 'hover');
  //     // void randomSongButtonRef.current.offsetWidth; // force reflow
  //     // randomSongButtonRef.current.classList.add('pulseTransition');
  //     console.log(animation + ' ' + direction);

  //     document.documentElement.style.setProperty('--pulse-scale-transition', `${currentScale.current}`);
  //     let calc = 0;
  //     if (direction === 'growing') {
  //       // randomSongButtonRef.current.classList.add('growing');
  //       // since it's growing at least half of the animation is yet to be completed plus how much more to reach maxScaling
  //       if (animation === 'enter') { // use hover speed
  //         calc = (((scalingNums[1] - currentScale.current) / scalingNums[1]) * durations[1] + durations[1]) / 2.0; // ((maxScale - currScale) / maxScale) * hoverAnimationDuration + hoverAnimationDuration / 2.0
  //         // have to change maxScale
  //         document.documentElement.style.setProperty('--pulse-scale', '1.5');
  //         document.documentElement.style.setProperty('--pulse-duration', '2.75');
  //       } else { // use normal speed
  //         calc = (((scalingNums[1] - currentScale.current) / scalingNums[1]) * durations[0] + durations[0]) / 2.0; // ((maxScale - currScale) / maxScale) * hoverAnimationDuration + hoverAnimationDuration / 2.0
  //         document.documentElement.style.setProperty('--pulse-scale', '1.1');
  //         document.documentElement.style.setProperty('--pulse-duration', '3.25');
  //       }
  //     } else if (direction === 'shrinking') {
  //       // randomSongButtonRef.current.classList.add('shrinking');
  //       // since it's shrinking we need to calculate how much more to reach minScaling
  //       if (animation === 'enter') { // use hover speed
  //         calc = ((currentScale.current - scalingNums[0]) / scalingNums[0]) * durations[1] / 2.0; // ((currScale - minScale) / minScale) * hoverAnimationDuration
  //         document.documentElement.style.setProperty('--pulse-scale', '1.5');
  //         document.documentElement.style.setProperty('--pulse-duration', '2.75');
  //       } else { // use normal speed
  //         calc = ((currentScale.current - scalingNums[0]) / scalingNums[0]) * durations[0] / 2.0; // ((currScale - minScale) / minScale) * hoverAnimationDuration
  //         document.documentElement.style.setProperty('--pulse-scale', '1.1');
  //         document.documentElement.style.setProperty('--pulse-duration', '3.25');
  //       }
  //     }
  //     document.documentElement.style.setProperty('--pulse-transition-duration', `${calc}s`);
  //     console.log('transition time -> ' + calc);
  //   } else {
  //     if (hover) {
  //       document.documentElement.style.setProperty('--pulse-scale', '1.5');
  //       document.documentElement.style.setProperty('--pulse-duration', '2.75');
  //     } else {
  //       document.documentElement.style.setProperty('--pulse-scale', '1.1');
  //       document.documentElement.style.setProperty('--pulse-duration', '3.25');
  //     }
  //     // force animation switches to render for infinite animation
  //     // randomSongButtonRef.current.style.animation = 'none';
  //     // randomSongButtonRef.current.classList.remove('pulseTransition', 'infinite', 'growing', 'shrinking', 'hover');
  //     // randomSongButtonRef.current.classList.add('infinite');
  //     // void randomSongButtonRef.current.offsetWidth; // force reflow
  //     console.log('infinite')
  //   }
  //   void randomSongButtonRef.current.offsetWidth; // force reflow
  //   console.log('currentScale -> ' + currentScale.current);
  //   console.log(randomSongButtonRef.current.classList);
  // }, [animation, currentScale, direction]);
  // // update scaling and the direction in which transition should go
  // const updateTransition = ((currScaling : number) => {
  //   if (currScaling >= currentScale.current) {
  //     setDirection('growing');
  //   } else {
  //     setDirection('shrinking');
  //   }
  //   // console.log(`current scale -> ${currScaling} past scale -> ${currentScale.current}`)
  //   currentScale.current = currScaling;
  // });

  // // more accurate reading of scaling of element
  // const readLiveScale = (el: HTMLElement, f: (scale: number) => void) => {
  //   requestAnimationFrame(() => {
  //     const [scale] = getCurrentScale(el);
  //     f(scale);
  //   });
  // };

  // const randomSongButtonControls = useAnimation();
  // const beforeControls = useAnimation();
  // const afterControls = useAnimation();

  // useEffect(() => {
  //   randomSongButtonControls.start({
  //     scale: [1, 1.5, 1],
  //     rotate: [0, 180, 360],
  //     filter: 'blur(10px)',
  //     transition: {
  //       scale: {
  //         duration: 3.25,
  //         ease: 'easeInOut',
  //         repeat: Infinity
  //       },
  //       rotate: {
  //         duration: 9.75,
  //         ease: 'linear',
  //         repeat: Infinity
  //       }
  //     }
  //   });
  // }, [randomSongButtonControls]);

  // useEffect(() => {
  //   randomSongButtonControls.start('idle');
  // }, [randomSongButtonControls]);

  // Logic for the random song button
  const navRandomSong = () => {
    const randomNum = Math.floor(Math.random() * MAX_SONGS + 1);
    navigate(`/guess?id=${randomNum}&filter=${filterContext.filter}`)
  }

  return (
    <div className='ButtonContainer relative top-[5.5vw] left-[2.0vw] lg:top-[2.5vw] lg:left-0'>
        <button className='RandomSong' onClick={navRandomSong}>Random Song!</button>
        {/* <button 
          hidden={true}
          className={`RandomSong 
                      ${animation === 'infinite' ? 'pulse--infinite' : `pulse--${animation}-${direction}`}`
                    }
          ref={randomSongButtonRef} 
          key='randomsongbutton'
          onClick={navRandomSong}
          onMouseMove={() => {
            if (!randomSongButtonRef.current) return;
            readLiveScale(randomSongButtonRef.current, (scale) => {
              updateTransition(scale);
            });
          }}
          onMouseEnter={() => { 
            setHover(true);
            if (!randomSongButtonRef.current) return;
            readLiveScale(randomSongButtonRef.current, (scale) => {
              updateTransition(scale);
              setAnimation('enter');
              updateAnimation();
            });
            console.log(randomSongButtonRef.current.classList);
            // updateTransition(getCurrentScale(randomSongButtonRef.current)[0]);
            // void randomSongButtonRef.current.offsetWidth; // force reflow
          }}
          onMouseLeave={() => {
            setHover(false);
            if (!randomSongButtonRef.current) return;
            // readLiveScale(randomSongButtonRef.current, (scale) => {
            //   updateTransition(scale);
            // });
            setAnimation('leave');
            updateAnimation();
            // setDirection('none');
            // void randomSongButtonRef.current.offsetWidth; // force reflow
            console.log(randomSongButtonRef.current.classList);
          }}
          onAnimationEnd={() => {
            if (!randomSongButtonRef.current) return;
            readLiveScale(randomSongButtonRef.current, (scale) => {
              updateTransition(scale);
              setDirection('none');
              setAnimation('infinite');
              updateAnimation();
            });
            // randomSongButtonRef.current.classList.remove("pulse--infinite", "pulse--enter-growing", "pulse--enter-shrinking", "pulse--leave-growing", "pulse--leave-shrinking");
            // void randomSongButtonRef.current.offsetWidth; // force reflow
            console.log(randomSongButtonRef.current.classList);
          }}
        >
          Random Song!
        </button> */}
        {/* <button className="RandomSong" key='randomsongbutton2'>
          <span className="RandomSong-inner">Random Song</span>
        </button> */}
        {/* <motion.button
          className='relative flex items-center p-y 4 p-x 2 rounded-full border-0 font-bold z-10'
          style={{
            width: 'var(--random-song-size)',
            height: 'var(--random-song-size)',
            fontSize: 'max(2.0vw, 16px)',
            color: 'rgba(248,248,255,0.5)',
          }}
          variants={{
            idle: {
              scale: [1, 1.1, 1], // pulse
              transition: { duration: 3.25, repeat: Infinity }
            },
            hover: {
              scale: [1, 1.5, 1], // hover pulse
              color: 'rgba(248, 248, 255, 1.0)',
              transition: { duration: 2.75, repeat: Infinity }
            }
          }}
          animate={randomSongButtonControls}
          onHoverStart={() => randomSongButtonControls.start('hover')}
          onHoverEnd={() => randomSongButtonControls.start('idle')}
        >
          <span className='relative z-10'>
            Random Song!
          </span>

          <motion.div
            className='absolute w-[100%] h-[100%] rounded-full pointer-events-none'
            style={{
              boxShadow: '0px 0px 1vw rgba(255, 254, 198, 1.0)'
            }}
            initial={{ opacity: 0.3 }}
            whileHover={{
              opacity: [0.3, 1, 0.3],
              scale: [0.95, 1, 0.95],
              transition: { duration: 2.75, ease: 'easeInOut', repeat: Infinity },
            }}
          />

          <motion.div
            className="absolute rounded-full pointer-events-none blur-[10px]"
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(0deg, rgb(44, 187, 99), rgb(0, 89, 34))",
              backgroundSize: "500%",
              zIndex: -1,
            }}
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.5, 1],
              backgroundPosition: ["0% 0%", "500% 0%"],
            }}
            transition={{
              duration: 9.75,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{
              rotate: [0, 180, 360],
              scale: [1, 1.5, 1],
              filter: "blur(15px)",
              backgroundPosition: ["0% 0%", "500% 0%"],
              transition: { duration: 5.5, ease: "linear", repeat: Infinity },
            }}
          />
        </motion.button> */}
        {/* <button className='RandomSong2' onClick={navRandomSong}>
          Random Song!
          <div className='GradientContainer'>
            <span className='Gradient one'></span>
            <span className='Gradient two'></span>
          </div>
        </button> */}
    </div>
  );
}

export default RandomSongButton;