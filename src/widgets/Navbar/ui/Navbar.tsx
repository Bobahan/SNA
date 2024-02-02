import React from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/UIKit/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={classNames(cls.navbar, {}, [])}>
      <h1>MY APP</h1>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
          Main Page
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          About Page
        </AppLink>
      </div>
    </div>
  );
};
