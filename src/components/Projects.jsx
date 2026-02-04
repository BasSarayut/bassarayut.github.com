import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack shopping experience built with React and Node.js.",
    tech: ["React", "Redux", "Node.js", "MongoDB"]
  },
  {
    title: "Portfolio V1",
    description: "My previous portfolio site showcasing early work and experiments.",
    tech: ["HTML", "SCSS", "JavaScript"]
  },
  {
    title: "Task Management App",
    description: "A productivity tool for managing daily tasks and team collaboration.",
    tech: ["Vue.js", "Firebase", "Tailwind"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="container" style={{ padding: '6rem 2rem' }}>
      <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', display: 'block' }}>Featured Projects</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        {projectsData.map((project, index) => (
          <RevealOnScroll key={index} delay={index * 0.1}>
            <div className="glass-card" style={{ 
              padding: '2.5rem', 
              position: 'relative', 
              overflow: 'hidden',
              transition: 'transform 0.3s var(--algo-ease), border-color 0.3s',
              cursor: 'pointer',
              height: '100%'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.borderColor = 'var(--primary-accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
            }}
            >
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>{project.description}</p>
              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
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
              
              {/* Visual decoration */}
              <div style={{
                position: 'absolute',
                bottom: '-10%',
                right: '-10%',
                width: '100px',
                height: '100px',
                background: 'var(--secondary-accent)',
                filter: 'blur(50px)',
                opacity: 0.2,
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
