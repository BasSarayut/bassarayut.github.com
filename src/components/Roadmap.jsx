import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { profileData } from '../data/profileData';

const Roadmap = () => {
    return (
        <section id="roadmap" className="container section-padding">
            <RevealOnScroll>
                <h2 className="gradient-text" style={{ 
                    fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
                    marginBottom: '3rem', 
                    textAlign: 'center', 
                    display: 'block' 
                }}>
                    Dev Journey
                </h2>
                
                <div className="roadmap-container">
                    {/* Vertical Line */}
                    <div className="roadmap-line"></div>

                    {profileData.experience.map((exp, index) => (
                        <div key={index} className={`roadmap-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            {/* Dot on Line */}
                            <div className="roadmap-dot" style={{
                                border: `4px solid ${index % 2 === 0 ? 'var(--primary-accent)' : 'var(--secondary-accent)'}`
                            }}></div>

                            {/* Content Card */}
                            <div className="glass-card roadmap-content">
                                <span style={{
                                    color: 'var(--primary-accent)',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    display: 'block',
                                    marginBottom: '0.5rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    {exp.year}
                                </span>
                                <h3 style={{ 
                                    fontSize: '1.5rem', 
                                    marginBottom: '0.5rem', 
                                    color: 'var(--text-primary)'
                                }}>
                                    {exp.role}
                                </h3>
                                <h4 style={{ 
                                    fontSize: '1.1rem', 
                                    color: 'var(--text-secondary)', 
                                    fontWeight: 500,
                                    marginBottom: '1rem' 
                                }}>
                                    {exp.company}
                                </h4>
                                <p style={{ 
                                    color: 'var(--text-tertiary)', 
                                    lineHeight: '1.6',
                                    fontSize: '1rem'
                                }}>
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </RevealOnScroll>

            <style>{`
                .roadmap-container {
                    position: relative;
                    max-width: 1000px;
                    margin: 0 auto;
                }

                .roadmap-line {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: linear-gradient(to bottom, var(--primary-accent), var(--secondary-accent));
                    opacity: 0.5;
                    z-index: 0;
                }

                .roadmap-item {
                    display: flex;
                    justify-content: flex-end;
                    padding-right: 30px;
                    position: relative;
                    margin-bottom: 4rem;
                    width: 50%;
                }

                .roadmap-item.left {
                    left: 0;
                    justify-content: flex-end;
                    text-align: right;
                    padding-right: 40px;
                }

                .roadmap-item.right {
                    left: 50%;
                    justify-content: flex-start;
                    text-align: left;
                    padding-left: 40px;
                    padding-right: 0;
                }

                .roadmap-dot {
                    position: absolute;
                    top: 0;
                    width: 20px;
                    height: 20px;
                    background: var(--bg-color);
                    border-radius: 50%;
                    z-index: 2;
                    box-shadow: 0 0 10px rgba(0,0,0,0.2);
                }

                .roadmap-item.left .roadmap-dot {
                    right: -10px;
                }

                .roadmap-item.right .roadmap-dot {
                    left: -10px;
                }

                .roadmap-content {
                    width: 100%;
                    padding: 2rem;
                    position: relative;
                    background: var(--glass-bg);
                    border: 1px solid var(--glass-border);
                    backdrop-filter: blur(10px);
                    border-radius: var(--liquid-radius);
                    box-shadow: var(--glass-shadow);
                    text-align: left; /* Reset text align for content */
                }
                
                @media (max-width: 768px) {
                    .roadmap-line {
                        left: 20px;
                    }

                    .roadmap-item {
                        width: 100%;
                        left: 0 !important;
                        padding-left: 50px !important;
                        padding-right: 0 !important;
                        text-align: left !important;
                    }

                    .roadmap-dot {
                        left: 10px !important;
                        right: auto !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Roadmap;
