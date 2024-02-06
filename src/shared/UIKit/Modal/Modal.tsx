import React, { useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps{
  className?: string
  children: React.ReactNode
  isOpen?: boolean,
  lazy?: boolean,
  onClose?: () => void
}

const ANIMATION_TIME = 300;

export const Modal: React.FC<ModalProps> = ({className, children, isOpen, lazy, onClose}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if(isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHanlder = useCallback(() => {
    if(onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_TIME);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if(e.key === 'Escape'){
      closeHanlder();
    }
  }, [closeHanlder]);

  useEffect(() => {
    if(isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  };

  // если компонент lazy и он не вмонтирован возвращаем null DOM node
  if(lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHanlder}>
          <div className={cls.content} onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

