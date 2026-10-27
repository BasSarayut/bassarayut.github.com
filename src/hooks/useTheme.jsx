import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    return localStorage.getItem('endfield-scheme') || 'light';
  });

  const [palette, setPaletteState] = useState(() => {
    const saved = localStorage.getItem('endfield-palette');
    return saved === 'wuling' ? 'wuling' : 'valley';
  });

  const [resolvedTheme, setResolvedTheme] = useState('light');

  const setTheme = newTheme => {
    setThemeState(newTheme);
    localStorage.setItem('endfield-scheme', newTheme);
  };

  const setPalette = newPalette => {
    const next = newPalette === 'wuling' ? 'wuling' : 'valley';
    setPaletteState(next);
    localStorage.setItem('endfield-palette', next);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      const targetTheme = theme === 'system' ? (mediaQuery.matches ? 'dark' : 'light') : theme;
      setResolvedTheme(targetTheme);
      document.documentElement.setAttribute('data-theme', targetTheme);
    };

    applyTheme();
    const handleSystemChange = () => {
      if (theme === 'system') applyTheme();
    };
    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette);
  }, [palette]);

  const toggleTheme = () => {
    const next = resolvedTheme === 'light' ? 'dark' : 'light';
    setTheme(next);
  };

  const togglePalette = () => {
    setPalette(palette === 'valley' ? 'wuling' : 'valley');
  };

  const replayBoot = () => {
    window.dispatchEvent(new CustomEvent('endfield:replay-boot'));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        toggleTheme,
        palette,
        setPalette,
        togglePalette,
        replayBoot,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
