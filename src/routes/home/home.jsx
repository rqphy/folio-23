import './home.scss'
import React, { useEffect, useState } from 'react'
import Text from '../../components/text/text'
import Button from '../../components/button/button'
import Footer from '../../components/footer/footer'
import Me from '../../components/me/me'
import Title from '../../components/title/title'

export default function Home()
{
    const fetchData = () =>
    {
        const data = [
            {
                name: 'TOTO1',
                asset: './ferrari.jpg'
            },
            {
                name: 'TOTO2',
                asset: './ferrari.jpg'
            },
            {
                name: 'TOTO3',
                asset: './ferrari.jpg'
            },
            {
                name: 'TOTO4',
                asset: './ferrari.jpg'
            },
            {
                name: 'TOTO5',
                asset: './ferrari.jpg'
            },
            {
                name: 'TOTO6',
                asset: './ferrari.jpg'
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
                <Title />
                <div className="hero__blur"></div>
                <div className="hero__background">
                    {
                        projects.map((el, index) =>
                        {
                            return (
                                <figure
                                    key={el.name}
                                    className="hero__project"
                                >
                                    <img src={el.asset} alt={el.name} />
                                </figure>
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
                    <Me />
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