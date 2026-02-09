import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ProjectPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const projectIndex = caseStudies.findIndex(p => p.id === parseInt(id));
    const project = caseStudies[projectIndex];
    
    // Calculate Next Project
    const nextProjectIndex = (projectIndex + 1) % caseStudies.length;
    const nextProject = caseStudies[nextProjectIndex];

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
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    background: 'linear-gradient(180deg, rgba(230, 240, 255, 0.5) 0%, rgba(255,255,255,0) 100%)',
                    padding: '6rem 2rem 4rem',
                    textAlign: 'center',
                    borderBottom: '1px solid var(--glass-border)'
                }}
            >
                <div className="container" style={{ maxWidth: '900px' }}>
                     <motion.span 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ 
                            display: 'inline-block',
                            padding: '0.4rem 1rem', 
                            borderRadius: '50px', 
                            background: 'rgba(255,255,255,0.8)',
                            color: 'var(--primary-accent)',
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                        }}>
                        Case Study
                    </motion.span>
                    
                    <h1 className="gradient-text" style={{ 
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
                        marginBottom: '1.5rem',
                        lineHeight: 1.1
                    }}>
                        {project.title}
                    </h1>
                    
                    <p style={{ 
                        fontSize: '1.25rem', 
                        color: 'var(--text-secondary)', 
                        maxWidth: '700px', 
                        margin: '0 auto 3rem',
                        lineHeight: 1.6
                    }}>
                        {project.description}
                    </p>

                    <div style={{ 
                        justifyContent: 'center', 
                        gap: '3rem', 
                        flexWrap: 'wrap',
                        marginBottom: '3rem',
                        padding: '2rem',
                        background: 'rgba(255,255,255,0.4)',
                        borderRadius: '20px',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid var(--glass-border)',
                        display: 'inline-flex'
                    }}>
                        <div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>Role</div>
                            <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '1.1rem' }}>{project.role}</div>
                        </div>
                        <div style={{ width: '1px', background: 'var(--glass-border)' }}></div>
                        <div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>Timeline</div>
                            <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '1.1rem' }}>{project.timeline}</div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {project.tech.map((t, i) => (
                            <motion.span 
                                key={i} 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + (i * 0.1) }}
                                style={{ 
                                    padding: '0.5rem 1rem',
                                    borderRadius: '12px',
                                    background: 'rgba(56, 189, 248, 0.1)',
                                    color: 'var(--primary-accent)',
                                    fontSize: '0.95rem',
                                    fontWeight: 600,
                                    border: '1px solid rgba(56, 189, 248, 0.2)'
                                }}>
                                {t}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Analysis Content */}
            <div className="container" style={{ maxWidth: '800px', padding: '6rem 2rem' }}>
                
                {/* The Challenge */}
                <motion.section 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '6rem' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--secondary-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>1</div>
                        <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', margin: 0 }}>The Challenge</h2>
                    </div>
                    <div 
                        className="glass-card" 
                        style={{ padding: '2.5rem', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}
                        dangerouslySetInnerHTML={{ __html: project.challenge }}
                    />
                </motion.section>

                {/* The Solution */}
                <motion.section 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '6rem' }}
                >
                     <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--primary-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>2</div>
                        <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', margin: 0 }}>The Solution</h2>
                    </div>
                    <div 
                        className="glass-card" 
                        style={{ padding: '2.5rem', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)', borderLeft: '4px solid var(--primary-accent)' }}
                        dangerouslySetInnerHTML={{ __html: project.solution }}
                    />
                </motion.section>

                {/* The Impact */}
                <motion.section 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '6rem' }}
                >
                     <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--tertiary-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>3</div>
                        <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', margin: 0 }}>The Impact</h2>
                    </div>
                    <div 
                        style={{ 
                            padding: '2.5rem', 
                            background: 'linear-gradient(135deg, var(--primary-accent), var(--tertiary-accent))',
                            borderRadius: '32px',
                            color: 'white',
                            fontSize: '1.15rem',
                            lineHeight: 1.8,
                            boxShadow: '0 20px 40px -10px rgba(56, 189, 248, 0.4)'
                        }}
                    >
                        <div dangerouslySetInnerHTML={{ __html: project.impact }} />
                    </div>
                </motion.section>

                {/* Navigation Buttons */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6rem', gap: '1rem' }}>
                     <button 
                         onClick={() => navigate('/')}
                         style={{ 
                            padding: '1rem 2rem',
                            borderRadius: '50px',
                            background: 'transparent',
                            border: '1px solid var(--text-tertiary)',
                            color: 'var(--text-secondary)',
                            fontSize: '1rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'all 0.3s ease'
                         }}
                         onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--text-primary)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                         onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--text-tertiary)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                    >
                        <ArrowLeft size={20} /> Back to Projects
                    </button>

                    <button 
                         onClick={() => navigate(`/project/${nextProject.id}`)}
                         className="glass-card"
                         style={{ 
                            padding: '1rem 2.5rem',
                            borderRadius: '50px',
                            background: 'var(--surface-color)',
                            fontSize: '1rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            color: 'var(--text-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            transition: 'all 0.3s ease'
                         }}
                         onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(5px)'; e.currentTarget.style.borderColor = 'var(--primary-accent)'; }}
                         onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}
                    >
                        Next Case Study <ArrowRight size={20} />
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
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    color: var(--text-primary);
                    font-weight: 700;
                }
                section ul {
                    padding-left: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                section li {
                    margin-bottom: 0.8rem;
                    position: relative;
                }
                section strong {
                     color: var(--text-primary);
                     font-weight: 700;
                }
                /* Custom Bullet style inside content */
                section ul li::marker {
                    color: var(--primary-accent);
                }
            `}</style>
        </article>
    );
};

export default ProjectPage;
