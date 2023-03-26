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
					<figure className="project__hero"></figure>
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
