import { useFrame } from "@react-three/fiber"
import Project from "../project/project"
import { useScroll } from "@react-three/drei"
import { useRef } from "react"
import works from "../../data/works.json"

const numberOfProject = Object.keys(works).length

export default function Worklist() {
	const data = useScroll()
	const containerRef = useRef()

	useFrame(() => {
		const currentScrollOffset = data.offset
		containerRef.current.position.x =
			-currentScrollOffset * numberOfProject * 0.45
		containerRef.current.position.y =
			currentScrollOffset * numberOfProject * 0.45
	})

	return (
		<group ref={containerRef}>
			{Object.keys(works).map((item, index) => (
				<Project
					key={index}
					position={[index * 0.8, index * -0.8, 0]}
					index={index}
					poster={works[item].poster}
				/>
			))}
		</group>
	)
}
