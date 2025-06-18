import styles from '@/styles/Sections/description.module.css';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp } from './anim';



export default function Description() {
 
    const phrase = "\"Driven by curiosity, powered by code, and inspired by the endless possibilities of the web.\""
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index}
                         className={styles.mask}>
                            <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}
                            
                            </motion.span>
                            </span>
                    })
                }
                </p>
            </div>
        </div>
    )
}