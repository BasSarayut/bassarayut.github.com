import React, { useState, useEffect } from 'react';
import RevealOnScroll from './RevealOnScroll';
import { motion } from 'framer-motion';

const Projects = () => {

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/bassarayut/repos?sort=updated&per_page=9');
        if (!response.ok) throw new Error('Failed to fetch repos');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Cycle accent colors for each card
  const accentColors = [
    { gradient: 'linear-gradient(90deg, var(--primary-accent), var(--secondary-accent))', glow: 'rgba(56, 189, 248, 0.15)' },
    { gradient: 'linear-gradient(90deg, var(--secondary-accent), var(--tertiary-accent))', glow: 'rgba(244, 114, 182, 0.15)' },
    { gradient: 'linear-gradient(90deg, var(--tertiary-accent), var(--primary-accent))', glow: 'rgba(167, 139, 250, 0.15)' },
  ];

  return (
    <section id="projects" className="container section-padding">
      <RevealOnScroll>
        <div className="section-header">
          <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '0', display: 'block' }}>
              Open Source Contributions
          </h2>
        </div>

        {loading ? (
             <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Loading repositories...</p>
        ) : (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}
            >
                {repos.map((repo, index) => {
                    const accent = accentColors[index % 3];
                    return (
                    <motion.a 
                      key={repo.id} 
                      variants={itemVariants}
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="glass-card project-card" 
                      style={{
                        padding: '0',
                        display: 'flex',
                        flexDirection: 'column',
                        textDecoration: 'none',
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                        {/* Gradient accent bar at top */}
                        <div style={{
                          height: '3px',
                          background: accent.gradient,
                          position: 'relative',
                          zIndex: 3,
                        }} />

                        <div style={{ padding: '2rem', position: 'relative', zIndex: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', fontWeight: 700 }}>{repo.name}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                    <span>⭐</span> {repo.stargazers_count}
                                </div>
                            </div>
                            
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', flexGrow: 1, marginBottom: '1.5rem' }}>
                                {repo.description || "No description available."}
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                 {repo.language && (
                                    <span style={{ 
                                      fontSize: '0.85rem', 
                                      color: 'var(--secondary-accent)', 
                                      fontWeight: 600,
                                      background: 'rgba(244, 114, 182, 0.08)',
                                      padding: '0.3rem 0.8rem',
                                      borderRadius: '50px',
                                      border: '1px solid rgba(244, 114, 182, 0.15)',
                                    }}>
                                        {repo.language}
                                    </span>
                                 )}
                                 <span className="project-arrow" style={{ 
                                   fontSize: '0.85rem', 
                                   color: 'var(--primary-accent)', 
                                   fontWeight: 600,
                                   display: 'flex',
                                   alignItems: 'center',
                                   gap: '0.3rem',
                                   transition: 'gap 0.3s ease',
                                 }}>
                                    View Code <span style={{ transition: 'transform 0.3s ease', display: 'inline-block' }}>↗</span>
                                 </span>
                            </div>
                        </div>
                    </motion.a>
                );})}
            </motion.div>
        )}
      </RevealOnScroll>

      <style>{`
        .project-card:hover .project-arrow {
          gap: 0.6rem;
        }
        .project-card:hover .project-arrow span {
          transform: translate(2px, -2px);
        }
      `}</style>
    </section>
  );
};

export default Projects;
