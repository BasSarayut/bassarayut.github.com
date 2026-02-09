import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Roadmap from '../components/Roadmap';
import RevealOnScroll from '../components/RevealOnScroll';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <SEO title="Portfolio" />
            <Hero />
            <About />
            <Skills />
            <Roadmap />
            <Projects />
            
            {/* Blog Preview Section */}
            <section id="blog-preview" className="container" style={{ padding: '6rem 2rem' }}>
                <RevealOnScroll>
                    <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', display: 'block' }}>
                        Latest from the Blog
                    </h2>
                    
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.2rem' }}>
                            Thoughts on design, technology, and the future of the web.
                        </p>
                        
                        <button 
                            onClick={() => navigate('/blog')}
                            style={{
                                background: 'linear-gradient(135deg, var(--primary-accent), var(--secondary-accent))',
                                color: '#fff',
                                fontWeight: 700,
                                padding: '1rem 3rem',
                                borderRadius: '50px',
                                fontSize: '1.1rem',
                                boxShadow: '0 10px 30px -5px rgba(56, 189, 248, 0.5)',
                                transition: 'transform 0.3s var(--fluid-ease)',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            Read All Articles
                        </button>
                    </div>
                </RevealOnScroll>
            </section>
            
            <Contact />
        </>
    );
};

export default Home;
