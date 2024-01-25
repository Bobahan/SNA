import React from 'react';
import { cn } from '@/shared/libs/cn';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  theme?: ButtonTheme;
}

export const Button: React.FC<ButtonProps> = ({ children, className, theme, ...props }) => {
  return (
    <button {...props} className={cn(cls.Button, {}, [className, cls[theme]])}>
      {children}
    </button>
  );
};
