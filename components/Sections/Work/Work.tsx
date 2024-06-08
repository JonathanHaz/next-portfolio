import { useState } from 'react';
import { motion, useTransform } from 'framer-motion';
import styles from '@/styles/Sections/work.module.css';
import Project from './Project';
import Description from './Description';
import Magnetic from '@/components/Magnetic';
import { useRouter } from 'next/navigation';

interface WorkProps {
  scrollYProgress: any
}

const Work: React.FC<WorkProps> = ({ scrollYProgress }) => {

  const router = useRouter();
  const handleWorkClick = () => {
    router.push('/work');
};

  const projects = [
    {
      title1: "PokeCard",
      src: "pokemon.jpg",
      title2: "Landing Page"
    },
    {
      title1: "Resume Builder",
      src: "resume.jpg",
      title2: "Fullstack App"
    },
    {
      title1: "Movie App",
      src: "movie.jpg",
      title2: "Frontend App"
    },
    {
      title1: "E-commerce",
      src: "ecommerce.jpg",
      title2: "Fullstack App"
    }
  ];

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <motion.div id='work' style={{ scale }} className={styles.container}>
      <div className={styles.about}>
    <Description/>
      </div>
       <main className={styles.main}>
       <div className={styles.gallery}>
         <p style={{color: "#CCCC"}}>Featured Work</p>
         {
          projects.map( project => {
            return <Project project={project}/>
          })
        }
       </div>
            <Magnetic>
            <button onClick={handleWorkClick}>Show More</button>
            </Magnetic>
       </main>
    </motion.div>
  );
}

export default Work;
