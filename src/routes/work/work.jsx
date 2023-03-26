import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import data from "./../../data/works.json"
import ReactMarkdown from "react-markdown"

export default function Work() {
	const { slug } = useParams()

	const [readme, setReadme] = useState("")

	useEffect(() => {
		async function fetchReadme() {
			const response = await fetch(
				`https://api.github.com/repos/rqphy/${slug}/readme`
			)
			const data = await response.json()
			const readmeResponse = await fetch(data.download_url)
			const readmeText = await readmeResponse.text()
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
						<img src={data[slug].poster} alt="" srcSet="" />
					</figure>
					<div className="project__links">
						<a
							className="project__cta"
							href={data[slug].github}
							target="_blank"
							rel="noopener noreferrer"
						>
							See code
						</a>
						<a
							className="project__cta"
							href={data[slug].live}
							target="_blank"
							rel="noopener noreferrer"
						>
							Visit website
						</a>
					</div>
					<div className="project__md">
						<ReactMarkdown>{readme}</ReactMarkdown>
					</div>
				</div>
			</section>
		</>
	)
}
