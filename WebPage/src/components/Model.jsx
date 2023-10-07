import React, { Suspense } from 'react'
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from 'styled-components'
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { Earth } from '../components/earth'


extend({ OrbitControls, Canvas })



const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default function Model() {
  return (
    <div id='demo' className='-z-10 h-screen w-full '>
      <div className='absolute top-[200vh] h-screen text-white border left-[50vw]'>
        This is new text Section Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis incidunt blanditiis nemo ea, fugit totam repellendus! Tempore enim doloribus beatae incidunt a totam fugiat consequuntur eos ipsa amet quisquam obcaecati tenetur recusandae reiciendis, delectus quaerat, iure quo est eius rem. Delectus iste sapiente similique reprehenderit assumenda officia maiores tempora consequuntur dolorum. Quam alias reprehenderit atque eveniet perspiciatis, magni assumenda deleniti asperiores, qui expedita numquam, iusto accusamus. Atque inventore esse incidunt accusantium dicta error facilis! Laboriosam at necessitatibus, iure vero iusto officia ullam consequuntur iste? Eligendi quam sit porro magni animi voluptate perferendis eveniet odit neque. Ab ducimus quia, officiis animi iure repellat adipisci accusantium, fugit quisquam quibusdam veniam natus quaerat praesentium, quos voluptate harum explicabo fugiat minima consequatur assumenda beatae dolorum. Error magni aspernatur ipsa maiores dolorem numquam, explicabo voluptatem tenetur atque laboriosam expedita reprehenderit. Ea sapiente at sint. Accusantium enim animi veritatis natus impedit, placeat ea in labore magni accusamus maxime laboriosam sit atque quibusdam numquam consectetur, eaque culpa ad? Natus minima a pariatur consequatur, repellat illo recusandae! Provident nobis in voluptate beatae accusamus? Quae molestiae voluptas ipsum sed nisi laborum hic velit sint consequuntur. Eius nisi temporibus in laboriosam harum nesciunt, reiciendis commodi est tenetur, voluptatum repellat vitae.
      </div>
      <CanvasContainer className='h-screen w-full text-white border'>
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </div>

  );
}