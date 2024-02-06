import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { loginReducer } from '@/feature/AuthByUsername/model/slice/loginSlice';

export const createReduxStore = (initialState?: StateSchema) => {

  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    login: loginReducer
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV,
    // для тестов, для storybook подготавливаем нужные данные
    preloadedState: initialState
  });
};