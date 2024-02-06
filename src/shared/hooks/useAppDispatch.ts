import { createReduxStore } from '@/app/provider/StoreProvider';
import { useDispatch } from 'react-redux';

const store = createReduxStore();

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();