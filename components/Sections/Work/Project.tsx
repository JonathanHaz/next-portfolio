// index.tsx
import React from 'react'
import styles from '@/styles/Sections/project.module.css';

interface ProjectProps {
  index: number;
  title: string;
  setModal: React.Dispatch<React.SetStateAction<{ active: boolean; index: number; }>>;
}

const Project: React.FC<ProjectProps> = ({ index, title, setModal }) => {
  return (
    <div
      onMouseEnter={() => { setModal({ active: true, index }) }}
      onMouseLeave={() => { setModal({ active: false, index }) }}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  );
}

export default Project;
