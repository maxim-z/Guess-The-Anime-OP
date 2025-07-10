import { useState } from 'react';
import './MediaPlayer.css'
import type { MediaPlayerProps } from '@types/props';

type IntervalSeconds = '1' | '2' | '5' | '10' | '15' | '30';

function MediaPlayer({showVideo} : MediaPlayerProps) {
    // how many seconds of audio the player should be allowed to play
    // this is based on how many hints are available to the player
    const [maxSecs, setMaxSecs] = useState<IntervalSeconds>('1');
    
    return showVideo ? (
        <div>
            <iframe 
                width="560" 
                height="315" 
                src={`https://www.youtube.com/embed/o71vyLnNtBo`} // ${song['yt_video_id']} 
                title="YouTube video player" 
                style={{ border: "none" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
            </iframe>
        </div>
    ) : (
        <div>Custom Player</div>
    )
}

export default MediaPlayer;