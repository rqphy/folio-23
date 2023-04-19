import { useRef } from "react"
import * as THREE from "three"
import { extend, useFrame, useThree } from "@react-three/fiber"
import WaveShaderMaterial from "../../shaders/wave/wave"
import { useLoader } from "@react-three/fiber"

extend({ WaveShaderMaterial })

export default function Project({ position, index, poster = "/me.jpg" }) {
	const shaderRef = useRef()
	const { viewport } = useThree()

	useFrame(({ clock }) => {
		// get uTime for shader
		shaderRef.current.uTime = clock.getElapsedTime()
	})
	const [image] = useLoader(THREE.TextureLoader, [poster])

	return (
		<mesh position={position}>
			<planeGeometry
				args={[viewport.width * 0.8, viewport.height * 0.8, 16, 16]}
			/>
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
