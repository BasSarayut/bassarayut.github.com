import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import profileImage from '../assets/image/profile.jpg';

const About = () => {
  return (
    <section id="about" className="container" style={{ padding: '6rem 2rem' }}>
      <RevealOnScroll>
        <div className="glass-card" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About Me</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                I am a dedicated web developer with a keen eye for detail and a passion for building beautiful, functional applications. With a strong foundation in modern web technologies, I strive to create user experiences that are not only visually stunning but also intuitive and accessible.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or gaming.
              </p>
            </div>
            <div style={{ position: 'relative' }}>
              {/* Abstract visual element instead of photo for now */}
              <div style={{ 
                width: '100%', 
                aspectRatio: '1/1', 
                background: 'linear-gradient(45deg, var(--secondary-accent), var(--tertiary-accent))', 
                borderRadius: '20px', 
                opacity: 0.8,
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img 
                  src={profileImage} 
                  alt="Sarayut" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              {/* Decorative blur behind */}
              <div style={{
                position: 'absolute',
                top: '20%',
                left: '20%',
                width: '80%',
                height: '80%',
                background: 'var(--primary-accent)',
                filter: 'blur(60px)',
                zIndex: -1,
                opacity: 0.4
              }}></div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
