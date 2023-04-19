import WorkList from "../../components/workList/workList"
import { Canvas } from "@react-three/fiber"
import { ScrollControls } from "@react-three/drei"

export default function Experience() {
	return (
		<Canvas
			camera={{
				fov: 10,
			}}
		>
			<ScrollControls distance={2} pages={6}>
				<WorkList />
			</ScrollControls>
			<directionalLight position={[3, 10, 10]} intensity={1} />
			<directionalLight position={[-3, 10, 10]} intensity={1} />
		</Canvas>
	)
}
