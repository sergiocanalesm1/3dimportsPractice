import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Example() {
  const torusRef = useRef();

  useFrame(({ clock }) => {
    torusRef.current.rotation.y = Math.sin(clock.getElapsedTime());
    console.log(Math.sin(clock.getElapsedTime()));
  });
  return (
    <mesh ref={torusRef}>
      <torusBufferGeometry args={[1, 0.5, 16, 100]} />
      <meshNormalMaterial />
    </mesh>
  );
}
