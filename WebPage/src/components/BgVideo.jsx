import React from 'react';
import video from '../assets/video.mp4';

function BgVideo() {
    return (
        <div className="bgContainer">
            <div className="overlay">
                <video src={video} autoPlay loop muted />
                <div className="flex container flex-row border">
                    <h2 className="wlc ">WELCOME EXORIANS!</h2>
                    <h1 className="title">TRAVEL ON YOUR EXOPLANETS</h1>
                </div>
            </div>
        </div>
    )
}

export default BgVideo;