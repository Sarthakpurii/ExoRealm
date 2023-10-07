import React from 'react';
import video from '../assets/video.mp4';

function BgVideo() {
    return (
        <div className="bgContainer">
            <div className="overlay">
                <video src={video} autoPlay loop muted />
                <div className="flex h-full w-full flex-row absolute top-0 left-0 text-white ">
                    <div className='w-4/6 flex flex-col justify-center p-10'>
                        <div className='text-justify text-left ml-36  w-[540px]'>
                            <h2 className="wlc font-bellefair text-[100px] mt-28 leading-none self-center  ">Hey Exorians!</h2>
                            <p className='font-barlow p-2 text-[#D0D6F9] text-xl text-left relative indent-0'>Are you ready to embark on a journey through the vast expanse of the cosmos? Join us as we dive into the intriguing world of exoplanets, celestial bodies beyond our solar system</p>
                            {/* <h1 className="title w-1/2">TRAVEL ON YOUR EXOPLANETS</h1> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BgVideo;