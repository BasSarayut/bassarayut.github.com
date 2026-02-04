import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  const navigate = useNavigate();

  return (
    <section id="blog" className="container" style={{ padding: '6rem 2rem' }}>
      <RevealOnScroll>
        <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', display: 'block' }}>
          Latest Writings
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          {blogPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="glass-card" 
              style={{ 
                padding: '2rem', 
                display: 'flex', 
                flexDirection: 'column',
                height: '100%',
                cursor: 'pointer',
                transition: 'transform 0.4s var(--fluid-ease), box-shadow 0.4s ease'
              }}
              onClick={() => navigate(`/blog/${post.id}`)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = 'var(--glass-shadow), 0 20px 40px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
              }}
            >
              {/* Decorative Liquid Blob */}
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '20px',
                background: `linear-gradient(135deg, ${post.color}, transparent)`,
                marginBottom: '1.5rem',
                opacity: 0.8,
                filter: 'blur(10px)'
              }}></div>

              <div style={{ 
                fontSize: '0.85rem', 
                color: 'var(--text-tertiary)', 
                marginBottom: '0.5rem', 
                textTransform: 'uppercase', 
                letterSpacing: '1px',
                fontWeight: 600 
              }}>
                {post.category} • {post.date}
              </div>

              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '1rem', 
                lineHeight: 1.3,
                background: `linear-gradient(90deg, var(--text-primary), var(--text-secondary))`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {post.title}
              </h3>

              <p style={{ 
                color: 'var(--text-secondary)', 
                marginBottom: '2rem', 
                lineHeight: 1.6,
                flexGrow: 1 
              }}>
                {post.excerpt}
              </p>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                color: post.color, 
                fontWeight: 700, 
                fontSize: '0.9rem',
                gap: '0.5rem'
              }}>
                Read Article
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Blog;
