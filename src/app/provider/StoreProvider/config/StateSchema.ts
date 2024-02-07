import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User/model/types/user';
import { LoginSchema } from '@/feature/AuthByUsername';
import { EnhancedStore, ReducersMapObject, AnyAction, Reducer } from '@reduxjs/toolkit';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,

    // асинхронный редюсер
    login?: LoginSchema
}

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>; // возвращает объект с редюсерами
    reduce: (state: StateSchema, action: AnyAction) => any;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore {
    reducerManager: ReducerManager
}

// ключи это название редюсеров
export type StateSchemaKey = keyof StateSchema