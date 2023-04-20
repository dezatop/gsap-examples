import {Canvas} from "@react-three/fiber";
import Box from "../ComponentsThree/box";
import {Suspense} from "react";
import Plane from "../ComponentsThree/plane";
import {Physics} from "@react-three/cannon";
import {OrbitControls} from "@react-three/drei";

const ThreePage = () => {
  return (
    <div className='container_canvas'>
      <Suspense fallback={<div>Loading</div>}>
        <Canvas>
          <Physics>
            <OrbitControls/>
            <ambientLight intensity={0.5}/>
            <pointLight position={[10,10,10]}/>
            {/*<spotLight position={[10,15,10]} angle={0.3}/>*/}
            <Box position={[0, 5, 1]}/>
            <Box position={[-0.7, 2, 2]}/>
            <Box position={[1, 2, 2]}/>
            <Box position={[-0.8, 2, 1]}/>
            <Box position={[-0.9, 2, 2]}/>
            <Plane position={[1, -2, 1]}/>
          </Physics>
        </Canvas>
      </Suspense>
    </div>
  );
};

export default ThreePage;