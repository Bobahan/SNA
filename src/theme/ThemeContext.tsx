import { createContext } from 'react';

export const ThemeContext = createContext({});

// после закрытия браузер сохраняем тему в localStorage
export const LOCAL_STORAGE_THEME_KEY = 'theme';
