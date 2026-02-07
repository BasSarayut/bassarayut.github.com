import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button 
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            style={{
                background: 'rgba(255,255,255,0.2)',
                border: '1px solid var(--glass-border)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.background = 'var(--surface-color-hover)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
            }}
        >
            {theme === 'light' ? (
                // Moon Icon (Switch to Dark)
                <Moon size={20} strokeWidth={2} />
            ) : (
                // Sun Icon (Switch to Light)
                <Sun size={20} strokeWidth={2} />
            )}
        </button>
    );
};

export default ThemeToggle;
