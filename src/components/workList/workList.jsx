import { useFrame } from "@react-three/fiber"
import Project from "../project/project"
import { useScroll, Text } from "@react-three/drei"
import { useRef } from "react"
import works from "../../data/works.json"

const numberOfProject = Object.keys(works).length

export default function Worklist() {
	const data = useScroll()
	const containerRef = useRef()

	useFrame(() => {
		const currentScrollOffset = data.offset
		containerRef.current.position.x =
			-currentScrollOffset * numberOfProject * 0.525
		containerRef.current.position.y =
			currentScrollOffset * numberOfProject * 0.525
	})

	return (
		<group ref={containerRef}>
			{Object.keys(works).map((item, index) => (
				<group key={index}>
					<Project
						position={[index * 0.6, index * -0.6, 0]}
						index={index}
						poster={works[item].poster}
					/>
					<Text
						position={[index * 0.6, index * -0.6, 0.5]}
						color="black"
						anchorX="center"
						anchorY="middle"
						scale={0.1}
						font="/fonts/fogtwono5/FogtwoNo5.ttf"
					>
						hello world!
					</Text>
				</group>
			))}
		</group>
	)
}
