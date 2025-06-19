"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import styles from '@/styles/curveTransition.module.css';

interface CurveTransitionProps {
  children: ReactNode;
}

const CurveTransition: React.FC<CurveTransitionProps> = ({ children }) => {
  const pathname = usePathname();

  const anim = (variants: any) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants
    }
  }

  const perspective = {
    initial: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    enter: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    exit: {
      y: -100,
      scale: 0.9,
      opacity: 0.5,
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }

  const slide = {
    initial: {
      top: "100vh"
    },
    enter: {
      top: "100vh"
    },
    exit: {
      top: "0vh",
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }

  const opacity = {
    initial: {
      opacity: 0
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    },
    exit: {
      opacity: 1
    }
  }

  return (
    <div className={styles.inner}>
      <AnimatePresence mode="wait">
        <motion.div key={pathname} className={styles.page} {...anim(perspective)}>
          <motion.div 
            className={styles.slide}
            {...anim(slide)}
          />
          <motion.div className={styles.pageContent} {...anim(opacity)}>
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CurveTransition; 