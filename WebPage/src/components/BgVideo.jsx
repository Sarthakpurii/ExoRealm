import React from 'react';
import { NavLink } from 'react-router-dom';
import video from '../assets/video.mp4';

function BgVideo() {
    return (
        <div id="home" className="h-screen flex flex-col items-center">
            <video src={video} autoPlay loop muted />
            <div className="flex h-[80vh] mt-20 w-full flex-row absolute top-0 justify-center text-white z-10">
                <div className='flex flex-col justify-center items-center p-10 gap-5'>
                    <div className='w-[540px]'>
                        <h2 className="font-bellefair text-[100px] leading-none">Hey Exorians!</h2>
                        <p className='font-barlow p-2 text-[#e9ffe8] text-xl text-center relative indent-0'>Ever imagined whether we are alone in the universe?<br />
                            Lets delve into in the world to embark on a voyage of boundless creativity and exploration. Step into the universe of ExoRealm, where the cosmos becomes your canvas and your imagination knows no bounds. Join us on a thrilling quest to create and explore exoplanets of your very own making. Get Ready for the journey to Comsmos!</p>

                    </div>
                    <NavLink to='game'><button className='hover:w-40 hover:h-40 rounded-full w-28 h-28 bg-slate-100 text-black font-barlowc text-2xl'>Play Game</button></NavLink>
                </div>
            </div>

        </div>
    )
}

export default BgVideo;