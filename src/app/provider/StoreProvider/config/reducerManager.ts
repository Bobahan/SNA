import { StateSchema } from '@/app/provider/StoreProvider';
import {
  AnyAction, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ReducerManager, StateSchemaKey } from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  // удаляемые ключи login | counter | user -> когда удаляем редюсер нам также его нужно удалить с state
  let keysToRemove: Array<StateSchemaKey> = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state: StateSchema, action: AnyAction) => {
      // если в массиве для удаления есть какие-то ключи то мы эти ключи полностью удаляем 
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          // удаляем по ключу из state
          delete state[key];
        });
        keysToRemove = [];
      }
      return combinedReducer(state, action);
    },
    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }
      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },
    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
}
