import React, { InputHTMLAttributes } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = React.memo(({ className, value, onChange, type = 'text', placeholder, ...otherProps }: InputProps) => {

  const onChangeHalder = (e: React.ChangeEvent<HTMLInputElement>) => {
    // опциональная цепочка, если функции нет то она не будет вызвана
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [])}>
      {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
      <input value={value} onChange={onChangeHalder} {...otherProps} type={type} className={classNames(cls.Input, {}, [className])} />
    </div>
  );
});