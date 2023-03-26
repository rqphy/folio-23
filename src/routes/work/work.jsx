import React, { useEffect } from "react"
import { useParams } from "react-router-dom"

import "./work.scss"

export default function Work() {
	const { slug } = useParams()

	useEffect(() => {
		document.title = `Project ${slug}`
	}, [])

	return (
		<>
			<section className="project">
				<h1>{slug}</h1>
			</section>
		</>
	)
}
