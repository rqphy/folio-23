import './me.scss'
import { motion, useScroll, useTransform } from "framer-motion"

export default function Me()
{
    const { scrollYProgress } = useScroll()

    const imgRange = useTransform(scrollYProgress, [0.4, 0.7], [40, 0])

    return <motion.img
        srcSet="./me.jpg"
        alt="that's me in a picture"
        style={{
            y: imgRange,
        }}
    />
}