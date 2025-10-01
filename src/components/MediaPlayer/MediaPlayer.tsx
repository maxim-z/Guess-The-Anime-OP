import React, { useEffect, useRef, useState } from 'react';
import './MediaPlayer.css'
import type { MediaPlayerProps } from '@types';
import YouTube from 'react-youtube';
import { useIsMobile } from '@components/CustomUseHooks/UseIsMobile';
import { easeOut, motion, useAnimation } from 'framer-motion';
import SpinningRecord from '@components/Customs/SpinningRecord';
import ElectronicDisplay from '@components/Customs/ElectronicDisplay';

declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void;
        YT: any;
    }
}

// for the record player
const angles = [0, 60, 120, 160, 200, 240, 280, 320]; // [0, 60, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300];
const angles2 = [0, 40, 80, 140, 200, 240, 280, 320];

// how many seconds of audio the player should be allowed to play
// this is based on how many hints are available to the player
const interval = [1, 2, 5, 10, 15, 30]; // interval[hintsRevealed] = max playtime of clip in seconds

function MediaPlayer({ hintsRevealed, videoId, showVideo, songTitle, songArtist } : MediaPlayerProps) {
    const [currentTime, setCurrentTime] = useState(0); // PlayerRef.current.getCurrentTime() elapsed seconds since video started playing
    const [isPlaying, setIsPlaying] = useState(false); // is video playing?
    const playerRef = useRef<any>(null); // a ref to the iframe player
    const [volume, setVolume] = useState(50); // 0 to 100
    const [playButton, setPlayButton] = useState(false);
    const isMobile = useIsMobile();
    const controlsVolume = useAnimation();
    
    const handleReady = (e: any) => {
        playerRef.current = e.target;
        // reset everything
        playerRef.current.setVolume(volume);
        setPlayButton(true); // wait for video to load before being able to play the song
        setIsPlaying(false);
        setCurrentTime(0);
    };

    const handleClick = () => {
        if (playerRef.current) {
            // if it's paused or ready to be played then play
            if (playerRef.current.getPlayerState() === window.YT.PlayerState.CUED 
                || playerRef.current.getPlayerState() === window.YT.PlayerState.PAUSED) {
                console.log("clicked");
                playerRef.current.playVideo();
                setIsPlaying(true);
            
            // if it's playing then pause it
            } else if (playerRef.current.getPlayerState() === window.YT.PlayerState.PLAYING) {
                playerRef.current.pauseVideo();
                setIsPlaying(false);
            }
        }
    };

    const resetVideoToStart = () => {
        if (playerRef.current) {
            playerRef.current.seekTo(0);
            playerRef.current.pauseVideo();
            playerRef.current.playVideo();
            playerRef.current.pauseVideo();
            setIsPlaying(false);
            setCurrentTime(0);
        }
    }

    // reset video to 0 when hintsRevealed is updated
    useEffect(() => {
        resetVideoToStart();
    }, [hintsRevealed]);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        // Update how many seconds video has been playing for
        if (isPlaying && playerRef.current) {
            // check every half a second
            intervalId = setInterval(() => {
                const time = playerRef.current.getCurrentTime();
                if (typeof time === "number") {
                    setCurrentTime(time);
                    // check if reached end of the playable section
                    if (time > interval[hintsRevealed]) { // 1, 2, 5, ... seconds
                        resetVideoToStart();
                    }
                }
            }, 300);
        }
        // clean up interval so that setInterval has the freshest values
        return () => clearInterval(intervalId);
    }, [isPlaying, hintsRevealed]);

    const changePlayTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        const playAt = (Number.parseInt(e.target.value));
        setCurrentTime(playAt);
        setIsPlaying(true);
        playerRef.current.seekTo(playAt);
        playerRef.current.playVideo();
    };

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        const vol = Number.parseInt(e.target.value);
        setVolume(vol);
        if (playerRef) {
            playerRef.current.setVolume(vol);
            // mute if it's low volume and unmute otherwise
            if (vol < 1) {
                playerRef.current.mute();
            } else {
                playerRef.current.unMute();
            }
        }
    };

    // text shadow
    const generateShadow = ((size: number) => {
        return { textShadow: `0 0 ${size}px black` };
    })

    // variants for volume slider
    const parentVariants = { // parent doesn't need to animate anything its used for events for its children
        hidden: {}, show: {}, plusVol: {}, minusVol: {}
    };
    const transition = { duration: 0.5 }
    const minusVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, y: 45, scale: 1, transition},
        plusVol: { opacity: 1, y: 45, scale: 1, transition },
        minusVol: { opacity: 1, y: 45, scale: 1.5, transition: { duration: 0.25 }}
    };
    const plusVariants = {
        hidden: { opacity: 0, scale: 1 },
        show: { opacity: 1, y: -45, scale: 1, transition},
        plusVol: { opacity: 1, y: -45, scale: 1.5, transition: { duration: 0.25 }},
        minusVol: { opacity: 1, y: -45, scale: 1, transition }
    };
    const sliderVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition},
        plusVol: { opacity: 1, transition},
        minusVol: { opacity: 1, transition}
    };
    // when clicking on the first and third buttons on the top right trigger a flash showing of vol going up/down
    const minusVol = async () => {
        setVolume((prev) => {
            if (prev - 1 > 100) return prev;
            return prev-1;
        });
        await controlsVolume.start('minusVol');
        await controlsVolume.start('hidden');
    };
    const plusVol = async () => {
        setVolume((prev) => {
            if (prev + 1 < 0) return prev;
            return prev+1;
        });
        await controlsVolume.start('plusVol');
        await controlsVolume.start('hidden');
    };

    return ( 
        <div className="MediaContainer">
            <div className={`${showVideo ? 'w-[360px] h-[240px] md:w-[640px] md:h-[360px]' : 'w-[0%] h-[0%]'}`}>
                <YouTube
                    videoId={videoId}
                    onReady={handleReady}
                    opts={{
                        width: `${isMobile ? (showVideo ? 360 : 0) : (showVideo ? 640 : 0)}`,
                        height: `${isMobile ? (showVideo ? 240 : 0) : (showVideo ? 360 : 0)}`,
                        playerVars: {
                            autoplay: 0,
                            controls: 1,
                            modestbranding: 1,
                            rel: 0,
                            enablejsapi: 1,
                        },
                    }}
                />
            </div>
            {!showVideo && (
            <div className='PlayerContainer relative w-[350px] h-[200px] origin-top-left md:scale-135'>

                <div className="Media absolute w-[300px] h-[150px] bottom-0 left-[25px] 
                                bg-[var(--primary-color-gradient-two)] rounded-xl
                                before:content-[''] before:absolute before:inset-0
                                before:bg-gradient-to-b before:from-zinc-100/20 before:to-zinc-900/45 
                                before:rounded-xl">
                                    
                    {/* <div className='SlateReflection absolute w-[300px] h-[150px] bottom-0 bg-gradient-to-b from-zinc-100/20 to-zinc-900/20 rounded-xl'/> */}

                    <ElectronicDisplay 
                        hintsRevealed={hintsRevealed}
                        songTitle={songTitle}
                        songArtist={songArtist} />

                    <div className='relative bg-green-500 rounded-tr-xl rounded-tl-xl'>
                        <div className='relative -top-4 -left-16 scale-50'>
                            <SpinningRecord angles={angles} />
                        </div>
                    </div>
                    <div className='absolute -top-4 left-53 scale-50'>
                        <SpinningRecord angles={angles2} />
                    </div>

                    <div className='TopRightButtons overflow-hidden flex flex-row items-end absolute w-[105px] h-[25px] top-[-25px] right-[15px]'>
                        <div className="ButtonLeft relative w-[35px] h-[15px] rounded-tl-xl rounded-tr-xl bg-green-500
                                        active:translate-y-[2px] active:shadow-inner
                                        before:content-[''] before:absolute before:inset-0
                                        before:bg-gradient-to-b before:from-zinc-100/20 before:to-zinc-900/30 
                                        before:rounded-xl"
                            onClick={minusVol} />
                        <div className="ButtonLeft relative w-[35px] h-[25px] rounded-tl-xl rounded-tr-xl bg-yellow-500
                                        active:translate-y-[2px] active:shadow-inner
                                        before:content-[''] before:absolute before:inset-0
                                        before:bg-gradient-to-b before:from-zinc-100/20 before:to-zinc-900/30 
                                        before:rounded-xl"
                            onClick={handleClick} />
                        <div className="ButtonLeft relative w-[35px] h-[20px] rounded-tl-xl rounded-tr-xl bg-cyan-500
                                        active:translate-y-[2px] active:shadow-inner
                                        before:content-[''] before:absolute before:inset-0
                                        before:bg-gradient-to-b before:from-zinc-100/20 before:to-zinc-900/30
                                        before:rounded-xl"
                            onClick={plusVol} />
                    </div>

                    <div className="VolumeSlider absolute w-[20px] h-[35px] top-[15px] right-[-20px] rounded-r-lg bg-blue-500">
                        {[...Array(18)].map((_, i) => { // i==0,17 -> 16px width, i==1,16 -> 17px width, i==[2,...15] -> 18px width
                            const shorter = (i <= 1 || i >= 16) ? ((i == 1 || i == 16) ? 17 : 16) : 18; // first few and last sticks should be shorter otherwise they stick out of the volume knob
                            return (
                                <div 
                                    className='absolute h-[1px] bg-slate-900'
                                    style={{ 
                                        width: `${shorter}px`, // its sideways so we have to change width not height to make them shorter
                                        top: `${i*2}px` 
                                    }}
                                />
                            )
                        })}
                        <motion.div
                            variants={parentVariants}
                            initial='hidden'
                            animate={controlsVolume}
                            whileHover='show'
                            whileTap='show'
                        >
                            <motion.p 
                                variants={plusVariants}
                                className='absolute -top-1.5 left-0.5 text-2xl'
                                style={generateShadow(10)}
                            >
                                +
                            </motion.p>
                            <motion.p 
                                variants={minusVariants}
                                className='absolute top-2 left-1 text-3xl'
                                style={generateShadow(10)}
                            >
                                -
                            </motion.p>
                            <motion.div 
                                variants={sliderVariants}
                                className='TimeShow absolute w-[25px] h-[25px] top-2 left-6 text-md'
                            >
                                {volume}
                            </motion.div>
                            <motion.input 
                                variants={sliderVariants}
                                className="Slider absolute w-[75px] -rotate-90 origin-top-left top-14"
                                type="range" 
                                min="0" 
                                max="100" 
                                value={volume} 
                                onChange={(e) => changeVolume(e)}
                            />
                        </motion.div>
                    </div>

                    <div className='SlidersContainer relative w-full h-[30px] top-[-33px] z-1'>
                        <div className="PlayTimeBar relative flex w-full h-full">
                            <div className='TimeShow relative w-[25px] h-[25px] left-1 text-lg'>{Math.min(Math.floor(currentTime), interval[hintsRevealed])}</div>
                            <input 
                                className="Progress w-[80%]"
                                type="range" 
                                min="0" 
                                max={interval[hintsRevealed]} 
                                value={Math.min(currentTime, interval[hintsRevealed])} 
                                onChange={(e) => changePlayTime(e)}
                            />
                            <span className='TimeShow relative w-[25px] h-[25px] left-1 text-lg'>{interval[hintsRevealed]}</span>
                        </div>
                    </div>

                    <div className='PlayButtonContainer absolute w-[250px] h-[80px] bottom-0 left-[25px]'>
                        <button 
                            className='ReverseButton flex flex-row absolute w-[60px] h-[40px] top-[10px] left-[10px]
                                        text-[var(--primary-color)] hover:text-red-500 transition-colors duration-200'
                        >
                            <span className='relative text-[40px] top-[5px]' style={generateShadow(10)}>&lt;</span>
                            <span className='relative text-[45px] left-[-5px]' style={generateShadow(10)}>&lt;</span>
                            <span className='relative text-[40px] top-[5px] left-[-10px]' style={generateShadow(10)}>&lt;</span>
                        </button>
                        <button 
                            className={`PlayPauseButton ${isPlaying ? 'Pause' : 'Play'} 
                                        relative w-[30px] h-[30px] top-[15px] left-[105px]
                                        xs:scale-70 md:scale-60 xl:scale-55`}
                            onClick={handleClick}
                            disabled={!playButton}
                        />
                        <button 
                            className='ForwardButton flex flex-row absolute w-[60px] h-full top-[10px] right-[10px]
                                        text-[var(--primary-color)] active:text-red-500 hover:text-red-500 transition-colors duration-200'
                        >
                            <span className='relative text-[40px] top-[5px]' style={generateShadow(10)}>&gt;</span>
                            <span className='relative text-[45px] left-[-5px]' style={generateShadow(10)}>&gt;</span>
                            <span className='relative text-[40px] top-[5px] left-[-10px]' style={generateShadow(10)}>&gt;</span>
                        </button>
                    </div>

                </div>  
            </div>
            )}
        </div>
    )
}

export default MediaPlayer;