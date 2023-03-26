import { motion, useScroll, useTransform } from "framer-motion"
import Text from "../../components/text/text"

export default function Title() {
	const { scrollYProgress } = useScroll()

	const titleRange = useTransform(scrollYProgress, [0, 0.2], [1, 0])

	return (
		<motion.div
			className="hero__title"
			style={{
				opacity: titleRange,
			}}
		>
			<Text typo="secondary" size="xl">
				Bienvenue,
			</Text>
		</motion.div>
	)
}
