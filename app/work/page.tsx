'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/workp.module.css';
import Image from 'next/image';
import Rounded from '@/components/Rounded';
import WorkProjectItem from '@/components/WorkProjectItem';
import Modal from '@/components/Modal';

interface Project {
  title1: string;
  src: string;
  title2: string;
  href: string;
  description: string;
  tech: string[];
}

const WorkPage: React.FC = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  const projects: Project[] = [
    {
      title1: "Voltride",
      src: "voltridel.png",
      title2: "Fullstack App",
      href: "https://voltride-gules.vercel.app/",
      description: "A modern website built with Next.js and Sanity CMS for content management, featuring dynamic content and responsive design.",
      tech: ["Next.js", "TypeScript", "Sanity CMS"]
    },
    {
      title1: "PokeCard",
      src: "pokemon.jpg",
      title2: "Landing Page",
      href: "https://pokemon-seven-pi.vercel.app",
      description: "An interactive Pokemon card collection landing page featuring modern animations and responsive design.",
      tech: ["Next.js", "Spline", "Framer Motion", "TypeScript"]
    },
    {
      title1: "Movie App",
      src: "movie.jpg",
      title2: "Frontend App", 
      href: "https://jonathanhaz.github.io/MovieProject",
      description: "A movie discovery application with search functionality, ratings, and detailed movie information display.",
      tech: ["JavaScript", "HTML", "CSS", "Movie API"]
    },
    {
      title1: "Market",
      src: "ecommerce.jpg",
      title2: "Fullstack App",
      href: "https://market-ecru-three.vercel.app",
      description: "A full-featured e-commerce platform with shopping cart, user authentication, and payment integration.",
      tech: ["Next.js", "Prisma", "Stripe", "Tailwind CSS"]
    },
    {
      title1: "Influencer Portfolio",
      src: "gaya.png",
      title2: "Portfolio",
      href: "https://gayaasher.netlify.app/",
      description: "A portfolio website for a content creator, telling about her life, hobbies, and videos.",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title1: "Bfiber Landing Page",
      src: "bfiber.png",
      title2: "Landing Page",
      href: "https://www.kamazeole.co.il/landing-bezeq/",
      description: "A Landing Page for CRM purposes.",
      tech: ["HTML", "CSS", "JavaScript", "API Integration"]
    },
    {
      title1: "Resume Builder",
      src: "resume.jpg", 
      title2: "Fullstack App",
      href: "https://resume-558a0.web.app",
      description: "A comprehensive resume builder application with real-time editing, multiple templates, and export functionality.",
      tech: ["React", "Firebase", "JavaScript"]
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={styles.container}>
        <div className={styles.header}>
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.title}
          >
            My Work
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.subtitle}
          >
            A collection of projects showcasing my skills in web development
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={styles.projectsList}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title1}
              variants={projectVariants}
            >
              <WorkProjectItem 
                index={index} 
                title={project.title1} 
                subtitle={project.title2}
                setModal={setModal} 
              />
            </motion.div>
          ))}
        </motion.div>
        
        <Modal modal={modal} projects={projects} />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={styles.footer}
        >
          <p className={styles.footerText}>
            Interested in working together? Let's create something amazing!
          </p>
          <div className={styles.rounded}>
            <Rounded onClick={() => window.location.href = '/contact'}>
              <p>Get In Touch</p>
            </Rounded>
          </div>
        </motion.div>
      </div>
  );
};

export default WorkPage;
