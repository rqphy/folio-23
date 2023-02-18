import * as THREE from 'three'
import vertexShader from './vertex.glsl'
import fragmentShader from './fragment.glsl'
import { useLoader, useFrame, extend } from '@react-three/fiber'
import { useRef } from 'react'
import { shaderMaterial } from '@react-three/drei'

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

    return <mesh name={name} position={[ 0, 0, -0.05 ]}>
        <planeGeometry args={[ 4, 5, 32, 32 ]} />
        <flagMaterial
            ref={ flagMaterial }
            side={THREE.DoubleSide}
            uTexture={flagTexture}
        />
        {/* <shaderMaterial
            ref={ flagMaterial }
            fragmentShader={ fragmentShader }
            vertexShader={ vertexShader }
            side={THREE.DoubleSide}
            uniforms={{
                uFrequency: { value: new THREE.Vector2(6, 12) },
                uTime: { value: 0 },
                uTexture: { value: flagTexture }
            }}
        /> */}
    </mesh>
}