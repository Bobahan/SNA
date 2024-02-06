import { StateSchema } from '@/app/provider/StoreProvider';

export const getUser = (state: StateSchema) => state.user.authData;