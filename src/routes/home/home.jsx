import React, { useEffect, useState } from "react"
import Text from "../../components/text/text"
import Footer from "../../components/footer/footer"
import Me from "../../components/me/me"
import Title from "../../components/title/title"
import Cta from "../../components/cta/cta"
import works from "../../data/works.json"

export default function Home() {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		document.title = "Raphaël Ferreira"

		setProjects(works)
	}, [])

	return (
		<>
			<section className="hero">
				<div className="hero__intro">
					<Title />
					<div className="hero__blur"></div>
					<div className="hero__background">
						{projects.map((el, index) => {
							if (index > 5) return
							return (
								<figure key={el.name} className="hero__project">
									<img src={el.poster_mini} alt={el.name} />
								</figure>
							)
						})}
					</div>
				</div>
			</section>
			<main className="main">
				<section className="title">
					<Cta />
					<div className="title__content">
						<p className="title__pitch">
							Je suis Raphaël Ferreira, un développeur freelance
							passioné et créatif qui explore les solutions de
							demain.
						</p>
					</div>
				</section>
				<section className="about">
					<Text>À Propos</Text>
					<div className="about__content">
						<Me />
						<p className="about__description">
							Je suis un jeune développeur qui aime enrichir ses
							compétences en créant une multitude de projets que
							je mets en ligne sur github. Lors des 2 dernières
							années, je me suis formé sur plusieurs framework et
							librairies chez Wonderstudios, une agence digitale
							créative à Paris.
						</p>
					</div>
				</section>
				<section className="experiences">
					<Text>Experiences</Text>
					<ul className="experiences__content">
						<li className="experiences__item">
							<Text>JPG</Text>
							<Text>@Wonderstudios</Text>
							<Text>2022</Text>
						</li>
						<li className="experiences__item">
							<Text>Addiction Agency</Text>
							<Text>@Wonderstudios</Text>
							<Text>2022</Text>
						</li>
						<li className="experiences__item">
							<Text>AEMA</Text>
							<Text>@Wonderstudios</Text>
							<Text>2022</Text>
						</li>
						<li className="experiences__item">
							<Text>Lactel</Text>
							<Text>@Wonderstudios</Text>
							<Text>2021</Text>
						</li>
						<li className="experiences__item">
							<Text>Harmonie Mutuelle</Text>
							<Text>@Wonderstudios</Text>
							<Text>2021</Text>
						</li>
					</ul>
				</section>
				<section className="certificates">
					<Text>Diplômes</Text>
					<ul className="certificates__content">
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
					<div className="tools__display">
						<figure>
							<img src="/logo.png" alt="raphael ferreira logo" />
						</figure>
					</div>
				</section>
				<Footer />
			</main>
		</>
	)
}
