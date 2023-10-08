import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import styled from 'styled-components'
import { Earth } from '../components/earth'


const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default function Model() {
  return (
    <div id='demo' className='-z-10 h-screen w-full '>
      <div className='absolute top-[0] h-[80vh] mt-[20vh] text-white  left-[60vw] z-10'>
        {/* Try out your hands on the 3D model and dive into the thrilling experience of an unraveling journey of ExoRealm. */}
        <h2 className='font-bellefair text-[100px] leading-none'>51 Eridani B</h2>
        <p className='font-barlow p-2 text-[#D0D6F9] text-xl w-[500px]'>It is 96 light years away from the solar system, and it is approximately 20 million years old. It's an gas giant exoplanet that orbits an F-type star. Its mass is 2 Jupiters, it takes 32 years to complete one orbit of its star, and is 13.2 AU from its star.</p>
        <hr className='mt-20 w-[450px] ml-3'/>
        <span className='flex flex-row gap-10 justify-between w-[450px] mt-5 ml-3  font-barlowc'><p className=' text-[#D0D6F9]'>AVG. DISTANCE<br/>96 Light Years</p> <p className='text-[#D0D6F9]'>DISCOVERY DATE<br/>2015</p></span>

      </div>
      <CanvasContainer className='h-screen w-full '>
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </div>

  );
}