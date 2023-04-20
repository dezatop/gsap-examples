import React from 'react';
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import {usePlane} from "@react-three/cannon";

const Plane = ({position}) => {
  const [wood] = useLoader(TextureLoader, [
    'wood-6.jpg'
  ])

  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position,
  }))

  return (
    <mesh ref={ref}>
      <planeGeometry args={[50, 50]}/>
      <meshStandardMaterial map={wood}/>
    </mesh>
  );
};

export default Plane;