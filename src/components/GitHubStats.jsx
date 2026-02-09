import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: duration,
      onUpdate: (latest) => setCount(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [value, duration]);

  return <span>{count}</span>;
};

const GitHubStats = () => {
  const [stats, setStats] = useState({
    repos: 0,
    followers: 0,
    stars: 0,
    loading: true
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // 1. Fetch User Data
        const userRes = await fetch('https://api.github.com/users/bassarayut');
        const userData = await userRes.json();

        // 2. Fetch Repos to sum stars
        const reposRes = await fetch('https://api.github.com/users/bassarayut/repos?per_page=100');
        const reposData = await reposRes.json();
        
        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);

        setStats({
          repos: userData.public_repos || 0,
          followers: userData.followers || 0,
          stars: totalStars,
          loading: false
        });
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        setStats(prev => ({ ...prev, loading: false }));
      }
    };

    fetchGitHubData();
  }, []);

  const statItems = [
    { label: "Public Repos", value: stats.repos, icon: "📦" },
    { label: "Followers", value: stats.followers, icon: "👥" },
    { label: "GitHub Stars", value: stats.stars, icon: "⭐" }
  ];

  if (stats.loading) {
    return (
      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ width: '80px', height: '60px', background: 'var(--surface-highlight)', borderRadius: '12px', opacity: 0.5 }}></div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ 
      display: 'flex', 
      gap: '3rem', 
      marginTop: '3rem',
      flexWrap: 'wrap'
    }}>
      {statItems.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          style={{ textAlign: 'center' }}
        >
          <div className="gradient-text" style={{ 
            fontSize: '2.5rem', 
            fontWeight: 800,
            marginBottom: '0.2rem'
          }}>
            <Counter value={item.value} />
            {item.label === "Public Repos" && <span style={{ fontSize: '1.5rem' }}>+</span>}
          </div>
          <div style={{ 
            fontSize: '0.8rem', 
            color: 'var(--text-tertiary)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem'
          }}>
            <span>{item.icon}</span> {item.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GitHubStats;
