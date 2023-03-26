import * as THREE from "three"
import { useFrame } from "@react-three/fiber"
import { useMemo, useRef, useEffect } from "react"
import { PresentationControls } from "@react-three/drei"
import useProject from "../../stores/useProject"
import Project from "../project/project"
import works from "../../data/works.json"

const numberOfProjects = Object.keys(works).length
const circleRadius = 6

export default function WorkList() {
	const projects = useRef([])
	const raycaster = useMemo(() => {
		return new THREE.Raycaster(
			new THREE.Vector3(0, 5, 6),
			new THREE.Vector3(0, -1, 0)
		)
	}, [])
	const setFrontProject = useProject((state) => state.setFrontProject)
	const frontProject = useProject((state) => state.frontProject)

	useEffect(() => {
		for (const project of projects.current) {
			project.lookAt(0, 0, 0)
		}
	}, [])

	useFrame(() => {
		const intersections = raycaster.intersectObjects(projects.current)
		if (!intersections[0]) return

		if (
			!frontProject ||
			intersections[0].object.work.name !== frontProject.name
		) {
			setFrontProject(intersections[0].object.work)
		}
	})

	return (
		<>
			<PresentationControls
				global
				polar={[0, 0]}
				config={{ mass: 2, tension: 400 }}
			>
				{Object.keys(works).map((item, index) => (
					<group
						ref={(el) => (projects.current[index] = el)}
						position={[
							Math.cos(
								((Math.PI * 2) / numberOfProjects) * index
							) * circleRadius,
							0,
							Math.sin(
								((Math.PI * 2) / numberOfProjects) * index
							) * circleRadius,
						]}
						key={index}
					>
						<mesh work={works[item]} position={[0, 0, 0.05]}>
							<boxGeometry args={[4.3, 5.3, 0.1]} />
							<meshBasicMaterial transparent opacity={0} />
						</mesh>
						<Project
							name={works[item].name}
							posterURL={works[item].poster}
						/>
					</group>
				))}
			</PresentationControls>
		</>
	)
}
