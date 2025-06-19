"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from '@/styles/pageLoader.module.css';

interface PageLoaderProps {
  onComplete: () => void;
}

const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress over 2 seconds
    const duration = 2000; // 2 seconds
    const interval = 50; // Update every 50ms
    const totalSteps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const baseProgress = (currentStep / totalSteps) * 100;
      
      // Add some randomness for realistic feel, but keep it controlled
      const randomVariation = Math.random() * 3 - 1.5; // ±1.5%
      const newProgress = Math.min(100, Math.max(0, baseProgress + randomVariation));
      
      setProgress(newProgress);

      if (currentStep >= totalSteps) {
        clearInterval(timer);
        setProgress(100);
        setTimeout(() => {
          setIsLoading(false);
          setTimeout(onComplete, 800); // Wait for exit animation
        }, 200); // Small pause at 100% before exit
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  const containerVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const nameVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    initial: { scaleX: 0 },
    animate: { 
      scaleX: progress / 100,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const name = "Jonathan Hazan";

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          className={styles.container}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className={styles.content}>
            {/* Animated Name */}
            <motion.div 
              className={styles.nameContainer}
              variants={nameVariants}
              initial="initial"
              animate="animate"
            >
              {name.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  className={styles.letter}
                  variants={letterVariants}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.div>

            {/* Subtitle */}
            <motion.p 
              className={styles.subtitle}
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              Portfolio • Developer • Designer
            </motion.p>

            {/* Progress Bar */}
            <div className={styles.progressContainer}>
              <motion.div 
                className={styles.progressBar}
                variants={progressVariants}
                initial="initial"
                animate="animate"
              />
            </div>

            {/* Progress Percentage */}
            <motion.div 
              className={styles.percentage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {Math.round(progress)}%
            </motion.div>
          </div>

          {/* Background Animation */}
          <div className={styles.backgroundAnimation}>
            <motion.div 
              className={styles.floatingElement}
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ©
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader; 