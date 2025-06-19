"use client"
import { useState, useEffect, ReactNode } from 'react';
import PageLoader from './PageLoader';
import PageTransition from './PageTransition';

interface AnimatedLayoutProps {
  children: ReactNode;
}

const AnimatedLayout: React.FC<AnimatedLayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Add a small delay to ensure proper initialization
    const initTimer = setTimeout(() => {
      // Check if this is navigation within the same session (not a refresh)
      const isNavigation = sessionStorage.getItem('isNavigating');
      
      if (isNavigation) {
        // Skip loader for same-session navigation between pages
        setIsLoading(false);
        setShowContent(true);
        setIsFirstLoad(false);
        // Clear the navigation flag
        sessionStorage.removeItem('isNavigating');
      } else {
        // Show loader for first visits AND page refreshes
        setIsLoading(true);
        setShowContent(false);
        setIsFirstLoad(true);
      }
      setIsInitialized(true);
    }, 100); // Small delay to ensure proper state initialization

    return () => clearTimeout(initTimer);
  }, []);

  const handleLoaderComplete = () => {
    // Set flag to indicate we're now in navigation mode
    sessionStorage.setItem('isNavigating', 'true');
    setIsLoading(false);
    setShowContent(true);
    setIsFirstLoad(false);
  };

  // Don't render anything until initialized
  if (!isInitialized) {
    return null;
  }

  // Always show loader on first visit, regardless of load speed
  if (isFirstLoad && isLoading) {
    return <PageLoader onComplete={handleLoaderComplete} />;
  }

  // For subsequent navigation, just show content with simple transitions
  return (
    <PageTransition>
      {children}
    </PageTransition>
  );
};

export default AnimatedLayout; 