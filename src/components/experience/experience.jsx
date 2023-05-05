import WorkList from "../../components/workList/workList"
import Intro from "../../components/intro/intro"
import { Canvas } from "@react-three/fiber"
import { ScrollControls } from "@react-three/drei"

export default function Experience() {
	return (
		<Canvas
			camera={{
				fov: 10,
				position: [0, 0, 6],
			}}
		>
			<ScrollControls distance={2} pages={4}>
				<WorkList />
			</ScrollControls>
			<Intro />
			<directionalLight position={[3, 10, 10]} intensity={1} />
			<directionalLight position={[-3, 10, 10]} intensity={1} />
		</Canvas>
	)
}
