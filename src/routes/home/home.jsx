import React, { useEffect } from 'react'
import Text from '../../Components/text/text'
import Button from '../../Components/button/button'
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
                <Button to="/works">
                    <Text>Projets</Text>
                </Button>
                <div className='about__content'>
                    <p className='about__pitch'>Je suis Raphaël Ferreira, un développeur front de 21 ans diplômé d'un Bachelor web à Hetic. Je réalise une multitude de projets que je mets en ligne sur github.</p>
                </div>
            </section>

        </main>
    </>
}