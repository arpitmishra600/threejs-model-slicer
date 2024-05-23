import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei'
import { useContextHook } from '../context/useContextHook'
import * as THREE from 'three'
export function Model(props) {
      const {preview,initialpos,position, setPosition,disect,aniplay}=useContextHook()
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/mod/scene.gltf')

  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    if(aniplay){
        Object.values(actions).forEach(action => action.play())
    }else{
        Object.values(actions).forEach(action => action.stop())
    }
    
  }, [actions,aniplay])
  useEffect(() => {
console.log(aniplay)
    
  }, [aniplay])
  
  console.log(actions) 
  return (
    <group ref={group} {...props} dispose={null} rotation-y={1.5*Math.PI}>
    
      <group name="Scene">
        <group name="NurbsPath" position={[0.433, 3.765, 3.067]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            name="Circle"
            castShadow
            receiveShadow
            geometry={nodes.Circle.geometry}
            material={materials['Material.008']}
            position={[3.595, 0.91, -0.109]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.054}
          />
        </group>
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials['Material.012']}
          position={[0, -10.9, -1.901]}
          rotation={[0, 0.052, 0]}
          scale={31.022}
        />
        <mesh
          name="Cube004"
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials['Material.012']}
        />
        <group name="candlestick" rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
          <group name="candle" position={[13.106, 0, 0]}>
            <group
              name="flame_lights"
              position={[-71.691, 67.447, -3119.953]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}>
              <mesh
                name="tip"
                castShadow
                receiveShadow
                geometry={nodes.tip.geometry}
                material={materials.tip}
                position={[-126.087, 118.524, 375.621]}
                rotation={[-Math.PI / 2, 0, Math.PI]}
              />
            </group>
          </group>
          <mesh
          {...(disect ? props.binder.b4() : {})}
            name="rusty_base"
            castShadow
            receiveShadow
            geometry={nodes.rusty_base.geometry}
            material={materials['rusty base']}
            position={position.p4.map((item)=>item*100)}
            rotation={[0.324, -0.013, -1.608]}
          />
          <mesh
          {...(disect ? props.binder.b5() : {})}
            name="wax"
            castShadow
            receiveShadow
            geometry={nodes.wax.geometry}
            material={materials.wax1}
            position={position.p5.map((item)=>item*100)}
          />
        </group>
        <group name="BezierCurve" />
        
        <group
        {...(disect ? props.binder.b7() : {})}
          name="BezierCurve001"
          position={position.p7}
          rotation={[-0.016, -0.199, -0.162]}>
          <mesh
            name="Mesh005"
            castShadow
            receiveShadow
            geometry={nodes.Mesh005.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Mesh005_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh005_1.geometry}
            material={materials['Material.003']}
          />
        </group>
        <mesh
          name="BezierCurve002"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve002.geometry}
          material={nodes.BezierCurve002.material}
        />
        <group name="BezierCurve003" />
        <mesh
        {...(disect ? props.binder.b8() : {})}
          name="BezierCurve005"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve005.geometry}
          material={materials['Material.001']}
          position={position.p8}
          rotation={[-0.016, -0.199, -0.162]}
        />
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials['Material.009']}
          position={[-0.033, 2.752, 0.293]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.2}
        />
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials['Material.007']}
          position={[0, -3.044, -4.219]}
          rotation={[0, 0.09, 0]}
          scale={[14.302, 14.302, 18.35]}
        />
        <group {...(disect ? props.binder.b9() : {})} name="Cube001" position={position.p9} scale={0.163}>
          <mesh
            name="Cube001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials['Material.005']}
          />
          <mesh
            name="Cube001_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_2.geometry}
            material={materials['Material.004']}
          />
        </group>
        <mesh
          name="BezierCurve007"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve007.geometry}
          material={materials['Material.010']}
          position={[1.284, 5.679, -5.783]}
        />
        <mesh
        {...(disect ? props.binder.b10() : {})}
          name="BezierCurve008"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve008.geometry}
          material={materials['Material.004']}
          position={position.p10}
        />
        <group
        {...(disect ? props.binder.b11() : {})}
          name="Cube002"
          position={position.p11}
          rotation={[0, 0, -Math.PI]}
          scale={-0.163}>
          <mesh
            name="Cube001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials['Material.005']}
          />
          <mesh
            name="Cube001_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_2.geometry}
            material={materials['Material.004']}
          />
        </group>
        <mesh
          name="BezierCurve009"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve009.geometry}
          material={materials['Material.010']}
          position={[0.841, 5.681, -12.35]}
          rotation={[0.012, 0.001, 3.14]}
          scale={-1}
        />
        <mesh
        {...(disect ? props.binder.b12() : {})}
          name="BezierCurve010"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve010.geometry}
          material={materials['Material.004']}
          position={position.p12}
          rotation={[0, 0, -Math.PI]}
          scale={-1}
        />
        <group name="Armature" {...(disect ? props.binder.b13() : {})} position={position.p13}>
          <group name="11535_arm_V3_">
            <skinnedMesh
              name="11535_arm_V3__1"
              geometry={nodes['11535_arm_V3__1'].geometry}
              material={materials._11535_arm_V3_FINALdefault}
              skeleton={nodes['11535_arm_V3__1'].skeleton}
            />
            <skinnedMesh
              name="11535_arm_V3__2"
              geometry={nodes['11535_arm_V3__2'].geometry}
              material={materials['Material.006']}
              skeleton={nodes['11535_arm_V3__2'].skeleton}
            />
          </group>
          <primitive object={nodes.Bone} />
        </group>
        <group name="Armature001" {...(disect ? props.binder.b14() : {})} position={position.p14}>
          <skinnedMesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={materials['Material.011']}
            skeleton={nodes.Cube.skeleton}
          />
          <primitive object={nodes.Bone_1} />
        </group>
        <group name="Armature002" position={[-14.301, 7.398, 9.125]}>
          <primitive object={nodes.Bone_2} />
        </group>
        <mesh
          name="BezierCurve011"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve011.geometry}
          material={materials['Material.005']}
          position={[0.841, 5.681, -12.35]}
          rotation={[0.012, 0.001, 3.14]}
          scale={-1}
        />
        <group name="Armature003" {...(disect ? props.binder.b15() : {})} position={position.p15}>
          <group name="BezierCurve004">
            <skinnedMesh
              name="BezierCurve003_1"
              geometry={nodes.BezierCurve003_1.geometry}
              material={materials['Material.005']}
              skeleton={nodes.BezierCurve003_1.skeleton}
            />
            <skinnedMesh
              name="BezierCurve003_2"
              geometry={nodes.BezierCurve003_2.geometry}
              material={materials['Material.004']}
              skeleton={nodes.BezierCurve003_2.skeleton}
            />
          </group>
          <primitive object={nodes.Bone_3} />
          <primitive object={nodes.neutral_bone} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./mod/scene.gltf')
