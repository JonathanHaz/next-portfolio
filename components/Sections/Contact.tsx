import styles from '@/styles/Sections/contact.module.css'
import Image from 'next/image'
import {motion, useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react'
import Magnetic from '../Magnetic'
import Stairs from '../Stairs/Stairs'

const Contact: React.FC = () => {

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })


    const handleWhatsAppClick = () => {
        window.open('https://wa.me/972586775225', '_blank');
    };

    const x = useTransform(scrollYProgress, [0, 1], [200, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [50, 0])
    const y = useTransform(scrollYProgress, [0, 1], [-100, 0])


    return (
        <Stairs backgroundColor="white">
        <div ref={container} className={styles.container}>
            <div className={styles.wrapper}>
                    <Image src="/profilePic.png"  alt="resume" width={80} height={80} />
                    <h1>Lets work together!</h1>
            </div>
            <div className={styles.line}>
                <div className={styles.contact}>
                    <motion.div style={{rotate, scale:2, y,x}}>
                    <Image src="/arrow2.svg" alt="resume" width={40} height={40} />
                    </motion.div>
                    <motion.div style={{x}}>
                        <Magnetic>
                <button>Contact Me</button>
                </Magnetic>
                    </motion.div>
                </div>
            </div>
            <div className={styles.buttons}>
                <button className={styles.mail}><a href="mailto:yonatanhazan1337@gmail.com">yonatanhazan1337@gmail.com</a></button>
                <button onClick={handleWhatsAppClick} className={styles.phone}>+972586775225</button>
            </div>
        </div>
        </Stairs>
    )
}

export default Contact