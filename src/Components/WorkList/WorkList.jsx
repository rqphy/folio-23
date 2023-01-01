import './WorkList.scss'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useThree, extend } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import { PresentationControls } from '@react-three/drei'

extend({ OrbitControls })

// Math.PI * 2 / itemCount

const numberOfProjects = 8
const circleRadius = 6

export default function WorkList()
{
    const { camera, gl } = useThree()
    const projects = useRef([])

    useEffect(() =>
    {
        for(const project of projects.current)
        {
            project.lookAt(0, 0, 0)
        } 
    }, [])

    return <>
        {/* <orbitControls args={ [ camera, gl.domElement ] } /> */}
        <PresentationControls
            global
            // rotation={[ 0.13, 0.1, 0 ]}
            polar={[ 0, 0 ]}
            // azimuth={[ -1, 0.75 ]}
            // config={{ mass: 2, tension: 400 }}
            // snap={{ mass: 4, tension: 400 }}
        >

            {
                [...Array(numberOfProjects)].map((item, index) => (
                    <mesh
                        ref={ (el) => projects.current[index] = el }
                        position={[
                            Math.cos((Math.PI * 2 / numberOfProjects) * index) * circleRadius,
                            0,
                            Math.sin((Math.PI * 2 / numberOfProjects) * index) * circleRadius,
                        ]}
                        key={ index }
                    >
                        <boxGeometry args={[ 4, 5, 1 ]} />
                        <meshBasicMaterial color={`hsl(${Math.random() * 360}, 100%, 75%)`} />
                    </mesh>
                ))
            }
        </PresentationControls>

    </>
}