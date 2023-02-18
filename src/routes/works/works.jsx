import React, { useEffect } from 'react'
import Text from '../../components/text/text'
import WorkList from '../../components/workList/workList'
import { Canvas } from '@react-three/fiber'
import './works.scss'
import Button from '../../components/button/button'
import useProject from '../../stores/useProject'


export default function Works()
{

    const frontProjectName = useProject((state) => state.frontProjectName)

    useEffect(() =>
    {
        document.title = 'Projets'
    }, [])

    return <>
        <section className="works__hero">
            <div className="works__title">
                <Text color='typo' tag='h1' size='l' >{ frontProjectName }</Text>
            </div>
            <div className="works__canvas">
                <Canvas
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
            </div>
            <div className="works__cta">
                <Button to={`/${ frontProjectName }`}>
                    <Text>Découvrir</Text>
                </Button>
            </div>
        </section>
    </>
}