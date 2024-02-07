import { ReduxStoreWithManager } from '@/app/provider/StoreProvider';
import { StateSchemaKey } from '@/app/provider/StoreProvider/config/StateSchema';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { Reducer } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useStore } from 'react-redux';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  children: React.ReactNode,
  removeAfterUnmount?: boolean
  reducers: ReducersList
}

export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = ({children, removeAfterUnmount, reducers}) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
      store.reducerManager.add(key, reducer);
      dispatch({type: `@INIT ${key} reducer`});
    });

    return () => {
      if(removeAfterUnmount) {
        Object.entries(reducers).forEach(([key, _]: ReducersListEntry) => {
          store.reducerManager.remove(key);
          dispatch({type: `@DESTROY ${key} reduce`});
        });
      }
    };
  }, []);

  return (
    <>
      {children}
    </>
  );
};
