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
                    <Image 
                        src="/arrow.svg" 
                        alt="Navigation arrow pointing to Jonathan Hazan's about section" 
                        width={80} 
                        height={80} 
                    />
                    <div className={styles.touchWrapper}>
                        <Magnetic>
                            <button onClick={handleAboutClick} className={styles.touch}><h1>About Me</h1></button>
                        </Magnetic>
                        <Image
                            src="/mouse.svg"
                            alt="Scroll down to view Jonathan Hazan's portfolio work"
                            width={80}
                            height={80}
                            style={{ cursor: 'pointer' }} 
                            onClick={scrollToWork} 
                        />
                    </div>
                </div>
                <div className={styles.text}>
                    <h1>
                        {"Developer & Designer".split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                style={{ display: "inline-block" }}
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 0.5,
                                    repeat: Infinity,
                                    repeatDelay: 8,
                                    delay: index * 0.05,
                                    ease: "easeInOut"
                                }}
                            >
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                    </h1>
                </div>
            </motion.div>
            <Parallel />
        </div>
    );
};

export default Home;
