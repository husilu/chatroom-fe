import ajax from './service'

export interface User {
 username: string,
 password: string
}

export const loginFetch = (user: User) => {
    return ajax.post('users/login', user)
}

export const registerFetch = (user: User) => {
    return ajax.post('users', user)
}

export const getUserFetch = (user: User) => {
    return ajax.get('users')
}