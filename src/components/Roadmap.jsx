import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { roadmapData } from '../data/roadmapData';

const Roadmap = () => {
    return (
        <section id="roadmap" className="container" style={{ padding: '6rem 2rem' }}>
            <RevealOnScroll>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>
                        2026 Roadmap
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                        A commitment to continuous growth in technology, creativity, and communication.
                    </p>
                </div>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', 
                    gap: '2rem',
                    position: 'relative'
                }}>
                    {roadmapData.map((item, index) => (
                        <div 
                            key={index}
                            className="glass-card"
                            style={{
                                padding: '3rem 2.5rem 2.5rem',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                transition: 'transform 0.4s var(--fluid-ease), box-shadow 0.4s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = 'var(--glass-shadow), 0 20px 40px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
                            }}
                        >
                            {/* Large Watermark Number */}
                            <div style={{
                                position: 'absolute',
                                top: '-10px',
                                right: '10px',
                                fontSize: '10rem',
                                fontWeight: '800',
                                background: `linear-gradient(180deg, ${item.color} 0%, transparent 80%)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                opacity: 0.2,
                                lineHeight: 1,
                                zIndex: 0,
                                fontFamily: 'var(--font-display)',
                                pointerEvents: 'none',
                                filter: 'blur(2px)' // Helps blend into the glass
                            }}>
                                0{index + 1}
                            </div>

                            {/* Liquid Top Border */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '4px',
                                background: `linear-gradient(90deg, ${item.color}, transparent)`,
                                zIndex: 1
                            }}></div>

                            <div style={{ positing: 'relative', zIndex: 1 }}>
                                <div style={{ 
                                    display: 'inline-block',
                                    fontSize: '0.85rem', 
                                    color: item.color, 
                                    fontWeight: 700, 
                                    textTransform: 'uppercase', 
                                    marginBottom: '0.5rem',
                                    padding: '0.3rem 0.8rem',
                                    borderRadius: '20px',
                                    background: 'rgba(255,255,255,0.2)',
                                    border: '1px solid rgba(255,255,255,0.3)',
                                    letterSpacing: '0.5px'
                                }}>
                                    {item.quarter}
                                </div>

                                <h3 style={{ 
                                    fontSize: '1.8rem', 
                                    marginTop: '1rem',
                                    marginBottom: '1.5rem', 
                                    color: 'var(--text-primary)',
                                    lineHeight: 1.2 
                                }}>
                                    {item.title}
                                </h3>

                                <ul style={{ 
                                    paddingLeft: '1.2rem', 
                                    color: 'var(--text-secondary)', 
                                    lineHeight: 1.6, 
                                    flexGrow: 1 
                                }}>
                                    {item.goals.map((goal, i) => (
                                        <li key={i} style={{ marginBottom: '0.8rem' }}>{goal}</li>
                                    ))}
                                </ul>
                            </div>

                             {/* Decorative Glow */}
                             <div style={{
                                position: 'absolute',
                                bottom: '-20%',
                                left: '-20%',
                                width: '150px',
                                height: '150px',
                                background: item.color,
                                opacity: 0.15,
                                filter: 'blur(50px)',
                                borderRadius: '50%',
                                pointerEvents: 'none'
                            }}></div>
                        </div>
                    ))}
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default Roadmap;
