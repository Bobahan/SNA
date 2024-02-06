import React, { useState } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { ThemeSwitcher } from '@/shared/UIKit/ThemeSwitcher';
import { LangSwitcher } from '@/shared/UIKit/LangSwitcher/LangSwitcher';
import cls from './Sidebar.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/UIKit/AppLink/AppLink';
import { Button } from '@/shared/UIKit/Button/Button';
interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const handleToggle = () => {
    setIsCollapsed((isCollapsed) => !isCollapsed);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [
        className,
      ])}>
      <Button onClick={handleToggle} className={cls.btn}>---</Button>
      <div className={cls.pages}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Главная страница</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
      </div>
      <div className={cls.switcher}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
