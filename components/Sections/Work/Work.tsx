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
      title2: "Landing Page",
      href: "https://pokemon-seven-pi.vercel.app"
    },
    {
      title1: "Resume Builder",
      src: "resume.jpg",
      title2: "Fullstack App",
      href: "https://resume-558a0.web.app"
    },
    {
      title1: "Movie App",
      src: "movie.jpg",
      title2: "Frontend App",
      href: "https://jonathanhaz.github.io/MovieProject"

    },
    {
      title1: "Market",
      src: "ecommerce.jpg",
      title2: "Fullstack App",
      href: "https://market-ecru-three.vercel.app"
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
            return <Project key={project.title1} project={project}/>
          })
        }
       </div>
       </main>
    </motion.div>
  );
}

export default Work;
