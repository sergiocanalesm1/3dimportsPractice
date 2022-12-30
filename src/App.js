import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Chalkboard from './comp/Chalkboard';
// import Example from "./comp/Example";
import Newspaper from './comp/Newspaper';
import Vinyl from './comp/Vinyl';
import Book from './comp/Book';

const rad = 10;

export default function App() {
  return (
    <Canvas
      camera={{ position: [0, 20, 50], fov: 15 }}
      style={{
        width: '100vw',
        height: '70vh',
      }}
    >
      <Environment preset="warehouse" background blur={1} />
      <ambientLight intensity={0.3} />
      <Suspense fallback={null}>
        <Chalkboard position={[0, 0, -rad]} />
        <Newspaper
          position={[
            rad * Math.cos(Math.PI / 4),
            0,
            -rad * Math.sin(Math.PI / 4),
          ]}
          scale={[5, 5, 5]}
        />
        <Vinyl position={[rad, 0, 0]} scale={[3, 3, 3]} />
        <Book
          position={[
            rad * Math.cos(Math.PI / 4),
            0,
            rad * Math.sin(Math.PI / 4),
          ]}
        />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
