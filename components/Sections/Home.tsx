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
            const yOffset = -80; 
            const y = workElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const redirectToResume = () => {
        window.open('https://www.dropbox.com/scl/fi/f587ix1gguloxglakk8e3/Jonathan-Hazan-CV-English.pdf?rlkey=xs7dpx5fy72xxv7trvsoas415&st=tk5tao2j&dl=0', '_blank');
    };
   
    return (

        <motion.div style={{ scale }} className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.touchContainer}>
                    <Image src="/arrow.svg" alt="arrow" width={80} height={80} />
                    <div className={styles.touchWrapper}>
                        <Magnetic>
                            <button className={styles.touch}><h1>About Me</h1></button>
                        </Magnetic>
                        <Image
                            src="/mouse.svg"
                            alt="mousedown"
                            width={80}
                            height={80}
                            style={{ cursor: 'pointer' }} 
                            onClick={scrollToWork} 
                        />
                    </div>
                </div>
                <div className={styles.text}>
                    <h1>Creative</h1>
                    <h1>Fullstack Developer</h1>
                    <div className={styles.resumeWrapper}>
                        <button onClick={redirectToResume} className={styles.resumeBTN}>Resume</button>
                    </div>
                </div>
            </div>
            <Parallel />
        </motion.div>
    );
};

export default Home;
