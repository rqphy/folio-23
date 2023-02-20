import * as THREE from 'three'
import { useRef } from 'react'
import { useLoader, useFrame, extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import vertexShader from './vertex.glsl'
import fragmentShader from './fragment.glsl'

const FlagMaterial = shaderMaterial(
    {
        uTime: 0,
        uFrequency: new THREE.Vector2(6, 5),
        uTexture: new THREE.Texture()
    },
    vertexShader,
    fragmentShader
)

extend({ FlagMaterial })

export default function Project({ name, posterURL = '/ferrari.jpg' })
{
    const [flagTexture] = useLoader(THREE.TextureLoader, [
        posterURL
    ])

    const flagMaterial = useRef()

    useFrame(( state, delta ) =>
    {
        flagMaterial.current.uniforms.uTime.value += delta * 2
    })

    return <mesh name={name} position={[ 0, 0, -0.05 ]} rotation={[ 0, Math.PI, 0 ]}>
        <planeGeometry args={[ 4, 5, 32, 32 ]} />
        <flagMaterial
            ref={ flagMaterial }
            side={THREE.DoubleSide}
            uTexture={flagTexture}
        />
    </mesh>
}