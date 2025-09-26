import React, { useEffect, useRef, useState } from 'react';
import './MediaPlayer.css'
import type { MediaPlayerProps } from '@types';
import YouTube from 'react-youtube';
import { useIsMobile } from '@components/CustomUseHooks/UseIsMobile';
import { easeOut, motion } from 'framer-motion';

declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void;
        YT: any;
    }
}

// for the record player
const angles = [0, 60, 120, 160, 200, 240, 280, 320]; // [0, 60, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300];

// how many seconds of audio the player should be allowed to play
// this is based on how many hints are available to the player
const interval = [1, 2, 5, 10, 15, 30]; // interval[hintsRevealed] = max playtime of clip in seconds

function MediaPlayer({ hintsRevealed, videoId, showVideo } : MediaPlayerProps) {
    const [currentTime, setCurrentTime] = useState(0); // PlayerRef.current.getCurrentTime() elapsed seconds since video started playing
    const [isPlaying, setIsPlaying] = useState(false); // is video playing?
    const playerRef = useRef<any>(null); // a ref to the iframe player
    const [volume, setVolume] = useState(50); // 0 to 100
    const [playButton, setPlayButton] = useState(false);
    const isMobile = useIsMobile();
    
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
                    setCurrentTime(Math.floor(time));
                    // check if reached end of the playable section
                    if (time > interval[hintsRevealed]) { // 1, 2, 5, ... seconds
                        resetVideoToStart();
                    }
                }
            }, 500);
        }
        // clean up interval so that setInterval has the freshest values
        return () => clearInterval(intervalId);
    }, [isPlaying, hintsRevealed]);

    const changePlayTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        const playAt = Math.floor(Number.parseInt(e.target.value));
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

    return ( 
        <div className="MediaContainer">
            <div className={`${showVideo ? 'FullSizeVideoContainer' : 'YouTubeContainer'}`}>
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
            <div className='PlayerContainer relative w-[350px] h-[200px]'>

                <div className="Media absolute w-[300px] h-[150px] bottom-0 left-[25px] 
                                bg-[var(--primary-color-gradient-two)] rounded-xl
                                before:content-[''] before:absolute before:inset-0
                                before:bg-gradient-to-b before:from-zinc-100/20 before:to-zinc-900/45 
                                before:rounded-xl">
                                    
                    {/* <div className='SlateReflection absolute w-[300px] h-[150px] bottom-0 bg-gradient-to-b from-zinc-100/20 to-zinc-900/20 rounded-xl'/> */}

                    <div className='ElectronicDisplay absolute w-[135px] h-[25px] top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/2
                                    bg-black border-2 border-teal-100/70 text-violet-300 font-[Orbitron] tracking-[2px] drop-shadow-[0_0_8px_rgba(80,44,158,0.8)]'>
                        Hey There
                    </div>

                    <div className='TopLeftSpinningRecordContainer relative w-[100px] h-[100px] top-[-35px] left-[-25px]'>
                        <div className='Record relative w-full h-full rounded-full'>
                            <div 
                                className='RecordGradient absolute inset-0 rounded-full
                                bg-linear-to-r/srgb from-teal-950 to-indigo-500
                                animate-[spin_3s_linear_infinite]'
                            />
                            <div className="RecordRings absolute inset-0 rounded-full 
                                            [background:repeating-radial-gradient(circle,#0f172a_0px,#0f172a_8px,transparent_9px,transparent_14px)]"/>
                        </div>
                        {angles.map((angle) => (
                            <div
                                key={angle} 
                                className={`RecordStickOverlay absolute w-[55px] h-[15px] top-[50%] left-[50%] -translate-y-1/2 bg-black origin-left rounded-r-xl z-2`}
                                style={{ transform: `rotate(${angle}deg)` }}
                            />
                        ))}
                        <div className='RecordBoundingCircle absolute top-[-5px] left-[-5px] w-[110%] h-[110%] border-[8px] border-black rounded-full z-3'>

                        </div>
                        {/* <motion.div
                            key='angle_highlight'
                            className={`RecordStickOverlay absolute w-[33px] h-[4px] top-[58%] left-[65%] -translate-y-1/2 bg-zinc-50/60 origin-left rotate-30 z-1`}
                            animate={{ rotate: 30 }}
                            transition={{ repeat: Infinity, duration: 3, ease: easeOut}}
                        /> */}
                    </div>

                    <div className='TopRightButtons overflow-hidden flex flex-row items-end absolute w-[105px] h-[25px] top-[-25px] right-[15px]'>
                        <div className="ButtonLeft relative w-[35px] h-[15px] rounded-tl-xl rounded-tr-xl bg-green-500
                                        active:translate-y-[2px] active:shadow-inner
                                        before:content-[''] before:absolute before:inset-0
                                        before:bg-gradient-to-b before:from-zinc-100/20 before:to-zinc-900/30 
                                        before:rounded-xl"/>
                        <div className="ButtonLeft relative w-[35px] h-[25px] rounded-tl-xl rounded-tr-xl bg-yellow-500
                                        active:translate-y-[2px] active:shadow-inner
                                        before:content-[''] before:absolute before:inset-0
                                        before:bg-gradient-to-b before:from-zinc-100/20 before:to-zinc-900/30 
                                        before:rounded-xl"/>
                        <div className="ButtonLeft relative w-[35px] h-[20px] rounded-tl-xl rounded-tr-xl bg-cyan-500
                                        active:translate-y-[2px] active:shadow-inner
                                        before:content-[''] before:absolute before:inset-0
                                        before:bg-gradient-to-b before:from-zinc-100/20 before:to-zinc-900/30
                                        before:rounded-xl"/>
                    </div>

                    <div className="VolumeSlider absolute w-[20px] h-[35px] top-[15px] right-[-20px] rounded-r-lg bg-blue-500">
                        {/* <input 
                        className="Slider"
                            type="range" 
                            min="0" 
                            max="100" 
                            value={volume} 
                            onChange={(e) => changeVolume(e)}
                            /> */}
                    </div>

                    <div className='SlidersContainer relative w-full h-[30px] top-[-33px] left-[20px] '>
                        <div className="PlayTimeBar">
                            <span className='TimeShow relative w-[25px] h-[25px] top-[-2px] left-[-10px] text-lg'>{Math.min(currentTime, interval[hintsRevealed])}</span>
                            <input 
                                className="Progress w-[80%]"
                                type="range" 
                                min="0" 
                                max={interval[hintsRevealed]} 
                                value={Math.min(currentTime, interval[hintsRevealed])} 
                                onChange={(e) => changePlayTime(e)}
                            />
                            <span className='TimeShow relative w-[25px] h-[25px] top-[-2px] right-[-5px] text-lg'>{interval[hintsRevealed]}</span>
                        </div>
                    </div>

                    <div className='PlayButtonContainer absolute w-[250px] h-[80px] bottom-0 left-[25px]'>
                        <button 
                            className='ReverseButton flex flex-row absolute w-[60px] h-[40px] top-[10px] left-[10px]
                                        text-[var(--primary-color)] hover:text-red-500 transition-colors duration-200'
                        >
                            <span className='relative text-[40px] top-[5px]'>&lt;</span>
                            <span className='relative text-[45px] left-[-5px]'>&lt;</span>
                            <span className='relative text-[40px] top-[5px] left-[-10px]'>&lt;</span>
                        </button>
                        <button 
                            className={`PlayPauseButton ${isPlaying ? 'Pause' : 'Play'} relative w-[30px] h-[30px] top-[15px] left-[105px] `}
                            onClick={handleClick}
                            disabled={!playButton}
                        >
                        </button>
                        <button 
                            className='ForwardButton flex flex-row absolute w-[60px] h-[40px] top-[10px] right-[10px]
                                        text-[var(--primary-color)] hover:text-red-500 transition-colors duration-200'
                        >
                            <span className='relative text-[40px] top-[5px]'>&gt;</span>
                            <span className='relative text-[45px] left-[-5px]'>&gt;</span>
                            <span className='relative text-[40px] top-[5px] left-[-10px]'>&gt;</span>
                        </button>
                    </div>

                </div>  
            </div>
            )}
        </div>
    )
}

export default MediaPlayer;