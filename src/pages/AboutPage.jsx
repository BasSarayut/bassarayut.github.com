import React, { useEffect } from 'react';
import { profileData } from '../data/profileData';
import SEO from '../components/SEO';
import RevealOnScroll from '../components/RevealOnScroll';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GitHubStats from '../components/GitHubStats';

const AboutPage = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', paddingBottom: '4rem' }}>
            <SEO title="About Me" description="My journey, experience, and what drives me as a developer." />
            
            {/* Header */}
            <section className="container" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                <RevealOnScroll>
                    <h1 className="gradient-text" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        {profileData.title}
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
                        {profileData.subtitle}
                    </p>
                    <div style={{ 
                        fontStyle: 'italic', 
                        color: 'var(--text-tertiary)', 
                        fontSize: '1.1rem',
                        maxWidth: '600px',
                        margin: '0 auto',
                        padding: '1rem',
                        borderLeft: '2px solid var(--primary-accent)',
                        background: 'rgba(255,255,255,0.05)'
                    }}>
                        "{profileData.quote}"
                    </div>
                </RevealOnScroll>
            </section>

            {/* Main Content Grid */}
            <div className="container" style={{ padding: '0 2rem 4rem' }}>
                
                 {/* Story */}
                <section style={{ marginBottom: '6rem' }}>
                    <RevealOnScroll>
                         <h2 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '2rem' }}>My Story</h2>
                         <div className="glass-card" style={{ padding: '3rem' }}>
                            {profileData.bio_paragraphs.map((para, i) => (
                                <p key={i} style={{ 
                                    marginBottom: '1.5rem', 
                                    fontSize: '1.1rem', 
                                    lineHeight: 1.8,
                                    color: 'var(--text-secondary)'
                                }}>
                                    {para}
                                </p>
                            ))}
                         </div>
                    </RevealOnScroll>
                </section>

                {/* Live Stats */}
                <section style={{ marginBottom: '6rem' }}>
                    <RevealOnScroll>
                        <h2 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '2rem' }}>GitHub Insights</h2>
                        <div className="glass-card" style={{ padding: '3rem', display: 'flex', justifyContent: 'center' }}>
                            <GitHubStats />
                        </div>
                    </RevealOnScroll>
                </section>

                {/* Experience & Education Split */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '4rem',
                    marginBottom: '6rem'
                }}>
                    {/* Experience */}
                    <section>
                        <RevealOnScroll>
                            <h2 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Experience</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {profileData.experience.map((job, index) => (
                                    <div key={index} className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid var(--secondary-accent)' }}>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--primary-accent)', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                            {job.year}
                                        </div>
                                        <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                                            {job.role}
                                        </h3>
                                        <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontStyle: 'italic' }}>
                                            {job.company}
                                        </div>
                                        <p style={{ color: 'var(--text-tertiary)', lineHeight: 1.6 }}>
                                            {job.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </RevealOnScroll>
                    </section>
                    
                    {/* Education */}
                    <section>
                        <RevealOnScroll>
                            <h2 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Education</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {profileData.education.map((edu, index) => (
                                    <div key={index} className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid var(--tertiary-accent)' }}>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--tertiary-accent)', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                            {edu.year}
                                        </div>
                                        <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                                            {edu.degree}
                                        </h3>
                                        <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                            {edu.school}
                                        </div>
                                         <p style={{ color: 'var(--text-tertiary)', lineHeight: 1.6 }}>
                                            {edu.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </RevealOnScroll>
                    </section>
                </div>

                {/* Interests */}
                <section style={{ marginBottom: '6rem' }}>
                     <RevealOnScroll>
                        <h2 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Beyond Coding</h2>
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                            gap: '2rem' 
                        }}>
                            {profileData.interests.map((hobby, index) => (
                                <motion.div 
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="glass-card"
                                    style={{ padding: '2rem', textAlign: 'center' }}
                                >
                                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{hobby.icon}</div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{hobby.label}</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>{hobby.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                     </RevealOnScroll>
                </section>

                {/* CTA */}
                <section style={{ textAlign: 'center' }}>
                    <RevealOnScroll>
                        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>Want to work together?</h2>
                        <button 
                             onClick={() => navigate('/')}                             
                             style={{
                                background: 'linear-gradient(135deg, var(--primary-accent), var(--secondary-accent))',
                                color: 'white',
                                border: 'none',
                                padding: '1rem 2.5rem',
                                borderRadius: '50px',
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                boxShadow: '0 10px 20px -5px rgba(56, 189, 248, 0.4)',
                                transition: 'transform 0.2s'
                             }}
                             onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                             onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            Return to Portfolio
                        </button>
                    </RevealOnScroll>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
