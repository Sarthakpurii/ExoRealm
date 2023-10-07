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
        <section id="overview" style={{ backgroundSize: `${70 + scrollY / 12}%` }} className={`flex flex-col items-center overview ${scrollY > 100 ? 'zoomed' : ''} h-screen relative text-white border`}>
            <div className='text-7xl mt-10 font-bellefair text-white'>Overview</div>
            <section className='w-full flex flex-row'>
                <div className='w-1/2 border h-[84vh]'>hello</div>
                <div className='w-1/2 border h-[84vh]'>Overview Details</div>
            </section>
        </section>
    )
}

export default Overview