import { Theme, ThemeContext } from '@/app/provider/ThemeProvider/ThemeContext';
import { useContext } from 'react';

export const useTooggleTheme = (): [Theme, () => void] => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme);
  };

  return [theme, toggleTheme] as const;
};
