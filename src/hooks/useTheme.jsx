import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // 1. Persisted User Preference (High Priority)
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;

        // 2. Real-Time Logic (Requested behavior)
        // Dark Mode between 6:00 PM (18) and 6:00 AM (6)
        const hour = new Date().getHours();
        const isNightTime = hour >= 18 || hour < 6;
        
        return isNightTime ? 'dark' : 'light';
    });

    useEffect(() => {
        // Update DOM attribute
        document.documentElement.setAttribute('data-theme', theme);
        // Save to local storage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
