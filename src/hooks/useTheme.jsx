import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Initialize theme from localStorage or default to 'system'
    const [theme, setThemeState] = useState(() => {
        return localStorage.getItem('theme') || 'system';
    });

    // State to track the actual active theme ('light' or 'dark')
    const [resolvedTheme, setResolvedTheme] = useState('light');

    // Function to update theme state and localStorage
    const setTheme = (newTheme) => {
        setThemeState(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    // Effect to handle theme application and system preference changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        const applyTheme = () => {
            let targetTheme = 'light';

            if (theme === 'system') {
                targetTheme = mediaQuery.matches ? 'dark' : 'light';
            } else {
                targetTheme = theme;
            }

            setResolvedTheme(targetTheme);
            document.documentElement.setAttribute('data-theme', targetTheme);
        };

        applyTheme();

        const handleSystemChange = () => {
            if (theme === 'system') {
                applyTheme();
            }
        };

        mediaQuery.addEventListener('change', handleSystemChange);

        return () => mediaQuery.removeEventListener('change', handleSystemChange);
    }, [theme]);

    // Effect to sync changes across tabs
    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === 'theme') {
                setThemeState(e.newValue || 'system');
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const resetTheme = () => {
        setTheme('system');
    };

    // Helper to toggle between light and dark (skips system)
    const toggleTheme = () => {
        if (theme === 'system') {
            const nextTheme = resolvedTheme === 'light' ? 'dark' : 'light';
            setTheme(nextTheme);
        } else {
            setTheme(theme === 'light' ? 'dark' : 'light');
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, resetTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
