import React, { useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';

const defaultTheme = Boolean(localStorage.getItem(LOCAL_STORAGE_THEME_KEY)) || Boolean(true);

const ThemeProvider: React.FC = ({ children }: any) => {
  const [theme, setTheme] = useState(defaultTheme);

  const themeProviderProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={themeProviderProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
