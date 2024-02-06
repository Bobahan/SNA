import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User/model/types/user';
import { LoginSchema } from '@/feature/AuthByUsername';


export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    login: LoginSchema
}