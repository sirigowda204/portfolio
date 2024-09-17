import React, { useRef } from 'react'
import {Float, useGLTF} from '@react-three/drei'

const PythonLogo = (props) => {
    const { nodes, materials } = useGLTF('/models/python_programming_language.glb')
    return (
        <Float floatIntensity={1}>
        <group {...props} dispose={null} scale={0.3}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={materials.material}
                position={[-0.002, 0, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={2.501}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={materials['.001']}
                position={[-0.002, 0, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={2.501}
            />
        </group>
        </Float>
    )
}

useGLTF.preload('/models/python_programming_language.glb')
export default PythonLogo;