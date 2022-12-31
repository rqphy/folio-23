import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Text from '../../Components/Text/Text'
import WorkList from '../../Components/WorkList/WorkList'
import { Canvas } from '@react-three/fiber'
import './works.scss'


export default function Works()
{

    useEffect(() =>
    {
        document.title = 'Projets'
    }, [])

    return <>
        <section className="works__hero">
            <div className="works__title">
                <Text tag='h1' size='l' >Projets</Text>
            </div>
            <Canvas
                camera={ {
                    fov: 45,
                    near: 0.1,
                    far: 2000,
                    // position: [ 0, 20, 0 ]
                    position: [ 0, 0, 15 ]
                } }
                className='works__canvas'
            >
                <WorkList />
            </Canvas>
        </section>
    </>
}