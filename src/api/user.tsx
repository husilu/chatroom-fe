import ajax from './service'

export interface User {
 username: string,
 password: string
}

export const loginFetch = (user: User) => {
    return ajax.post('user/login', user)
}