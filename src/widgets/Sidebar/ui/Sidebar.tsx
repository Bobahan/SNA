import React, { useState } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from '@/shared/UIKit/ThemeSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const handleToggle = () => {
    setIsCollapsed((isCollapsed) => !isCollapsed);
  };

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [className])}>
      <button onClick={handleToggle}>HELLO</button>
      <div className={cls.switcher}>
        <ThemeSwitcher />
        {/* LangSwitcher */}
      </div>
    </div>
  );
};
