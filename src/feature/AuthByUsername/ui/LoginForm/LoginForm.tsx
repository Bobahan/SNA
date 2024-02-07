import React, { useCallback} from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Button } from '@/shared/UIKit/Button/Button';
import { Input } from '@/shared/UIKit/Input/Input';
import { loginReducer, setPassword, setUsername } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { Text, TextTheme } from '@/shared/UIKit/Text/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError';
import { DynamicModuleLoader, ReducersList } from '@/shared/libs/components/DynamicModuleLoader';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string,
}

const initialReducers: ReducersList = {
  login: loginReducer
};

const LoginForm: React.FC<LoginFormProps> = () => {
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

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
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.LoginForm, {}, [])}>
        <Text title='Форма авторизации'/>
        {error && <Text text={error} theme={TextTheme.ERROR}/>}
        <Input placeholder='Логин' type='text' value={username} onChange={onChangeUsername}/>
        <Input placeholder='Пароль' type='password' value={password} onChange={onChangePassword}/>
        <Button disabled={isLoading} onClick={onLoginClick}>Войти</Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default LoginForm;