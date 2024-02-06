import { classNames } from '@/shared/libs/classNames/classNames';
import React, { useCallback } from 'react';
import cls from './LoginForm.module.scss';
import { Button } from '@/shared/UIKit/Button/Button';
import { Input } from '@/shared/UIKit/Input/Input';
import { useSelector } from 'react-redux';
import { setPassword, setUsername } from '../../model/slice/loginSlice';
import { getLogin } from '../../model/selectors/getLogin';
import { loginByUsername } from '../../model/services/loginByUsername';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { Text, TextTheme } from '@/shared/UIKit/Text/Text';

interface LoginFormProps {
    className?: string,
}

export const LoginForm: React.FC<LoginFormProps> = () => {
  const dispatch = useAppDispatch();
  const {username, password, isLoading, error} = useSelector(getLogin);

  const onChangeUsername = useCallback((username: string) => {
    dispatch(setUsername(username));
  }, [username]);

  const onChangePassword = useCallback((password: string) => {
    dispatch(setPassword(password));
  }, [password]);

  const onLoginClick = async () => {
    await dispatch(loginByUsername({username, password}));
  };

  return (
    <div className={classNames(cls.LoginForm, {}, [])}>
      <Text title='Форма авторизации'/>
      {error && <Text text={error} theme={TextTheme.ERROR}/>}
      <Input placeholder='Логин' type='text' value={username} onChange={onChangeUsername}/>
      <Input placeholder='Пароль' type='password' value={password} onChange={onChangePassword}/>
      <Button disabled={isLoading} onClick={onLoginClick}>Войти</Button>
    </div>
  );
};