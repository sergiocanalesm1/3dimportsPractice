import React, { Suspense, useMemo } from 'react';

import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

import Chalkboard from './comp/Chalkboard';
// import Example from "./comp/Example";
import Newspaper from './comp/Newspaper';
import Vinyl from './comp/Vinyl';
import Book from './comp/Book';
import Videogame from './comp/Videogame';
import PersonalXP from './comp/PersonalXP';
import Theater from './comp/Theater';
import Video from './comp/Video';

const rad = 10;
const lineRad = rad - rad / 8;
const lineAmp = rad / 2;

export default function App() {
  const points1Geometry = useMemo(() => {
    const points = [];
    let x = -lineRad;
    let y = 0;
    const z = 0;
    const steps = 100;
    const dx = 2 * (lineRad / steps);
    for (let t = 0; t < steps; t += 1) {
      x = -lineRad + dx * t;
      y = lineAmp * Math.sin((Math.PI * t) / steps);
      points.push(new THREE.Vector3(x, y, z));
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 20, 50], fov: 15 }}
      style={{
        width: '100vw',
        height: '70vh',
      }}
    >
      <Environment
        files="./imgs/drakensberg_solitary_mountain_puresky_1k.hdr"
        background
        blur={0.5}
      />
      <ambientLight intensity={0.1} />
      <Suspense fallback={null}>
        <line geometry={points1Geometry}>
          <lineBasicMaterial color="red" />
        </line>
        <Chalkboard position={[0, 0, -rad]} />
        <Newspaper
          position={[
            rad * Math.cos(Math.PI / 4),
            0,
            -rad * Math.sin(Math.PI / 4),
          ]}
        />
        <Vinyl position={[rad, 0, 0]} scale={[3, 3, 3]} />
        <Book
          position={[
            rad * Math.cos(Math.PI / 4),
            0,
            rad * Math.sin(Math.PI / 4),
          ]}
        />
        <Videogame position={[0, 0, rad]} />
        <PersonalXP
          position={[
            -rad * Math.cos(Math.PI / 4),
            0,
            rad * Math.sin(Math.PI / 4),
          ]}
          scale={[0.5, 0.5, 0.5]}
        />
        <Theater position={[-rad, 0, 0]} />
        <Video
          position={[
            -rad * Math.cos(Math.PI / 4),
            0,
            -rad * Math.sin(Math.PI / 4),
          ]}
          scale={[0.75, 0.75, 0.75]}
        />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
