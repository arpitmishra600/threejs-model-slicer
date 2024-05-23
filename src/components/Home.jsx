
import { OrbitControls, PerspectiveCamera, TransformControls, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef, useState } from 'react'
import { useDrag } from 'react-use-gesture';
import * as THREE from 'three'
import { useContextHook } from '../context/useContextHook';
import { Model } from './Model';
import { useFrame, useThree } from '@react-three/fiber';

export default function Home() {
  const meshRef = useRef();
  const model=useGLTF("/mod/scene.gltf")
  const [view,setView]=useState()
  const {preview,initialpos,position, setPosition,disect}=useContextHook()
  const { camera } = useThree();


const camref=useRef()
//  useFrame(()=>{
//   console.log(camref.current.position)
//  })
useFrame(() => {
  // Access camera rotation
  const { rotation } = camera;

  // Determine view based on rotation
  let view = "top";
  
  if (Math.abs(rotation.x) < Math.PI / 4 && Math.abs(rotation.y) < Math.PI / 4) {
    view = "front";
  } else if (Math.abs(rotation.y - Math.PI / 2) < Math.PI / 4) {
    view = "left";
  } else if (Math.abs(rotation.y + Math.PI / 2) < Math.PI / 4) {
    view = "right";
  }

  setView(view)
  console.log(view)
});

  const createDragHandler = (initialPos,key) => {
    return useDrag(({ offset: [x, y] }) => {
      const [initialX, initialY, initialZ] = initialPos;
      
      switch (view) {
        case "top":
          var newpos = [initialX + y / 100, initialY-y/100 , initialZ-x/100];
          break;
        case "front":
          var newpos = [initialX + y / 100, initialY-y/100 , initialZ-x/100];
          break;
        case "left":
          var newpos = [initialX -x / 100, initialY-y/100 , initialZ-y/100];
          break;
        case "right":
          var newpos = [initialX + x / 100, initialY-y/100 , initialZ-x/100];
          break;
        
        default:
          break;
      }
        
        setPosition({ ...position, [key]: newpos });      
      
    });
  };
  const binder1 = createDragHandler(initialpos.current.p1,"p1");
  const binder2 = createDragHandler(initialpos.current.p2,"p2");
  const binder3 = createDragHandler(initialpos.current.p3,"p3");
  const b4 = createDragHandler(initialpos.current.p4,"p4");
  const b5 = createDragHandler(initialpos.current.p5 ,"p5");
  const b6 = createDragHandler(initialpos.current.p6 ,"p6");
  const b7 = createDragHandler(initialpos.current.p7 ,"p7");
  const b8 = createDragHandler(initialpos.current.p8 ,"p8");
  const b9 = createDragHandler(initialpos.current.p9 ,"p9");
  const b10 = createDragHandler(initialpos.current.p10,"p10");
  const b11 = createDragHandler(initialpos.current.p11,"p11");
  const b12 = createDragHandler(initialpos.current.p12,"p12");
  const b13 = createDragHandler(initialpos.current.p13,"p13");
  const b14 = createDragHandler(initialpos.current.p14,"p14");
  const b15 = createDragHandler(initialpos.current.p15,"p15");
  const b16 = createDragHandler(initialpos.current.p16,"p16");
  const b17 = createDragHandler(initialpos.current.p17,"p17");
  const b18 = createDragHandler(initialpos.current.p18,"p18");

useEffect(()=>console.log(preview),[preview])
  return (
    <>
    <axesHelper scale={3}></axesHelper>
    {preview&&<OrbitControls/>}
     <PerspectiveCamera
     ref={camref}
        makeDefault 
        position={[
          0,3,10]} 
        fov={75} 
        aspect={window.innerWidth / window.innerHeight} 
        near={0.1} 
        far={1000} 
      />
      {/* Example scene objects */}
      <group >
        {/* <mesh {...(disect ? binder1(initialpos.current.p1) : {})} position={position.p1} ref={meshRef}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color='orange' />
        </mesh> */}
        <mesh {...(disect ? binder2() : {})} position={position.p2} >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color='orange' />
        </mesh>
       {/* <TransformControls object={meshRef}>
          <mesh {...(disect ? binder3() : {})} position={position.p3} ref={meshRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color='orange' />
          </mesh>
       </TransformControls> */}
        <Model binder={{b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17}}/>
      </group>

      <group>
      {/* <mesh {...(disect ? b18(initialpos.current.p18) : {})} position={position.p18} ref={meshRef}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color='orange' />
        </mesh> */}
      </group>
      
      <ambientLight intensity={1}/>
       </>
  )
}
