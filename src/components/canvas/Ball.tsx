import React, { RefAttributes, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

interface BallProps {
  imgUrl: string;
}

interface Props {
  children: number[], 
  speed: number, 
  rotationIntensity: number, 
  floatIntensity: number, 
  attach: number,
  args: number,
  key: number,
  onUpdate: number,
}

const floatProps: Props = {
  children: [], 
  speed: 0, 
  rotationIntensity: 0, 
  floatIntensity: 0, 
  attach: 0,
  args: 0,
  key: 0,
  onUpdate: 0,
};

export declare type FloatProps = JSX.IntrinsicElements['group'] & {
  enabled?: boolean;
  speed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  children?: React.ReactNode;
  floatingRange?: [number?, number?];
};

const Ball = (props: BallProps) => {
  const [decal] = useTexture([props.imgUrl /* as string */]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

interface BallCanvasProps {
  icon: {
    src: string;
  }
}

const BallCanvas = ({ icon } : BallCanvasProps) => {

  return (
    <div>
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon.src} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
