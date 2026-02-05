import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { skillsData } from '../data/skillsData';

const Skills = () => {
  return (
    <section id="skills" className="container" style={{ padding: '6rem 2rem' }}>
      <RevealOnScroll>
        <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', display: 'block' }}>Technical Skills</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {skillsData.map((group, index) => (
            <div key={index} className="glass-card" style={{ padding: '2rem', transition: 'transform 0.3s ease' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary-accent)' }}>{group.category}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {group.items.map((skill, idx) => (
                  <span key={idx} style={{ 
                    background: 'rgba(0, 0, 0, 0.03)', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '50px', 
                    fontSize: '0.9rem',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--text-secondary)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Skills;
