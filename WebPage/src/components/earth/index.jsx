import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import MarbleMap from '../../assets/textures/blue-gold-marble-textured-background.jpg'
import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg'
import EarthNormalMap from '../../assets/textures/8k_earth_normal_map.jpg'
import EarthSpecularMap from '../../assets/textures/8k_earth_specular_map.jpg'
import EarthCloudsMap from '../../assets/textures/8k_earth_clouds.jpg'
import EarthNightsMap from '../../assets/textures/8k_earth_nightmap.jpg'
import * as THREE from 'three'

import { TextureLoader } from 'three'


export function Earth(props) {
    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [MarbleMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap])
    const earthRef = useRef();
    const cloudsRef = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        earthRef.current.rotation.y = elapsedTime / 6
        cloudsRef.current.rotation.y = elapsedTime / 6

    })
    return (
        <>
            <ambientLight intensity={4} />
            <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2} />
            <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true} />
            <mesh ref={cloudsRef}  position={[-1,0,3]}>
                <sphereGeometry args={[1.005, 32, 32]} />
                <meshPhongMaterial map={cloudsMap} opacity={0.1} depthWrite={true} transparent={true} side={THREE.DoubleSide} />
            </mesh>
            <mesh ref={earthRef} position={[-1,0,3]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshPhongMaterial specularMap={specularMap} />
                <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7} />
                {/* <OrbitControls
                    enableZoom={true}
                    enablePan={true}
                    enableRotate={true}
                    panSpeed={0.5}
                    zoomSpeed={0.4}

                /> */}

            </mesh>
        </>
    )
}
