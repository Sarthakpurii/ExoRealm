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
        <section className={`overview ${scrollY > 100 ? 'zoomed' : ''} h-screen relative text-white`}>

        </section>
    )
}

export default Overview