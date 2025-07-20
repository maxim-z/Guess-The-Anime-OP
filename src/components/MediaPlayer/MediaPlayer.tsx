import React, { useEffect, useRef, useState } from 'react';
import './MediaPlayer.css'
import type { MediaPlayerProps } from '@types/props';
import YouTube from 'react-youtube';

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
    const [playButton, setPlayButton] = useState(true);
    
    const handleReady = (e: any) => {
        playerRef.current = e.target;
        // reset everything
        playerRef.current.setVolume(volume);
        setPlayButton(false); // wait for video to load before being able to play the song
        setIsPlaying(false);
        setCurrentTime(0);
    };

    const handleClick = () => {
        if (playerRef.current) {
            // if it's paused then play
            if (playerRef.current.getPlayerState() === window.YT.PlayerState.PAUSED) {
                playerRef.current.playVideo();
                setIsPlaying(true);
            
            // if it's playing then pause it
            } else if (playerRef.current.getPlayerState() === window.YT.PlayerState.PLAYING) {
                playerRef.current.pauseVideo();
                setIsPlaying(false);
            
            // when video just loads unmute and play it
            } else if (playerRef.current.getPlayerState() === window.YT.PlayerState.CUED) {
                playerRef.current.unMute();
                playerRef.current.playVideo();
                setIsPlaying(true);
            }
        }
    };

    const resetVideoToStart = () => {
        if (playerRef.current) {
            playerRef.current.pauseVideo();
            playerRef.current.seekTo(0);
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
            <YouTube
                videoId={videoId}
                onReady={handleReady}
                opts={{
                    height: `${showVideo ? "360" : "0"}`,
                    width: `${showVideo ? "640" : "0"}`,
                    playerVars: {
                        autoplay: 0,
                        controls: 1,
                        modestbranding: 1,
                        rel: 0,
                        enablejsapi: 1,
                    },
                }}
            />
            {!showVideo && (
                <div className="Media">
                    <button 
                        className="PlayButton"
                        onClick={handleClick}
                        // onMouseDown={(e) => e.preventDefault()}
                        disabled={playButton}
                    >
                        PlayButton
                    </button>
                    <div className="PlayTimeBar">
                        <span>{Math.min(currentTime, interval[hintsRevealed])}</span>
                        <input 
                            className="Progress"
                            type="range" 
                            min="0" 
                            max={interval[hintsRevealed]} 
                            value={Math.min(currentTime, interval[hintsRevealed])} 
                            readOnly={true}
                        />
                        <span>{interval[hintsRevealed]}</span>
                    </div>
                    <div className="VolumeSlider">
                        <input 
                            type="range" 
                            min="0" 
                            max="100" 
                            value={volume} 
                            className="Slider"
                            onChange={(e) => changeVolume(e)}
                        />
                    </div>
                </div>  
            )}
        </div>
    )
}

export default MediaPlayer;