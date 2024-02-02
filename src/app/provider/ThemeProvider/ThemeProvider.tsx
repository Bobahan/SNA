import React, { useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme } from './ThemeContext';
import { ThemeContext } from './index';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme as Theme);

  const handleChangeTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  const defaultProps = useMemo(() => ({ theme, setTheme: handleChangeTheme }), [theme]);

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
