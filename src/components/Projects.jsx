import React, { useState, useEffect } from 'react';

const Projects = () => {

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/bassarayut/repos?sort=updated&per_page=9');
        if (!response.ok) throw new Error('Failed to fetch repos');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="container section-padding">
      



      {/* <RevealOnScroll> */}
        <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '3rem', textAlign: 'center', display: 'block' }}>
            Open Source Contributions
        </h2>

        {loading ? (
             <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Loading repositories...</p>
        ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {repos.map((repo) => (
                    <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="glass-card" style={{
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        textDecoration: 'none',
                        transition: 'transform 0.3s var(--algo-ease), border-color 0.3s'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.borderColor = 'var(--secondary-accent)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.style.borderColor = 'var(--glass-border)';
                    }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', fontWeight: 700 }}>{repo.name}</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                <span>⭐</span> {repo.stargazers_count}
                            </div>
                        </div>
                        
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', flexGrow: 1, marginBottom: '1.5rem' }}>
                            {repo.description || "No description available."}
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                             {repo.language && (
                                <span style={{ fontSize: '0.85rem', color: 'var(--secondary-accent)', fontWeight: 600 }}>
                                    {repo.language}
                                </span>
                             )}
                             <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
                                ↗ View Code
                             </span>
                        </div>
                    </a>
                ))}
            </div>
        )}
      {/* </RevealOnScroll> */}

    </section>
  );
};

export default Projects;
