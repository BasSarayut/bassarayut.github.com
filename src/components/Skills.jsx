import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { skillsData } from '../data/skillsData';
import { motion } from 'framer-motion';
import { Code2, CloudLightning, Wrench, Terminal, Database, Smartphone } from 'lucide-react';

const Skills = () => {
    // Map categories to icons & accent colors
    const getCategoryInfo = (category) => {
        if (category.includes("Frontend")) return { icon: <Code2 size={32} color="#60A5FA" />, accent: 'var(--primary-accent)' };
        if (category.includes("Backend")) return { icon: <Database size={32} color="#34D399" />, accent: 'var(--tertiary-accent)' };
        if (category.includes("Tools")) return { icon: <Wrench size={32} color="#F472B6" />, accent: 'var(--secondary-accent)' };
        return { icon: <Terminal size={32} />, accent: 'var(--primary-accent)' };
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.3 
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

  return (
    <section id="skills" className="container" style={{ padding: '8rem 2rem' }}>
      <RevealOnScroll>
        <div className="section-header">
             <h2 className="gradient-text" style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                marginBottom: '0', 
                display: 'block' 
            }}>
                Current Tech Stack
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '1.5rem' }}>
                The technologies I use to build scalable products.
            </p>
        </div>
        
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '2rem' 
            }}
        >
          {skillsData.map((group, index) => {
            const { icon, accent } = getCategoryInfo(group.category);
            return (
            <motion.div 
                key={index} 
                variants={itemVariants}
                className="glass-card" 
                style={{ 
                    padding: '2.5rem', 
                    position: 'relative',
                    overflow: 'hidden',
                    borderTop: `2px solid ${index === 0 ? 'var(--primary-accent)' : index === 1 ? 'var(--tertiary-accent)' : 'var(--secondary-accent)'}`,
                }}
            >
               {/* Decorative Gradient Blob */}
               <div style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-20%',
                    width: '150px',
                    height: '150px',
                    background: index === 0 ? 'var(--primary-accent)' : index === 1 ? 'var(--secondary-accent)' : 'var(--tertiary-accent)',
                    opacity: 0.1,
                    borderRadius: '50%',
                    filter: 'blur(50px)',
                    zIndex: 0
               }}></div>

              <div style={{ position: 'relative', zIndex: 3 }}>
                  <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ 
                          padding: '12px', 
                          background: 'rgba(255,255,255,0.05)', 
                          borderRadius: '16px',
                          border: '1px solid var(--glass-border)',
                          transition: 'box-shadow 0.3s ease',
                      }}>
                          {icon}
                      </div>
                      <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>{group.category}</h3>
                  </div>
                  
                  <p style={{ color: 'var(--text-tertiary)', marginBottom: '2rem', fontSize: '0.95rem' }}>
                      {group.desc}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    {group.items.map((skill, idx) => (
                      <motion.span 
                        key={idx}
                        whileHover={{ 
                          scale: 1.08,
                          boxShadow: `0 0 20px ${index === 0 ? 'rgba(56, 189, 248, 0.25)' : index === 1 ? 'rgba(167, 139, 250, 0.25)' : 'rgba(244, 114, 182, 0.25)'}` 
                        }}
                        style={{ 
                            background: 'rgba(0, 0, 0, 0.03)', 
                            padding: '0.6rem 1.2rem', 
                            borderRadius: '50px', 
                            fontSize: '0.95rem',
                            border: '1px solid var(--glass-border)',
                            color: 'var(--text-secondary)',
                            fontWeight: 500,
                            cursor: 'default',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.02)'
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
              </div>
            </motion.div>
          )})}
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};

export default Skills;

