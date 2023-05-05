import { useFrame, useThree } from "@react-three/fiber"
import Project from "../project/project"
import { useScroll, Text } from "@react-three/drei"
import { useRef } from "react"
import works from "../../data/works.json"
import { useNavigate } from "react-router-dom"

const numberOfProject = Object.keys(works).length

export default function Worklist() {
	const data = useScroll()
	const containerRef = useRef()
	const { viewport } = useThree()
	const navigate = useNavigate()

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
				<group
					key={index}
					onClick={() => navigate(`/work/${works[item].slug}`)}
				>
					<Project
						position={[index * 0.6, index * -0.6, 0]}
						index={index}
						poster={
							viewport.aspect > 1
								? works[item].poster_big
								: works[item].poster
						}
					/>
					<Text
						position={[index * 0.6, index * -0.6, 0.5]}
						color="white"
						anchorX="center"
						anchorY="middle"
						scale={viewport.aspect > 1 ? 0.07 : 0.05}
						font="/fonts/fogtwono5/FogtwoNo5.ttf"
					>
						{works[item].name}
					</Text>
				</group>
			))}
		</group>
	)
}
