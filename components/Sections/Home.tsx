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
            <Parallel/>
            <h1>CONTENT</h1>
        </motion.div>
    )
}

export default Home