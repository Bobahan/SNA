import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '../Button/Button';
import { cn } from '@/shared/libs/cn';
import cls from './LangSwitcher.module.scss';
import React from 'react';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = () => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button className={cn(cls.LangSwitcher, {}, [])} theme={ButtonTheme.CLEAR} onClick={toggle}>
      {t('Язык')}
    </Button>
  );
};
