import React, { useCallback, useState } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@/shared/UIKit/Button/Button';
import { LoginModal } from '@/feature/AuthByUsername';
import cls from './Navbar.module.scss';
import { useSelector } from 'react-redux';
import { getUser } from '@/entities/User/model/selectors/getUser';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { logout } from '@/entities/User/model/slice/userSlice';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const {t} = useTranslation();
  const user = useSelector(getUser);
  const dispatch = useAppDispatch();
  
  const handleModalHide = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const handleModalShow = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

  if(user) {
    return (
      <div className={classNames(cls.navbar, {}, [])}>
        <h1>MY APP</h1>
        <div className={cls.links}>
          <Button theme={ThemeButton.CLEAR_INVERTED} onClick={handleLogout}>{t('Выйти')}</Button>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(cls.navbar, {}, [])}>
      <h1>MY APP</h1>
      <div className={cls.links}>
        <Button theme={ThemeButton.CLEAR_INVERTED} onClick={handleModalShow}>{t('Войти')}</Button>
        <LoginModal isOpen={isAuthModal} onClose={handleModalHide}/>
      </div>
    </div>
  );
};