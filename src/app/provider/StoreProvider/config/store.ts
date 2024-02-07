import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { loginReducer } from '@/feature/AuthByUsername/model/slice/loginSlice';
import { createReducerManager } from './reducerManager';

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    // login: loginReducer
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    // подготавливаем нужные данные для тестов, для storybook 
    devTools: __IS_DEV,
    preloadedState: initialState
  });

  // @ts-ignore
  store.reducerManager = reducerManager
  return store;
};