import { createSlice } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import type {PayloadAction} from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false
};

export const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // обычные actions которые заполняют state
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
  },

  // асинхронные actions
  extraReducers(builder) {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })

      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.isLoading = false;
      })

      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const {actions: {setUsername, setPassword}, reducer: loginReducer} = loginSlice;