import React, { useEffect, useRef, useState } from 'react';
import './MediaPlayer.css'
import type { MediaPlayerProps } from '@types';
import YouTube from 'react-youtube';
import { useIsMobile } from '@components/CustomUseHooks/UseIsMobile';

declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void;
        YT: any;
    }
}

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
                <div className="Media">
                    <div className='PlayButtonContainer'>
                        <button 
                            className={`PlayPauseButton ${isPlaying ? 'Pause' : 'Play'}`}
                            onClick={handleClick}
                            disabled={!playButton}
                        >
                        </button>
                    </div>
                    <div className='SlidersContainer'>
                        <div className="PlayTimeBar">
                            <span className='TimeShow'>{Math.min(currentTime, interval[hintsRevealed])}</span>
                            <input 
                                className="Progress"
                                type="range" 
                                min="0" 
                                max={interval[hintsRevealed]} 
                                value={Math.min(currentTime, interval[hintsRevealed])} 
                                onChange={(e) => changePlayTime(e)}
                            />
                            <span className='TimeShow'>{interval[hintsRevealed]}</span>
                        </div>
                        <div className="VolumeSlider">
                            <input 
                                className="Slider"
                                type="range" 
                                min="0" 
                                max="100" 
                                value={volume} 
                                onChange={(e) => changeVolume(e)}
                            />
                        </div>
                    </div>
                </div>  
            )}
        </div>
    )
}

export default MediaPlayer;