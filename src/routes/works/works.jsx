import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Text from '../../Components/Text/Text'
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
            <div className='works__canvas'></div>
        </section>
    </>
}