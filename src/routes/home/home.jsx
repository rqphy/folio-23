import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Link } from 'react-router-dom'
import Text from '../../Components/Text/Text'
import './home.scss'

export default function Home()
{
    useEffect(() =>
    {
        document.title = 'Raphaël Ferreira'
    }, [])

    return <>
        <section className="hero">
            <div className='hero__intro'>
                <Text typo='secondary' size='xl'>Bienvenue,</Text>
            </div>
        </section>
        <main className='main'>
            <section className="about">
                <Link to="/works" className='about__works'>
                    <Text>Projets</Text>
                </Link>
                <div className='about__content'>
                </div>
            </section>
        </main>
    </>
}