import styles from '@/styles/Sections/home.module.css';
import Parallel from '../Parallel';
import Magnetic from '../Magnetic';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation'
import Rounded from '../Rounded';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Create parallax transforms for different layers
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

    const router = useRouter();
    const handleAboutClick = () => {
        router.push('/about');
    };

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
        <div ref={containerRef} className={styles.container}>
            {/* Parallax Background Layer */}
            <motion.div 
                className={styles.backgroundLayer}
                style={{ y: backgroundY }}
            />
            
            {/* Parallax Content */}
            <motion.div 
                className={styles.hero}
                style={{ y: contentY }}
            >
                <div className={styles.touchContainer}>
                    <Image src="/arrow.svg" alt="arrow" width={80} height={80} />
                    <div className={styles.touchWrapper}>
                        <Magnetic>
                            <button onClick={handleAboutClick} className={styles.touch}><h1>About Me</h1></button>
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
                        <Rounded onClick={redirectToResume}>
                            <p>Resume</p>
                        </Rounded>
                    </div>
                </div>
            </motion.div>
            <Parallel />
        </div>
    );
};

export default Home;
