import React, { useEffect, Suspense } from 'react'
import Text from '../../components/text/text'

import './works.scss'
import Button from '../../components/button/button'
import useProject from '../../stores/useProject'
import Loader from '../../components/loader/loader'
import Experience from '../../components/experience/experience'


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
                <Text color='typo' tag='h1' size='l' >{ frontProject?.name ?? 'Project' }</Text>
            </div>
            <div className="works__canvas">
                <Suspense fallback={<Loader />}>
                    <Experience />
                </Suspense>
            </div>
            <div className="works__cta">
                <Button isExternal={ true } to={`${ frontProject?.link }`}>
                    <Text>Découvrir</Text>
                </Button>
            </div>
        </section>
    </>
}