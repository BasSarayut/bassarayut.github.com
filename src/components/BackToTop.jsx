import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;

      setScrollProgress(scroll * 100);

      if (totalScroll > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 99,
            cursor: 'pointer',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'var(--surface-color)',
            boxShadow: 'var(--glass-shadow)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--glass-border)',
            padding: '2px', // Space for the ring
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={scrollToTop}
        >
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <CircularProgressbar
                    value={scrollProgress}
                    strokeWidth={8}
                    styles={buildStyles({
                        pathColor: 'var(--primary-accent)', // Use your CSS variable
                        trailColor: 'rgba(0,0,0,0.1)',
                        strokeLinecap: 'butt',
                        pathTransitionDuration: 0.1
                    })}
                />
                
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <ChevronUp size={24} color="var(--text-primary)" strokeWidth={3} />
                </div>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
