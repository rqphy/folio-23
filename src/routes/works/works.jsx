import React, { useEffect, Suspense } from "react"
import Text from "../../components/text/text"
import Button from "../../components/button/button"
import useProject from "../../stores/useProject"
import Loader from "../../components/loader/loader"
import Experience from "../../components/experience/experience"

export default function Works() {
	const frontProject = useProject((state) => state.frontProject)

	useEffect(() => {
		document.title = "Projets"
	}, [])

	return (
		<>
			<section className="works__hero">
				<div className="works__canvas">
					<Suspense fallback={<Loader />}>
						<Experience />
					</Suspense>
				</div>
			</section>
		</>
	)
}
