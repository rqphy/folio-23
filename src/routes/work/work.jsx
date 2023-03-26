import React, { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Work() {
	const { slug } = useParams()

	useEffect(() => {
		document.title = `Project ${slug}`
	}, [])

	return (
		<>
			<section className="project">
				<div className="project__intro"></div>
				<div className="project__content">
					<h1>{slug}</h1>
				</div>
			</section>
		</>
	)
}
