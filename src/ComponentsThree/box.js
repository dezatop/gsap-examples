import React, {useRef} from 'react';
import {useFrame, useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import {useBox} from "@react-three/cannon";

const Box = ({position}) => {
  const [wood] = useLoader(TextureLoader, [
    'wood-2.jpg'
  ])

  const [ref, api] = useBox(() => ({
    position,
    mass: 1,
  }))

  return (
    <mesh onClick={() => {
      api.velocity.set(0, 20, -1)
    }} ref={ref} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={wood}/>
    </mesh>
  );
};

export default Box;