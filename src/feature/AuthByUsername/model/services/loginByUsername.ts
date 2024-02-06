import { User } from '@/entities/User';
import { setAuthData } from '@/entities/User/model/slice/userSlice';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface LoginByUsernameProps {
  username: string,
  password: string
}

// async(authData) функция принимает данные извне
// createAsyncThunk 1 аргумент то что мы возвращаем, после авторизации сервер нам возвращает объект user с типом User
// createAsyncThunk 2 аргумент то что мы ожидаем на входе

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>('login/fetchLogin', async (authData, {rejectWithValue, dispatch}) => {
  try {
    const res = await axios.post('http://localhost:8000/login', authData);

    if(!res.data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data));
    dispatch(setAuthData(res.data));

    return res.data;
  } catch (error) {
    return rejectWithValue('error');
  }
});