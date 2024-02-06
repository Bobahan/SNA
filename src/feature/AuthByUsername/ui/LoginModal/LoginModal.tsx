import { Modal } from '@/shared/UIKit/Modal/Modal';
import { classNames } from '@/shared/libs/classNames/classNames';
import React from 'react';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal: React.FC<LoginModalProps> = ({isOpen, onClose}) => {
  return (
    <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames(cls.LoginModal, {}, [])}>
      <LoginForm />
    </Modal>
  );
};