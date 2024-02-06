import React, { ButtonHTMLAttributes } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clear_inverted',
  OUTLINED = 'outlined'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, theme, disabled, ...otherProps } = props;

  return (
    <button disabled={disabled} {...otherProps} className={classNames(cls.Button, {[cls.disabled]: disabled}, [className, cls[theme]])}>
      {children}
    </button>
  );
};
