import React, { useState } from 'react';
import cls from './Sidebar.module.scss';
import { cn } from '@/shared/libs/cn';
import { ThemeSwitcher } from '@/shared/UIKit/ThemeSwitcher';
import { LangSwitcher } from '@/shared/UIKit/LangSwitcher/LangSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={cn(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={cn(cls.switchers, {}, [])}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
