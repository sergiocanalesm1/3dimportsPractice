/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function PersonalXP(props) {
  const { nodes, materials } = useGLTF('/models/personal xp.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[0.02, 0.61, -0.06]}
        scale={0.62}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.head.geometry}
        material={nodes.head.material}
        position={[1.2, 3.37, -0.15]}
        rotation={[0, 0, -0.53]}
        scale={[0.43, 0.43, 0.4]}
      />
    </group>
  );
}

useGLTF.preload('/models/personal xp.glb');
