import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
    const { resolvedTheme, toggleThemeWithTransition } = useTheme();
    const [isSpinning, setIsSpinning] = useState(false);

    const handleClick = (e) => {
        // Trigger icon spin animation
        setIsSpinning(true);
        setTimeout(() => setIsSpinning(false), 500);

        // Trigger the ripple theme transition
        toggleThemeWithTransition(e);
    };

    return (
        <button 
            onClick={handleClick}
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
                overflow: 'hidden',
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
            <span 
                className={`theme-toggle-icon${isSpinning ? ' spinning' : ''}`}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {resolvedTheme === 'light' ? (
                    <Moon size={20} strokeWidth={2} />
                ) : (
                    <Sun size={20} strokeWidth={2} />
                )}
            </span>
        </button>
    );
};

export default ThemeToggle;
