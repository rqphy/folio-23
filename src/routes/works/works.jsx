import React, { useEffect } from 'react'
import Text from '../../Components/text/text'
import WorkList from '../../Components/workList/workList'
import { Canvas } from '@react-three/fiber'
import './works.scss'
import Button from '../../Components/button/button'
import useProject from '../../stores/useProject'


export default function Works()
{

    const frontProject = useProject((state) => state.frontProject)

    useEffect(() =>
    {
        document.title = 'Projets'
    }, [])

    return <>
        <section className="works__hero">
            <div className="works__title">
                <Text tag='h1' size='l' >Projets</Text>
            </div>
            <div className="works__canvas">
                <Canvas
                    camera={ {
                        fov: 45,
                        near: 0.1,
                        far: 2000,
                        // position: [ 0, 20, 0 ]
                        position: [ 0, 0, 15 ]
                    } }
                >
                    {/* <color args={[ '#00ff00' ]} attach='background' /> */}
                    <WorkList />
                </Canvas>
            </div>
            <div className="works__cta">
                <Button>
                    <Text>Découvrir { frontProject }</Text>
                </Button>
            </div>
        </section>
    </>
}