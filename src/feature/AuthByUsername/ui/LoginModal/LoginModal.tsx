import { Modal } from '@/shared/UIKit/Modal/Modal';
import { classNames } from '@/shared/libs/classNames/classNames';
import React, { Suspense } from 'react';
import cls from './LoginModal.module.scss';
import { LoginFormLazy } from '../LoginForm/LoginFormLazy';
import { Loader } from '@/shared/UIKit/PageLoader/ui/Loader';

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

const LoginModal: React.FC<LoginModalProps> = ({isOpen, onClose}) => {
  return (
    <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames(cls.LoginModal, {}, [])}>
      <Suspense fallback={<Loader />}>
        <LoginFormLazy />
      </Suspense>
    </Modal>
  );
};

export default LoginModal;