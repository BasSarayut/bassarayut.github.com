import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          padding: '0',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--primary-accent), var(--secondary-accent))',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? 'visible' : 'hidden',
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.8)',
          transition: 'all 0.5s var(--fluid-ease)',
          zIndex: 1000,
          boxShadow: '0 10px 30px -5px rgba(56, 189, 248, 0.6), inset 0 2px 0 rgba(255,255,255,0.4)',
          border: '1px solid rgba(255,255,255,0.3)'
        }}
        aria-label="Back to Top"
      >
        {/* Glossy reflection */}
        <div style={{
            position: 'absolute',
            top: '5px',
            left: '10px',
            width: '20px',
            height: '10px',
            borderRadius: '10px',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)',
            pointerEvents: 'none'
        }}></div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
      <style>{`
        button:hover {
          transform: translateY(-6px) scale(1.05) !important;
          box-shadow: 0 15px 40px -5px rgba(56, 189, 248, 0.8), inset 0 2px 0 rgba(255,255,255,0.5) !important;
        }
      `}</style>
    </>
  );
};

export default BackToTop;
