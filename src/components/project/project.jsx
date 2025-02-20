import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { extend, useFrame, useThree } from "@react-three/fiber"
import WaveShaderMaterial from "../../shaders/wave/wave"
import { useLoader } from "@react-three/fiber"

extend({ WaveShaderMaterial })

export default function Project({ position, index, poster = "/me.jpg" }) {
	const shaderRef = useRef()
	const { viewport } = useThree()
	const isHovered = useRef(false)

	const handleMouseOver = () => {
		isHovered.current = true
		document.body.style.cursor = "pointer"
	}

	const handleMouseLeave = () => {
		isHovered.current = false
		document.body.style.cursor = "auto"
	}

	useFrame(({ clock }) => {
		// get uTime for shader
		shaderRef.current.uGrayscale = !isHovered.current
		shaderRef.current.uTime += 0.005
	})
	const [image] = useLoader(THREE.TextureLoader, [poster])

	return (
		<mesh
			position={position}
			onPointerOver={handleMouseOver}
			onPointerLeave={handleMouseLeave}
		>
			<planeGeometry
				args={[
					viewport.aspect > 1 ? 0.8 : 0.4,
					viewport.aspect > 1 ? 0.5 : 0.6,
					16,
					16,
				]}
			/>
			<waveShaderMaterial
				ref={shaderRef}
				uTexture={image}
				uIndex={index}
				toneMapped={false}
				// wireframe={true}
			/>
		</mesh>
	)
}
