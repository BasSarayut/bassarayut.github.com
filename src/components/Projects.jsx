import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { useNavigate } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="container" style={{ padding: '6rem 2rem' }}>
      <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', display: 'block' }}>Featured Projects</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        {caseStudies.map((project, index) => (
          <RevealOnScroll key={index} delay={index * 0.1}>
            <div className="glass-card" style={{ 
              padding: '2.5rem', 
              position: 'relative', 
              overflow: 'hidden',
              transition: 'transform 0.3s var(--algo-ease), border-color 0.3s',
              cursor: 'pointer',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={() => navigate(`/project/${project.id}`)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.borderColor = 'var(--primary-accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
            }}
            >
              <div style={{ 
                  textTransform: 'uppercase', 
                  fontSize: '0.8rem', 
                  color: 'var(--text-tertiary)', 
                  letterSpacing: '1px',
                  marginBottom: '0.5rem',
                  fontWeight: 600
              }}>
                {project.role}
              </div>

              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6', flexGrow: 1 }}>{project.description}</p>
              
              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {project.tech.map((t, i) => (
                  <span key={i} style={{ 
                    fontSize: '0.85rem', 
                    color: 'var(--primary-accent)', 
                    fontWeight: 500 
                  }}>
                    #{t}
                  </span>
                ))}
              </div>

              <div style={{ 
                  color: 'var(--primary-accent)', 
                  fontWeight: 700, 
                  fontSize: '0.9rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem' 
              }}>
                  Read Case Study
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
              </div>
              
              {/* Visual decoration */}
              <div style={{
                position: 'absolute',
                bottom: '-10%',
                right: '-10%',
                width: '120px',
                height: '120px',
                background: 'var(--secondary-accent)',
                filter: 'blur(60px)',
                opacity: 0.15,
                zIndex: -1
              }}></div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default Projects;
