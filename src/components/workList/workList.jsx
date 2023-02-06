import './workList.scss'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef, useEffect } from 'react'
import { Image, PresentationControls } from '@react-three/drei'
import useProject from '../../stores/useProject'

const numberOfProjects = 8
const circleRadius = 6

export default function WorkList()
{
    const projects = useRef([])
    const raycaster = useMemo(() =>
    {
        return new THREE.Raycaster(
            new THREE.Vector3(0, 5, 6),
            new THREE.Vector3(0, -1, 0)
        )
    }, [])
    const setFrontProjectName = useProject((state) => state.setFrontProjectName)
    const frontProjectName = useProject((state) => state.frontProjectName)

    useEffect(() =>
    {
        for(const project of projects.current)
        {
            project.lookAt(0, 0, 0)
        }
    }, [])

    useFrame(() =>
    {
        const intersections = raycaster.intersectObjects(projects.current)
        if(!intersections[0]) return
        if(!frontProjectName || intersections[0].object.name !== frontProjectName)
        {
            setFrontProjectName(intersections[0].object.name)
        }
    })

    return <>
        <PresentationControls
            global
            polar={[ 0, 0 ]}
            config={{ mass: 2, tension: 400 }}
        >
            {
                [...Array(numberOfProjects)].map((item, index) => (
                    <group
                        ref={ (el) => projects.current[index] = el }
                        position={[
                            Math.cos((Math.PI * 2 / numberOfProjects) * index) * circleRadius,
                            0,
                            Math.sin((Math.PI * 2 / numberOfProjects) * index) * circleRadius,
                        ]}
                        key={ index }
                    >
                        <mesh name={`LOLOLOL${index}`} position={[ 0, 0, 0.05 ]}>
                            <boxGeometry args={[ 4.3, 5.3, .1 ]} />
                            <meshStandardMaterial color='#403027' />
                        </mesh>
                        {/* <mesh name={`LOLOLOL${index}`}>
                            <boxGeometry args={[ 4.3, 5.3, .01 ]} />
                            <meshBasicMaterial color='#ffffff' />
                        </mesh> */}
                        <Image
                            url="/ferrari.jpg"
                            scale={[ 4, 5, .1 ]}
                            rotation={[ 0, Math.PI, 0 ]}
                            transparent={true}
                            position={[ 0, 0, -0.01 ]}
                        />
                    </group>
                ))
            }
        </PresentationControls>

    </>
}