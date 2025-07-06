'use client';
import React from 'react';
import styles from '@/styles/Sections/workProjectItem.module.css';

interface WorkProjectItemProps {
  index: number;
  title: string;
  subtitle: string;
  setModal: (modal: { active: boolean; index: number }) => void;
  href: string;
}

export default function WorkProjectItem({ index, title, subtitle, setModal, href }: WorkProjectItemProps) {
  const handleClick = () => {
    window.open(href, '_blank');
  };

  return (
    <div 
      onMouseEnter={() => setModal({ active: true, index })} 
      onMouseLeave={() => setModal({ active: false, index })}
      onClick={handleClick}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
} 