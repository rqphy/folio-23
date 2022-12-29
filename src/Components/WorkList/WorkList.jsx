import { MeshBasicMaterial } from 'three'
import { BoxGeometry } from 'three'
import './WorkList.scss'

export default function WorkList()
{
    return <>
        <mesh>
            <boxGeometry />
            <meshBasicMaterial color="red" />
        </mesh>
    </>
}