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
						{Object.keys(projects).map((el, index) => {
							if (index > 5) return
							return (
								<figure
									key={projects[el].name}
									className="hero__project"
								>
									<img
										src={projects[el].poster}
										alt={projects[el].name}
									/>
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
							I'm Raphaël Ferreira, a passionate and creative
							freelance developer who explores tomorrow's
							solutions.
						</p>
					</div>
				</section>
				<section className="about">
					<Text>About</Text>
					<div className="about__content">
						<Me />
						<p className="about__description">
							I am a young developer who enjoys improving my
							skills by creating a multitude of projects that I
							upload to Github. Over the last two years, I trained
							on several frameworks and libraries at
							Wonderstudios, a creative digital agency in Paris.
						</p>
					</div>
				</section>
				<section className="experiences">
					<Text>Experiences</Text>
					<ul className="experiences__content">
						<li className="experiences__item">
							<Text>Atlante</Text>
							<Text>Freelance</Text>
							<Text>2024</Text>
						</li>
						<li className="experiences__item">
							<Text>Wonderstudios</Text>
							<Text>Freelance</Text>
							<Text>2023</Text>
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
					<Text>Degrees</Text>
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
					<Text>Tools</Text>
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
