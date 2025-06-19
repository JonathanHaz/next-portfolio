"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useState, useEffect, useRef } from 'react';
import styles from '../styles/pageTransition.module.css';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();
  const [transitionState, setTransitionState] = useState<'entering' | 'covering' | 'exiting' | 'complete'>('complete');
  const [hasNavigated, setHasNavigated] = useState(false);
  const previousPathname = useRef<string | null>(null);

  useEffect(() => {
    // If this is the first time seeing this pathname, it's initial load
    if (previousPathname.current === null) {
      previousPathname.current = pathname;
      setTransitionState('complete');
      return;
    }

    // If pathname changed, it's navigation
    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;
      setHasNavigated(true);
      
      // Run transition only on route changes
      setTransitionState('entering');
      
      // First: slide down from top (entering phase)
      const enterTimer = setTimeout(() => {
        setTransitionState('covering');
      }, 600);

      // Second: stay covering the screen
      const coverTimer = setTimeout(() => {
        setTransitionState('exiting');
      }, 1200);

      // Third: slide up from bottom (exiting phase)
      const exitTimer = setTimeout(() => {
        setTransitionState('complete');
      }, 1800);

      return () => {
        clearTimeout(enterTimer);
        clearTimeout(coverTimer);
        clearTimeout(exitTimer);
      };
    }
  }, [pathname]);

  const overlayVariants = {
    entering: {
      y: '0%',
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 1]
      }
    },
    covering: {
      y: '0%',
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 1]
      }
    },
    exiting: {
      y: '-100%',
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 1]
      }
    }
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 1]
      }
    }
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', position: 'relative' }}>
      {/* Page Content */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={pathname}
          variants={pageVariants}
          initial="initial"
          animate={transitionState === 'complete' ? "animate" : "initial"}
          style={{ 
            width: '100%', 
            minHeight: '100vh'
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Transition Overlay */}
      <AnimatePresence>
        {transitionState !== 'complete' && (
          <motion.div
            key={`overlay-${pathname}`}
            className={styles.transitionOverlay}
            initial={{ y: '-100%' }}
            animate={overlayVariants[transitionState]}
            exit={{ y: '-100%' }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PageTransition; 