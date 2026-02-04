import React, { useEffect, useRef, useState } from 'react';

const RevealOnScroll = ({ children, threshold = 0.1, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <div 
      ref={ref} 
      className={isVisible ? 'animate-slide-up' : ''} 
      style={{ 
        opacity: isVisible ? 1 : 0, 
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
