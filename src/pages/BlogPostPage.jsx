import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/SEO';

const BlogPostPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <div className="container" style={{ padding: '8rem 2rem', textAlign: 'center', minHeight: '100vh' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Article Not Found</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>The article you are looking for does not exist.</p>
                <button 
                    onClick={() => navigate('/blog')}
                    style={{
                        background: 'var(--primary-accent)',
                        color: 'white',
                        padding: '0.8rem 2rem',
                        borderRadius: '50px',
                        fontWeight: 600
                    }}
                >
                    Back to Blog
                </button>
            </div>
        );
    }

    return (
        <article style={{ paddingTop: '80px', minHeight: '100vh', paddingBottom: '4rem' }}>
            <SEO 
                title={post.title} 
                description={post.excerpt} 
                url={`/blog/${post.id}`} 
            />
            {/* Header / Hero for Article */}
            <div style={{
                position: 'relative',
                padding: '4rem 2rem',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                {/* Background Gradient Blob */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '60vw',
                    height: '60vw',
                    maxWidth: '500px',
                    maxHeight: '500px',
                    background: `radial-gradient(circle, ${post.color} 0%, transparent 70%)`,
                    opacity: 0.15,
                    filter: 'blur(80px)',
                    zIndex: -1
                }}></div>

                <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
                    <div style={{ 
                        display: 'inline-block',
                        padding: '0.4rem 1rem', 
                        borderRadius: '50px', 
                        background: 'rgba(255,255,255,0.3)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid var(--glass-border)',
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        marginBottom: '1.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        {post.category}
                    </div>

                    <h1 className="gradient-text" style={{ 
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
                        lineHeight: 1.2, 
                        marginBottom: '1.5rem' 
                    }}>
                        {post.title}
                    </h1>

                    <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                        Published on {post.date}
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="container" style={{ maxWidth: '800px', padding: '0 2rem' }}>
                <div 
                    className="glass-card" 
                    style={{ padding: '3rem', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-primary)' }}
                >
                    {/* Render HTML content safely */}
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <button 
                        onClick={() => navigate('/blog')}
                        style={{
                            background: 'transparent',
                            border: '1px solid var(--glass-border)',
                            color: 'var(--text-primary)',
                            padding: '0.8rem 2rem',
                            borderRadius: '50px',
                            fontWeight: 600,
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--surface-color)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.transform = 'none';
                        }}
                    >
                        ← Back to All Articles
                    </button>
                </div>
            </div>
            
            <style>{`
                article h3 {
                    font-size: 1.8rem;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    color: var(--text-primary);
                }
                article p {
                    margin-bottom: 1.5rem;
                }
                article ul {
                    margin-bottom: 1.5rem;
                    padding-left: 1.5rem;
                }
                article li {
                    margin-bottom: 0.5rem;
                }
                article blockquote {
                    border-left: 4px solid var(--primary-accent);
                    padding-left: 1.5rem;
                    margin: 2rem 0;
                    font-style: italic;
                    color: var(--text-secondary);
                    font-size: 1.2rem;
                }
            `}</style>
        </article>
    );
};

export default BlogPostPage;
