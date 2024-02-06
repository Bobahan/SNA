import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counterSchema';

const initialState: CounterSchema = {
  value: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
      if(state.value < 0) {
        state.value = 0;
      }
    }
  }
});

// reducer экспортируем как counterSliceReducer => или еще точнее под именем counterSliceReducer
export const {actions:{increment, decrement}, reducer: counterReducer} = counterSlice;
