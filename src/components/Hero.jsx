import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="hero-section" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '60px' // For fixed navbar
    }}>
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h2 className="animate-fade-in delay-100" style={{ 
          fontSize: '1.2rem', 
          fontWeight: 500, 
          letterSpacing: '3px',
          color: 'var(--text-secondary)',
          marginBottom: '1rem',
          textTransform: 'uppercase'
        }}>
          Portfolio
        </h2>
        
        <h1 className="animate-slide-up delay-200" style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 6rem)', 
          fontWeight: 800, 
          marginBottom: '1.5rem',
          lineHeight: 1.1
        }}>
          Hello, I'm <br />
          <span className="gradient-text">
            <TypeAnimation
              sequence={[
                'Sarayut',
                1000,
                'a System Analyst',
                1000,
                'a Developer',
                1000,
                'a Creator',
                1000,
                'a Dreamer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>
        
        <p className="animate-slide-up delay-300" style={{ 
          fontSize: 'clamp(1rem, 2vw, 1.5rem)', 
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto 3rem auto'
        }}>
          A passionate developer crafting premium digital experiences with modern web technologies.
        </p>
        
        <div className="animate-fade-in delay-300" style={{ 
          display: 'flex', 
          gap: '1.5rem', 
          justifyContent: 'center',
          flexWrap: 'wrap' 
        }}>
          <button className="hero-cta-primary" style={{ 
            background: 'linear-gradient(135deg, var(--primary-accent), var(--secondary-accent))', 
            color: '#fff', 
            fontWeight: 700,
            padding: '1rem 2.5rem',
            borderRadius: '50px',
            fontSize: '1.1rem',
            boxShadow: '0 10px 30px -5px rgba(56, 189, 248, 0.4), inset 0 2px 0 rgba(255,255,255,0.4)',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.2)',
            transition: 'all 0.4s var(--fluid-ease)',
          }}>
            View My Work
          </button>
          
          <button className="glass-card hero-cta-secondary" style={{ 
            background: 'var(--surface-color)',
            color: 'var(--text-primary)', 
            fontWeight: 500,
            padding: '1rem 2.5rem',
            borderRadius: '50px',
            fontSize: '1.1rem',
            border: '1px solid var(--glass-border)',
            borderTop: '1px solid var(--glass-highlight)',
            boxShadow: 'var(--glass-shadow)',
            transition: 'all 0.4s var(--fluid-ease)',
          }}>
            Contact Me
          </button>
        </div>
      </div>

      <style>{`
        .hero-cta-primary:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 15px 40px -5px rgba(56, 189, 248, 0.5), 0 0 60px rgba(244, 114, 182, 0.2), inset 0 2px 0 rgba(255,255,255,0.4);
        }
        .hero-cta-secondary:hover {
          transform: translateY(-4px) scale(1.05) !important;
          border-color: rgba(56, 189, 248, 0.4) !important;
          box-shadow: var(--glass-shadow), 0 0 30px rgba(56, 189, 248, 0.1) !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;
