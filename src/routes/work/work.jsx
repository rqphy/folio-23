import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import data from "./../../data/works.json"

export default function Work() {
	const { slug } = useParams()

	const [readme, setReadme] = useState("")

	useEffect(() => {
		async function fetchReadme() {
			const response = await fetch(
				"https://api.github.com/repos/rqphy/TinyHeaven/readme"
			)
			const data = await response.json()
			const readmeResponse = await fetch(data.download_url)
			const readmeText = await readmeResponse.text()
			console.log(readmeText)
			setReadme(readmeText)
		}

		fetchReadme()
		document.title = `Project ${slug}`
	}, [])

	return (
		<>
			<section className="project">
				<div className="project__intro"></div>
				<div className="project__content">
					<figure className="project__hero">
						<img
							src="/posters/wonderstudios.jpg"
							alt=""
							srcSet=""
						/>
					</figure>
					<div className="project__md">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aperiam, aliquid magnam? Illo aperiam aspernatur eos,
						maiores fugiat odit, deleniti alias exercitationem
						tenetur soluta culpa ex, porro adipisci atque?
						Reiciendis, quisquam.
					</div>
				</div>
			</section>
		</>
	)
}
