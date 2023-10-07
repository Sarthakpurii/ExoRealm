import React, { useEffect, useState } from 'react'

function Overview() {
    const [scrollY, setScrollY] = useState(0);
    console.log(scrollY)
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <section id="overview" style={{ backgroundSize: `${70 + scrollY / 12}%` }} className={`flex flex-col items-center overview ${scrollY > 100 ? 'zoomed' : ''} h-screen relative text-white`}>
            <div className='text-7xl mt-10 font-bellefair text-white'>OVERVIEW</div>
            <section className='w-full flex flex-row'>

                <div className='w-1/2 h-[84vh] flex flex-col p-28 font-barlowc justify-center items-center text-2xl '>ExoRealm is specially curated for space enthusiasts like you, who are inspired by new exploration and innovation.<b />
                    We offer you the best experience to visualize how would you breathe life into the wildest realms of your imagination.<b />


                    In this ethereal realm, let's see if you can make your own exoplanet by entering the features you wish to make it habitable, and we'll help you know if that would suit the survival conditions.<b />

                    Travel over your exoplanet and experience the views, surroundings, terrain, and atmosphere it exhibits.<b />
                    So, without any further waiting, Exorians, "let us embark on this cosmic voyage together, as we surf through the realms of your Exoplanet."</div>
                <div className='w-1/2 h-[84vh] mt-[-30px]'>
                    <img src="/flipAstronaut.png" alt="" />
                </div>
            </section>
        </section>
    )
}

export default Overview