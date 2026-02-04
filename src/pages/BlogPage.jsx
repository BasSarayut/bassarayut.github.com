import React, { useEffect } from 'react';
import Blog from '../components/Blog';
import SEO from '../components/SEO';

const BlogPage = () => {
  // Scroll to top when entering the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <SEO title="Blog" description="Deep dives into code, design systems, and cloud architecture." />
      <div className="container" style={{ textAlign: 'center', padding: '4rem 2rem 2rem' }}>
        <h1 className="gradient-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>
          The Blog
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Deep dives into code, design systems, and cloud architecture.
        </p>
      </div>
      
      <Blog />
      
      {/* Newsletter / Footer area specifically for blog */}
      <div className="container" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-tertiary)' }}>More articles coming soon...</p>
      </div>
    </div>
  );
};

export default BlogPage;
