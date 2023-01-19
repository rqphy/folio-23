import React, { useEffect } from 'react'
import Text from '../../components/text/text'
import Button from '../../components/button/button'
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
            <section className="title">
                <Button to="/works">
                    <Text>Projets</Text>
                </Button>
                <div className='title__content'>
                    <p className='title__pitch'>Je suis Raphaël Ferreira, un développeur front de 21 ans diplômé d'un Bachelor web à Hetic. Je réalise une multitude de projets que je mets en ligne sur github.</p>
                </div>
            </section>
            <section className='about'>
                <Text>À Propos</Text>
                <p className='about__description'>
                    Je suis Raphaël Ferreira, un développeur front de 21 ans diplômé d'un Bachelor web à Hetic. Je réalise une multitude de projets que je mets en ligne sur github.
                    Je suis Raphaël Ferreira, un développeur front de 21 ans diplômé d'un Bachelor web à Hetic. Je réalise une multitude de projets que je mets en ligne sur github.
                    Je suis Raphaël Ferreira, un développeur front de 21 ans diplômé d'un Bachelor web à Hetic. Je réalise une multitude de projets que je mets en ligne sur github.
                </p>
            </section>
            <section className='experiences'>
                <Text>Experiences</Text>
                <ul className="experiences__content">
                    <li className='experiences__item'>
                        <Text>Lactel</Text>
                        <Text>@Wonderstudios</Text>
                        <Text>2021</Text>
                    </li>
                    <li className='experiences__item'>
                        <Text>Harmonie Mutuelle</Text>
                        <Text>@Wonderstudios</Text>
                        <Text>2021</Text>
                    </li>
                    <li className='experiences__item'>
                        <Text>Addiction Agency</Text>
                        <Text>@Wonderstudios</Text>
                        <Text>2022</Text>
                    </li>
                </ul>
            </section>
            <section className="certificates">
                <Text>Diplômes</Text>
                <ul className='certificates__content'>
                    <li className="certificates__item">
                        <Text>Three.js Journey</Text>
                        <Text>Bruno Simon</Text>
                        <Text>2023</Text>
                    </li>
                    <li className="certificates__item">
                        <Text>Web developper</Text>
                        <Text>Hetic</Text>
                        <Text>2019-2022</Text>
                    </li>
                </ul>
            </section>
            <section className="contact">
                <Text>Contact</Text>
            </section>

        </main>
    </>
}