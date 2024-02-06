import { createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<User>) {
      state.authData = action.payload;
    },

    logout(state) {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },

    initAuthData(state) {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if(user) {
        state.authData = JSON.parse(user);
      }
    }
  }
}); 

export const {actions: {setAuthData, logout, initAuthData}, reducer: userReducer} = userSlice;