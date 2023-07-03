// import React, { Suspense } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
// import CanvasLoader from '../Loader'
// import { AmbientLight } from 'three'

// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl])

//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1, 1]} />
//         <meshStandardMaterial color='fff8eb' polygonOffset polygonOffsetFactor={-5} flatShading />
//         <Decal position={[0, 0, 1]} flatShading rotation={[2 * Math.PI, 0, 6.26]} map={decal} />
//       </mesh>
//     </Float>
//   )
// }

// const BallCanvas = ({ icon }) => {
//   return (
//     <Canvas frameloop='demand' gl={{ preserveDrawingBuffer: true }}>
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} />
//         <Ball imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   )
// }

// export default BallCanvas

// import React, { Suspense, useRef } from 'react';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
// import CanvasLoader from '../Loader';
// import { AmbientLight } from 'three';

// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl]);

//   const meshRef = useRef();

//   useFrame(({ mouse }) => {
//     const { camera, size } = useThree();
//     const mousePos = mouse.clone().subScalar(0.5).multiplyScalar(2);
//     const x = -mousePos.x * (size.width / size.height) * 10;
//     const y = mousePos.y * 10;
//     meshRef.current.rotation.y = x;
//     meshRef.current.rotation.x = y;
//   });

//   return (
//     // <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//     //   <ambientLight intensity={0.25} />
//     //   <directionalLight position={[0, 0, 0.05]} />
//     //   <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
//     //     <icosahedronGeometry args={[1, 1]} />
//     //     <meshStandardMaterial color='fff8eb' polygonOffset polygonOffsetFactor={-5} flatShading />
//     //     <Decal position={[0, 0, 1]} flatShading rotation={[2 * Math.PI, 0, 6.26]} map={decal} />
//     //   </mesh>
//     // </Float>


//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1, 1]} />
//         <meshStandardMaterial color='fff8eb' polygonOffset polygonOffsetFactor={-5} flatShading />
//         <Decal position={[0, 0, 1]} flatShading rotation={[2 * Math.PI, 0, 6.26]} map={decal} />
//       </mesh>
//     </Float>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   return (
//     <Canvas frameloop='demand' gl={{ preserveDrawingBuffer: true }}>
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} />
//         <Ball imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;


import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  const meshRef = useRef();

  const handlePointerMove = (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    meshRef.current.rotation.x = y * 0.5;
    meshRef.current.rotation.y = x * 0.5;
  };

  // useFrame(({ mouse }) => {
  //   const { size } = meshRef.current;
  //   const { x, y } = mouse;
  //   const mouseX = (x / size.width) * 2 - 1;
  //   const mouseY = -(y / size.height) * 2 + 1;
  //   meshRef.current.rotation.x = mouseY * 0.5;
  //   meshRef.current.rotation.y = mouseX * 0.5;
  // });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75} ref={meshRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color='fff8eb' polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} flatShading rotation={[2 * Math.PI, 0, 6.26]} map={decal} />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  // const [decal] = useTexture([icon]);

  // const meshRef = useRef();

  // const handlePointerMove = (event) => {
  //   const x = (event.clientX / window.innerWidth) * 2 - 1;
  //   const y = -(event.clientY / window.innerHeight) * 2 + 1;
  //   meshRef.current.rotation.x = y * 0.5;
  //   meshRef.current.rotation.y = x * 0.5;
  // };

  return (
    <Canvas frameloop='demand' gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />

        {/* <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
          <ambientLight intensity={0.25} />
          <directionalLight position={[0, 0, 0.05]} />
          <mesh ref={meshRef} castShadow receiveShadow scale={2.75} ref={meshRef}>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial color='fff8eb' polygonOffset polygonOffsetFactor={-5} flatShading />
            <Decal position={[0, 0, 1]} flatShading rotation={[2 * Math.PI, 0, 6.26]} map={decal} />
          </mesh>
        </Float> */}
      </Suspense>

      <Preload all />

      {/* <div
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
        onPointerMove={handlePointerMove}
      /> */}
    </Canvas>
  );
};

export default BallCanvas;
