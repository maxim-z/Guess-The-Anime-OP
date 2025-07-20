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
    const [isPlayerReady, setisPlayerReady] = useState(false);
    const [volume, setVolume] = useState(50); // 0 to 100
    
    const handleReady = (e: any) => {
        playerRef.current = e.target;
        playerRef.current.setVolume(volume);
        setisPlayerReady(true);
        console.log("player ready");
    };

    const handleClick = () => {
        console.log("clicked "+hintsRevealed + "num secs "+interval[hintsRevealed]);
        if (isPlayerReady && playerRef.current) {
            console.log("Player:", playerRef.current);
            console.log("State:", playerRef.current?.getPlayerState?.());
            // if it's paused then play
            if (playerRef.current.getPlayerState() === window.YT.PlayerState.PAUSED) { // if it's paused then play
                playerRef.current.playVideo();
                setIsPlaying(true);
            } else if (playerRef.current.getPlayerState() === window.YT.PlayerState.PLAYING) { // if it's playing then pause it
                playerRef.current.pauseVideo();
                setIsPlaying(false);
            } else if (playerRef.current.getPlayerState() === window.YT.PlayerState.CUED) { // when video just loads unmute and play it
                playerRef.current.unMute();
                playerRef.current.playVideo();
                setIsPlaying(true);
            }
        }
    };

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (isPlaying && playerRef.current) {
            intervalId = setInterval(() => {
                const time = playerRef.current.getCurrentTime();
                if (typeof time === "number") {
                    setCurrentTime(Math.floor(time));
                    console.log("useEffect "+hintsRevealed + "num secs "+interval[hintsRevealed]);
                    if (time > interval[hintsRevealed]) {
                        // reached end of the playable section
                        playerRef.current.pauseVideo();
                        playerRef.current.seekTo(0);
                        setIsPlaying(false);
                        setCurrentTime(0);
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
            if (vol < 1) {
                playerRef.current.mute();
            } else {
                playerRef.current.unMute();
            }
        }
    };

    // shows video upon reaching an end game state
    useEffect(() => {
        if (playerRef && isPlayerReady && showVideo) {
            playerRef.current.setSize(640, 360);
        }
    }, [showVideo]);

    // loads YouTube Iframe API
    useEffect(() => {
        // append the yt api script
        const script = document.getElementById("youtube-iframe-api");
        if (!script) {
            const tag = document.createElement("script");
            tag.id = "youtube-iframe-api";
            tag.src = "https://youtube.com/iframe_api";
            document.body.appendChild(tag);
        }
        // create the player  
        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player('yt-audio-player', {
                width: '0',
                height: '0',
                videoId: videoId,
                playerVars: { 
                    'autoplay' : 0,
                    'mute' : 1,
                    'enablejsapi': 1
                },
                events: {
                    onReady: (event: any) => handleReady(event),
                    // onStateChange: () => startPlaying(),
                },
            });
        };
        return () => playerRef.current.destroy();
    }, [videoId]);

    return ( 
        <div className="MediaContainer">
            <div id="yt-audio-player"></div>
            <div className="Media">
                <div 
                    className="PlayButton"
                    onClick={handleClick}
                >
                    PlayButton
                </div>
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
        </div>
    )

    // const handleReady = (e: any) => {
    //     playerRef.current = e.target;
    // }

    // const handleClick = () => {
    //     if (isPlaying) {
    //         playerRef.current.pauseVideo();
    //         setIsPlaying(false);
    //     } else {
    //         playerRef.current.playVideo();
    //         setIsPlaying(true);
    //     }
    // }

    // return (
    //     <div className='MediaContainer'>
    //         <YouTube
    //             videoId={videoId}
    //             onReady={handleReady}
    //             opts={{
    //                 playerVars: {
    //                     autoplay: 1,
    //                     controls: 0,
    //                     modestbranding: 1,
    //                     rel: 0,
    //                     enablejsapi: 1,
    //                 },
    //             }}
    //         />
    //         <button className='PlayButton' onClick={handleClick}>PlayButton</button>
    //     </div>
    // )
}

export default MediaPlayer;