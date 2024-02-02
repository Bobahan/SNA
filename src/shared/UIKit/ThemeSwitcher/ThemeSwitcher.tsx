import React from 'react';
import { useTooggleTheme } from '@/shared/libs/useToogleTheme/useTooggleTheme';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { Theme } from '@/app/provider/ThemeProvider/ThemeContext';
import lightIcon from '@/shared/assets/light-mode.png';
import darkIcon from '@/shared/assets/dark-mode.png';
import { Button, ThemeButton } from '../Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const [theme, toggleTheme] = useTooggleTheme();

  const handleToogle = () => {
    toggleTheme();
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={handleToogle}>
      {theme === Theme.LIGHT ? <img src={darkIcon} /> : <img src={lightIcon} />}
    </Button>
  );
};
