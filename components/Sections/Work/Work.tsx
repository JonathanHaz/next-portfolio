import { useState } from 'react';
import styles from '@/styles/Sections/work.module.css';
import Project from './Project';
import Description from './Description';
import Magnetic from '@/components/Magnetic';
import { useRouter } from 'next/navigation';

const Work: React.FC = () => {

  const router = useRouter();
  const handleWorkClick = () => {
    router.push('/work');
};

  const projects = [
    {
      title1: "Voltride",
      src: "voltridel.png",
      title2: "Fullstack App",
      href: "https://voltride-gules.vercel.app/",
      alt: "Voltride electric vehicle platform website screenshot"
    },
    {
      title1: "PokeCard",
      src: "pokemon.jpg",
      title2: "Landing Page",
      href: "https://pokemon-seven-pi.vercel.app",
      alt: "Pokemon card collection landing page screenshot"
    },
    {
      title1: "Movie App",
      src: "movie.jpg",
      title2: "Frontend App",
      href: "https://jonathanhaz.github.io/MovieProject",
      alt: "Movie database application interface screenshot"

    },
    {
      title1: "Market",
      src: "ecommerce.jpg",
      title2: "Fullstack App",
      href: "https://market-ecru-three.vercel.app",
      alt: "E-commerce marketplace application screenshot"
    },

  ];

  return (
    <div id='work' className={styles.container}>
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
    </div>
  );
}

export default Work;
