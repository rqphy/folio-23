import './workList.scss'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useThree, extend, useFrame } from '@react-three/fiber'
import { useMemo, useRef, useEffect, useState } from 'react'
import { PresentationControls } from '@react-three/drei'
import useProject from '../../stores/useProject'

extend({ OrbitControls })

// Math.PI * 2 / itemCount

const numberOfProjects = 8
const circleRadius = 6

export default function WorkList()
{
    const { camera, gl } = useThree()
    const projects = useRef([])
    const raycaster = useMemo(() =>
    {
        return new THREE.Raycaster(
            new THREE.Vector3(0, 5, 6),
            new THREE.Vector3(0, -1, 0)
        )
    }, [])
    const [currentProject, setCurrentProject] = useState(null)
    const setFrontProject = useProject((state) => state.setFrontProject)

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
        if(!currentProject || intersections[0].object.name !== currentProject.object.name)
        {
            setCurrentProject(intersections[0])
            setFrontProject(intersections[0].object.name)
            console.log(intersections[0].object.name)
        }
    })

    return <>
        {/* <orbitControls args={ [ camera, gl.domElement ] } /> */}
        <PresentationControls
            global
            polar={[ 0, 0 ]}
            config={{ mass: 2, tension: 400 }}
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
                        name={`LOLOLOL${index}`}
                    >
                        <boxGeometry args={[ 4, 5, .2 ]} />
                        <meshBasicMaterial color={`hsl(${Math.random() * 360}, 100%, 75%)`} />
                    </mesh>
                ))
            }
        </PresentationControls>

    </>
}