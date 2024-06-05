// Work.tsx
import { useState } from 'react';
import { motion, useTransform } from 'framer-motion';
import styles from '@/styles/Sections/work.module.css';
import Modal from './Modal';
import Project from './Project';

interface WorkProps {
  scrollYProgress: any
}

const Work: React.FC<WorkProps> = ({ scrollYProgress }) => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  const projects = [
    {
      title: "C2 Montreal",
      src: "resume.png",
      color: "#000000"
    },
    {
      title: "Office Studio",
      src: "movie.png",
      color: "#CCCCC"
    },
    {
      title: "Locomotive",
      src: "resume.png",
      color: "#EFE8D3"
    },
    {
      title: "Silencio",
      src: "movie.png",
      color: "#706D63"
    }
  ];

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <motion.div id='work' style={{ scale }} className={styles.container}>
      <div>
        {projects.map((project, index) => (
          <Project key={index} index={index} title={project.title} setModal={setModal} />
        ))}
      </div>
      <Modal modal={modal} projects={projects} />
    </motion.div>
  );
}

export default Work;
