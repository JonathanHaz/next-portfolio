import styles from '@/styles/Sections/skills.module.css'
import { motion, useTransform } from "framer-motion";

interface HomeProps {
    scrollYProgress: any
}


const Skills: React.FC<HomeProps> = ({scrollYProgress}) => {

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    return (
        <motion.div style={{scale,}} className={styles.container}>

        </motion.div>
    )
}

export default Skills