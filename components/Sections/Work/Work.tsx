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
      title1: "OtakuDrop",
      src: "otaku.png",
      title2: "Fullstack App",
      href: "https://otakudrop.vercel.app/",
      alt: "E-commerce OtakuDrop screenshot"
    },
    {
      title1: "Pintrail",
      src: "pintrail.jpg",
      title2: "Fullstack App",
      href: "https://pintrail-peach.vercel.app/",
      alt: "Pintrail landing page screenshot"
    },
    {
      title1: "Movie App",
      src: "movie.jpg",
      title2: "Frontend App",
      href: "https://jonathanhaz.github.io/MovieProject",
      alt: "Movie database application interface screenshot"

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
