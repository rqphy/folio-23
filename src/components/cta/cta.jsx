import Button from "../../components/button/button"
import Text from "../../components/text/text"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Cta() {
	const { scrollYProgress } = useScroll()

	const titleRange = useTransform(scrollYProgress, [0.93, 0.95], [1, 0])

	return (
		<motion.div
			style={{
				opacity: titleRange,
			}}
		>
			<Button to="/works">
				<Text>Works</Text>
			</Button>
		</motion.div>
	)
}
