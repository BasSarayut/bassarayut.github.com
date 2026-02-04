import React from 'react';

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
      {/* Background Gradient Mesh */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        left: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, var(--primary-accent) 0%, transparent 70%)',
        opacity: 0.15,
        filter: 'blur(80px)',
        zIndex: -1,
        animation: 'slideUp 5s infinite alternate ease-in-out'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-10%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, var(--tertiary-accent) 0%, transparent 70%)',
        opacity: 0.1,
        filter: 'blur(100px)',
        zIndex: -1
      }}></div>

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
          fontSize: 'clamp(3rem, 8vw, 6rem)', 
          fontWeight: 800, 
          marginBottom: '1.5rem',
          lineHeight: 1.1
        }}>
          Hello, I'm <br />
          <span className="gradient-text">Sarayut</span>
        </h1>
        
        <p className="animate-slide-up delay-300" style={{ 
          fontSize: 'clamp(1rem, 2vw, 1.5rem)', 
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto 3rem auto'
        }}>
          A passionate developer crafting premium digital experiences with modern web technologies.
        </p>
        
        <div className="animate-fade-in delay-300" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <button style={{ 
            backgroundColor: 'var(--primary-accent)', 
            color: '#000', 
            fontWeight: 700,
            padding: '1rem 2rem',
            borderRadius: '50px',
            fontSize: '1rem',
            boxShadow: '0 0 20px rgba(0, 242, 234, 0.3)'
          }}>
            View My Work
          </button>
          
          <button className="glass-card" style={{ 
            background: 'rgba(255, 255, 255, 0.05)',
            color: 'var(--text-primary)', 
            fontWeight: 500,
            padding: '1rem 2rem',
            borderRadius: '50px',
            fontSize: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
