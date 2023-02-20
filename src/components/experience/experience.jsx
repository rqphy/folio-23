import WorkList from '../../components/workList/workList'
import { Canvas } from '@react-three/fiber'

export default function Experience()
{
    return <Canvas
        camera={ {
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [ 0, 0, 15 ]
        } }
    >
        <WorkList />
        <directionalLight position={ [ 3, 10, 10 ] } intensity={ 1 } />
        <directionalLight position={ [ -3, 10, 10 ] } intensity={ 1 } />
    </Canvas>
}