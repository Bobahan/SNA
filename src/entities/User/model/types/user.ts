// то что будет прилетать к нам из сервера
export interface User {
    id: number,
    email: string
}

export interface UserSchema {
    authData?: User
}