import styles from '@/styles/Sections/home.module.css';
import { motion, useTransform } from 'framer-motion';
import Parallel from '../Parallel';
import Magnetic from '../Magnetic';
import Image from 'next/image';
import { useEffect } from 'react';

interface HomeProps {
    scrollYProgress: any;
}

const Home: React.FC<HomeProps> = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.1]);

    const scrollToWork = () => {
        const workElement = document.getElementById('work');
        if (workElement) {
            const yOffset = -80; // Adjust this value as needed
            const y = workElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };
   
    return (
        <motion.div style={{ scale }} className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.touchContainer}>
                    <Image src="/arrow.svg" alt="resume" width={80} height={80} />
                    <div className={styles.touchWrapper}>
                        <Magnetic>
                            <button className={styles.touch}><h1>About Me</h1></button>
                        </Magnetic>
                        <Image
                            src="/mouse.svg"
                            alt="resume"
                            width={80}
                            height={80}
                            style={{ cursor: 'pointer' }} // Set cursor style to pointer
                            onClick={scrollToWork} // Scroll to work on click
                        />
                    </div>
                </div>
                <div className={styles.text}>
                    <h2>Creative</h2>
                    <h1>Fullstack Developer</h1>
                    <div className={styles.resumeWrapper}>
                        <button className={styles.resumeBTN}>Resume <Image src="/cv.svg" alt="resume" width={20} height={15} /></button>
                    </div>
                </div>
            </div>
            <Parallel />
        </motion.div>
    );
};

export default Home;
