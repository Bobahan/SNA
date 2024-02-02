import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import React from 'react';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
  const { to, children, theme = AppLinkTheme.PRIMARY } = props;

  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [cls[theme]])}>
      {children}
    </Link>
  );
};
