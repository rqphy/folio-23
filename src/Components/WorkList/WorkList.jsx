import './WorkList.scss'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useThree, extend } from '@react-three/fiber'

extend({ OrbitControls })

export default function WorkList()
{
    const { camera, gl } = useThree()


    return <>
        <orbitControls args={ [ camera, gl.domElement ] } />

        <mesh 
            position={[
                Math.cos(Math.PI * 0.5) * 5,
                5,
                Math.sin(Math.PI * 0.5) * 5,
            ]}
            rotation-y={ Math.PI * 0.5 }
        >
            <boxGeometry args={[ 4, 5, 1 ]} />
            <meshBasicMaterial color="blue" />
        </mesh>
        <mesh position={[ 0, 0, 5 ]}>
            <boxGeometry args={[ 4, 5, 1 ]} />
            <meshBasicMaterial color="red" />
        </mesh>
        <mesh position={[ 0, 0, 5 ]}>
            <boxGeometry args={[ 4, 5, 1 ]} />
            <meshBasicMaterial color="green" />
        </mesh>
        <mesh position={[ 0, 0, 5 ]}>
            <boxGeometry args={[ 4, 5, 1 ]} />
            <meshBasicMaterial color="pruple" />
        </mesh>
    </>
}