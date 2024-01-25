import React from 'react';
import { useTheme } from '@/shared/libs/useTheme';
import { cn } from '@/shared/libs/cn';

import LightIcon from '@/shared/assets/light.png';
import DarkIcon from '@/shared/assets/dark.png';
import cls from './ThemeSwitcher.module.scss';
import { Theme } from '@/app/providers/theme';
import { Button, ButtonTheme } from '../../Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={cn(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}>
      {theme === Theme.LIGHT ? (
        <img className={cn(cls.ThemeSwitcherBtn, {}, [])} src={LightIcon} />
      ) : (
        <img className={cn(cls.ThemeSwitcherBtn, {}, [])} src={DarkIcon} />
      )}
    </Button>
  );
};
