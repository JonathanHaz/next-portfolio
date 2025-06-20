'use client'
import styles from '@/styles/Sections/project.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProjectProps {
  project: {
    title1: string;
    src: string;
    title2: string;
    href: string;
    alt: string;
  };
}

const anim = {
    initial: {width: 0},
    open: {width: "10vw", transition: {duration: 1, ease: [0.23, 1, 0.32, 1]}},
    closed: {width: 0, transition: {duration: 1, ease: [0.23, 1, 0.32, 1]}}
}

const Project: React.FC<ProjectProps> = ({project}) => {

    const [isActive, setIsActive] = useState(false);

    const { title1, title2, src, alt } = project;
    return (
        <div  onClick={() => window.open(project.href)} onMouseEnter={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}} className={styles.project}>
            <p>{title1}</p>
            <motion.div  variants={anim} animate={isActive ? "open" : "closed"} className={styles.imgContainer}>
                <img src={src} alt={alt}></img>
            </motion.div>
            <p>{title2}</p>
        </div>
    )
}

export default Project;