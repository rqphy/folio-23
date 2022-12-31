import './WorkList.scss'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useThree, extend } from '@react-three/fiber'
import { useEffect, useState } from 'react'

extend({ OrbitControls })

// Math.PI * 2 / itemCount

export default function WorkList()
{
    const { camera, gl } = useThree()

    return <>
        <orbitControls args={ [ camera, gl.domElement ] } />


        {
            [...Array(20)].map((item, index) => (
                <mesh 
                    position={[
                        Math.cos((Math.PI * 2 / 20) * index) * 5,
                        0,
                        Math.sin((Math.PI * 2 / 20) * index) * 5,
                    ]}
                    // position={[ 5, 0, 4 ]}
                    // rotation-y={ Math.PI * 0.2 }
                >
                    <boxGeometry args={[ 4, 5, 1 ]} />
                    <meshBasicMaterial color="blue" />
                </mesh>
            ))
        }

    </>
}