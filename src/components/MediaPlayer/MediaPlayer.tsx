import React, { useEffect, useRef, useState } from 'react';
import './MediaPlayer.css'
import type { MediaPlayerProps } from '@types/props';
import YouTube from 'react-youtube';

function MediaPlayer({ hintsRevealed, videoId, showVideo } : MediaPlayerProps) {
    // how many seconds of audio the player should be allowed to play
    // this is based on how many hints are available to the player
    const interval = [1, 2, 5, 10, 15, 30]; // interval[hintsRevealed] = max playtime of clip in seconds
    const [currentTime, setCurrentTime] = useState(0); // PlayerRef.current.getCurrentTime() elapsed seconds since video started playing
    const [isPlaying, setIsPlaying] = useState(false); // is video playing?
    const playerRef = useRef<any>(null);
    const [isPlayerReady, setisPlayerReady] = useState(false);
    const [volume, setVolume] = useState(50); // 0 to 100
    
    // let mediaPlayer: YouTubePlayer = null;
    const handleReady = (e: any) => {
        playerRef.current = e.target;
    }

    const handleClick = () => {
        if (isPlaying) {
            playerRef.current.pauseVideo();
            setIsPlaying(false);
        } else {
            playerRef.current.playVideo();
            setIsPlaying(true);
        }
    }

    return (
        <div className='MediaContainer'>
            <YouTube
                videoId={videoId}
                onReady={handleReady}
                opts={{
                    playerVars: {
                        autoplay: 1,
                        controls: 0,
                        modestbranding: 1,
                        rel: 0,
                        enablejsapi: 1,
                    },
                }}
            />
            <button className='PlayButton' onClick={handleClick}>PlayButton</button>
        </div>
    )
}

export default MediaPlayer;

// initial try smh
// declare global {
//     interface Window {
//         onYouTubeIframeAPIReady: () => void;
//         YT: any;
//     }
// }

// const handleClick = () => {
    //     if (isPlayerReady && playerRef.current) {
        //         console.log("Player:", playerRef.current);
        //         console.log("State:", playerRef.current?.getPlayerState?.());
        //         // if it's paused then play
        //         if (playerRef.current.getPlayerState() === window.YT.PlayerState.PAUSED) {
//             playerRef.current.playVideo();
//             setIsPlaying(true);
//         } else { // if it's playing then pause
//             playerRef.current.pauseVideo();
//             setIsPlaying(false);
//         }
//     }
// };

// const startPlaying = () => {
//     console.log("state change")
//     if (isPlayerReady && playerRef.current) {
//         if (playerRef.current.getPlayerState() === window.YT.PlayerState.CUED) {
//             playerRef.current.mute();
//             playerRef.current.playVideo();
//         }
//     }
// };

// useEffect(() => {
//     let intervalId: NodeJS.Timeout;

//     if (isPlaying && playerRef.current) {
//         intervalId = setInterval(() => {
//             const time = playerRef.current.getCurrentTime();
//             if (typeof time === "number") {
//                 setCurrentTime(Math.floor(time));
//                 if (time > interval[hintsRevealed]) {
//                     // reached end of the playable section
//                     handleClick();
//                     playerRef.current.seekTo(0);
//                     setIsPlaying(false);
//                     setCurrentTime(0);
//                 }
//             }
//         }, 500);
//     }
// }, [isPlaying]);

// const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const vol = Number.parseInt(e.target.value);
//     console.log(vol);
//     setVolume(vol);
//     if (playerRef) playerRef.current.setVolume(volume);
// };

// // shows video upon reaching an end game state
// useEffect(() => {
//     if (playerRef && isPlayerReady && showVideo) {
//         playerRef.current.setSize(640, 360);
//     }
// }, [showVideo]);

// // loads YouTube Iframe API
// useEffect(() => {
//     // append the yt api script
//     const script = document.getElementById("youtube-iframe-api");
//     if (!script) {
//         const tag = document.createElement("script");
//         tag.id = "youtube-iframe-api";
//         tag.src = "https://youtube.com/iframe_api";
//         document.body.appendChild(tag);
//     }
//     // create the player  
//     window.onYouTubeIframeAPIReady = () => {
//         playerRef.current = new window.YT.Player('yt-audio-player', {
//             width: '400',
//             height: '400',
//             videoId: videoId,
//             playerVars: { 
//                 // 'autoplay' : 1,
//                 'mute' : 1,
//              },
//             events: {
//                 onReady: (event: any) => {
//                     setisPlayerReady(true);
//                     event.target.playVideo();
//                     handleClick();
//                     console.log("Player is ready");
//                 },
//                 onStateChange: () => startPlaying(),
//             },
//         });
//     };
// }, [videoId]);

// const [play, setPlay] = useState(false);
// const url = play
//     ? `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1`
//     : `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;

// return ( 
//     <div className="MediaContainer">
//         {/* <div id="yt-audio-player"></div> */}
//         <div>
//             <iframe 
//                 width="560" 
//                 height="315" 
//                 src={url} // ${song['yt_video_id']} 
//                 title="YouTube video player" 
//                 style={{ border: "none" }}
//                 // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
//                 referrerPolicy="strict-origin-when-cross-origin" 
//                 allowFullScreen>
//             </iframe>
//         </div>
//         <div className="Media">
//             <div 
//                 className="PlayButton"
//                 onClick={(prev) => {
//                     console.log('clicked');
//                     setPlay(prev ? false : true);
//                 }}
//             >
//                 PlayButton
//             </div>
//             <div className="PlayTimeBar">
//                 <span>{Math.min(currentTime, interval[hintsRevealed])}</span>
//                 <input 
//                     className="Progress"
//                     type="range" 
//                     min="0" 
//                     max={interval[hintsRevealed]} 
//                     value={Math.min(currentTime, interval[hintsRevealed])} 
//                     readOnly={true}
//                 />
//                 <span>{interval[hintsRevealed]}</span>
//             </div>
//             <div className="VolumeSlider">
//                 <input 
//                     type="range" 
//                     min="0" 
//                     max="100" 
//                     value={volume} 
//                     className="Slider"
//                     onChange={(e) => changeVolume(e)}
//                 />
//             </div>
//         </div>
//     </div>
// )