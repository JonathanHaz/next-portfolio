'use client';
import React from 'react';
import styles from '@/styles/Sections/workProjectItem.module.css';

interface WorkProjectItemProps {
  index: number;
  title: string;
  subtitle: string;
  setModal: (modal: { active: boolean; index: number }) => void;
}

export default function WorkProjectItem({ index, title, subtitle, setModal }: WorkProjectItemProps) {
  return (
    <div 
      onMouseEnter={() => setModal({ active: true, index })} 
      onMouseLeave={() => setModal({ active: false, index })} 
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
} 