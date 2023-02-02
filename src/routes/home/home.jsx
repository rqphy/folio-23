import React, { useEffect, useState } from 'react'
import Text from '../../components/text/text'
import Button from '../../components/button/button'
import './home.scss'
import Footer from '../../components/footer/footer'

export default function Home()
{
    const fetchData = () =>
    {
        const data = [
            {
                name: 'TOTO1'
            },
            {
                name: 'TOTO2'
            },
            {
                name: 'TOTO3'
            },
            {
                name: 'TOTO4'
            },
            {
                name: 'TOTO5'
            },
            {
                name: 'TOTO6'
            },
        ]
        return data
    }

    const [projects, setProjects] = useState([])

    useEffect(() =>
    {
        document.title = 'Raphaël Ferreira'

        setProjects(fetchData)
    }, [])

    return <>
        <section className="hero">
            <div className='hero__intro'>
                <div className="hero__title">
                    <Text typo='secondary' size='xl'>Bienvenue,</Text>
                </div>
                <div className="hero__background">
                    {
                        projects.map((el, index) =>
                        {
                            return (
                                <div
                                    key={el.name}
                                    className="hero__project"
                                >
                                    {el.name}
                                </div>
                            )
                        })
                    }
                </div>
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
                <div className="about__content">
                    <img srcSet="./me.jpg" alt="that's me in a picture" />
                    <p className='about__description'>
                        Je suis Raphaël Ferreira, un développeur front de 21 ans diplômé d'un Bachelor web à Hetic. Je réalise une multitude de projets que je mets en ligne sur github.
                        Je suis Raphaël Ferreira, un développeur front de 21 ans diplômé d'un Bachelor web à Hetic. Je réalise une multitude de projets que je mets en ligne sur github.
                    </p>
                </div>
            </section>
            <section className='experiences'>
                <Text>Experiences</Text>
                <ul className="experiences__content">
                    <li className='experiences__item'>
                        <Text>JPG</Text>
                        <Text>@Wonderstudios</Text>
                        <Text>2022</Text>
                    </li>
                    <li className='experiences__item'>
                        <Text>Addiction Agency</Text>
                        <Text>@Wonderstudios</Text>
                        <Text>2022</Text>
                    </li>
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
            <section className="tools">
                <Text>Outils</Text>
                <div className='tools__display'>
                    <figure>
                        <img src="/logo.png" alt="raphael ferreira logo" />
                    </figure>
                </div>
            </section>
            <Footer />
        </main>
    </>
}