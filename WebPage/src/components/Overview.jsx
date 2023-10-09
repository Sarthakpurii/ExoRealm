import React, { useEffect, useState } from 'react'

function Overview() {
    return (
        <section className={`flex flex-col items-center overview h-[100vh] relative text-white`}>
            <div className='text-7xl absolute top-10 mt-10 font-bellefair text-white z-10'>OVERVIEW</div>
            <section className='w-full h-full flex flex-row'>
            <div className='w-1/2 relative top-16  h-[90vh]'>
                    <img src="/flipAstronaut.png" alt="" className=' h-full'/>
                </div>
                <div className='w-1/2 flex flex-col p-28 font-barlowc justify-center items-center text-2xl '>ExoRealm is specially curated for space enthusiasts like you, who are inspired by new exploration and innovation.<b />
                    We offer you the best experience to visualize how would you breathe life into the wildest realms of your imagination.<b />


                    In this ethereal realm, let's see if you can make your own exoplanet by entering the features you wish to make it habitable, and we'll help you know if that would suit the survival conditions.<b />

                    Travel over your exoplanet and experience the views, surroundings, terrain, and atmosphere it exhibits.<b />
                    So, without any further waiting, Exorians, "let us embark on this cosmic voyage together, as we surf through the realms of your Exoplanet."</div>
                
            </section>
        </section>
    )
}

export default Overview