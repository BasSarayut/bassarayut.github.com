import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import SEO from '../components/SEO';

const ProjectPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = caseStudies.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="container" style={{ padding: '8rem 2rem', textAlign: 'center', minHeight: '100vh' }}>
                <h2>Project Not Found</h2>
                <button onClick={() => navigate('/')}>Back to Home</button>
            </div>
        );
    }

    return (
        <article style={{ paddingTop: '80px', minHeight: '100vh', paddingBottom: '4rem' }}>
            <SEO 
                title={project.title} 
                description={project.description} 
                image={project.image}
                url={`/project/${project.id}`} 
            />
            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(180deg, rgba(230, 240, 255, 0.5) 0%, rgba(255,255,255,0) 100%)',
                padding: '4rem 2rem',
                textAlign: 'center',
                borderBottom: '1px solid var(--glass-border)'
            }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                     <span style={{ 
                        display: 'inline-block',
                        padding: '0.4rem 1rem', 
                        borderRadius: '50px', 
                        background: 'rgba(255,255,255,0.8)',
                        color: 'var(--primary-accent)',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        Case Study
                    </span>
                    
                    <h1 className="gradient-text" style={{ 
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                        marginBottom: '1.5rem',
                        lineHeight: 1.1
                    }}>
                        {project.title}
                    </h1>
                    
                    <p style={{ 
                        fontSize: '1.25rem', 
                        color: 'var(--text-secondary)', 
                        maxWidth: '700px', 
                        margin: '0 auto 2rem' 
                    }}>
                        {project.description}
                    </p>

                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: '2rem', 
                        flexWrap: 'wrap',
                        marginBottom: '2rem'
                    }}>
                        <div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>Role</div>
                            <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{project.role}</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>Timeline</div>
                            <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{project.timeline}</div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {project.tech.map((t, i) => (
                            <span key={i} style={{ 
                                padding: '0.3rem 0.8rem',
                                borderRadius: '8px',
                                background: 'rgba(56, 189, 248, 0.1)',
                                color: 'var(--primary-accent)',
                                fontSize: '0.9rem',
                                fontWeight: 500
                            }}>
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Analysis Content */}
            <div className="container" style={{ maxWidth: '800px', padding: '4rem 2rem' }}>
                
                {/* The Challenge */}
                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>The Challenge</h2>
                    <div 
                        className="glass-card" 
                        style={{ padding: '2rem', fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}
                        dangerouslySetInnerHTML={{ __html: project.challenge }}
                    />
                </section>

                {/* The Solution */}
                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>The Solution</h2>
                    <div 
                        className="glass-card" 
                        style={{ padding: '2rem', fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}
                        dangerouslySetInnerHTML={{ __html: project.solution }}
                    />
                </section>

                {/* The Impact */}
                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>The Impact</h2>
                    <div 
                        style={{ 
                            padding: '2rem', 
                            background: 'linear-gradient(135deg, var(--primary-accent), var(--tertiary-accent))',
                            borderRadius: '32px',
                            color: 'white',
                            fontSize: '1.1rem',
                            lineHeight: 1.7,
                            boxShadow: '0 10px 30px -5px rgba(56, 189, 248, 0.4)'
                        }}
                    >
                        <div dangerouslySetInnerHTML={{ __html: project.impact }} />
                    </div>
                </section>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <button 
                         onClick={() => navigate('/')}
                         style={{ 
                            padding: '1rem 2.5rem',
                            borderRadius: '50px',
                            background: 'white',
                            border: '1px solid var(--glass-border)',
                            fontSize: '1rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            boxShadow: 'var(--glass-shadow)'
                         }}
                    >
                        View More Projects
                    </button>
                </div>
            </div>

             <style>{`
                @media (max-width: 768px) {
                    .container {
                        padding-left: 1.5rem !important;
                        padding-right: 1.5rem !important;
                    }
                    article {
                        padding-top: 60px !important;
                    }
                    h1.gradient-text {
                        font-size: 2.5rem !important;
                    }
                }
                section h3 {
                    font-size: 1.4rem;
                    margin-top: 1.5rem;
                    margin-bottom: 0.8rem;
                    color: var(--text-primary);
                }
                section ul {
                    padding-left: 1.5rem;
                    margin-bottom: 1rem;
                }
                section li {
                    margin-bottom: 0.5rem;
                }
                section strong {
                     color: var(--text-primary);
                     font-weight: 700;
                }
            `}</style>
        </article>
    );
};

export default ProjectPage;
