import React from 'react';
import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/libs/classNames/classNames';

export const NotFoundPage = () => {
  const {t} = useTranslation();

  return (
    <div className={classNames(cls.NotFoundPage, {}, ['page-wrapper'])}>
      <h1>{t('Страница не найдена')}</h1>
    </div>
  );
};
