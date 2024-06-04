import styles from '@/styles/Sections/home.module.css'
import { motion, useTransform } from "framer-motion";
import Parallel from '../Parallel';

interface HomeProps {
    scrollYProgress: any
}

const Home: React.FC<HomeProps> = ({scrollYProgress}) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.1]);
    return (
        <motion.div style={{scale, }} className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.text}>
                <h2>Creative</h2>
                <h1>Fullstack Developer</h1>
                </div>
            </div>
            <Parallel/>
        </motion.div>
    )
}

export default Home