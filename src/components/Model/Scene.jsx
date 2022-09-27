import './Scene.css'

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Box(){
   return(
      <mesh>
         <boxBufferGeometry attach="geometry" />
         <meshLambertMaterial attach="material" color="white" />
      </mesh>
   )
}


export default function App() {
   return (
      <div className="Scene">
         <div className="container">
            <Canvas color='grey'>
               <OrbitControls />
               <ambientLight intensity={0.5}/>
               <spotLight position={[10, 15, 10]}/>
               <Suspense fallback="null">
                  <Box />
               </Suspense>
            </Canvas>
         </div>
      </div>
   );
}