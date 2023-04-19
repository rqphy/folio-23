import { useRef } from "react"
import * as THREE from "three"
import { extend, useFrame } from "@react-three/fiber"
import WaveShaderMaterial from "../../shaders/wave/wave"
import { useLoader } from "@react-three/fiber"

extend({ WaveShaderMaterial })

export default function Project({ position, index, poster = "/me.jpg" }) {
	const shaderRef = useRef()

	useFrame(({ clock }) => {
		// get uTime for shader
		shaderRef.current.uTime = clock.getElapsedTime()
	})
	const [image] = useLoader(THREE.TextureLoader, [poster])

	return (
		<mesh position={position}>
			<planeGeometry args={[0.4, 0.6, 16, 16]} />
			<waveShaderMaterial
				ref={shaderRef}
				uColor={"hotpink"}
				uTexture={image}
				uIndex={index}
				toneMapped={false}
			/>
		</mesh>
	)
}
