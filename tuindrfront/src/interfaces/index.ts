import { REQUEST_LOGIN, RECIEVE_LOGIN, RECIEVE_LOGIN_ERROR } from '../modules//ui/actions'

export interface IFormProps {
    remember_me?: boolean;
    requestLogin: Function;
}

export interface IFormState {
    username: string;
    password: string
    submitted?: boolean;
}

export interface IState {
    loading: Boolean
    user?: IUser
    token?: string
}

export interface IUser {
    username: string,
    password: string
}

export interface IToken {
    token: string
}

export interface IAction {
    type: typeof REQUEST_LOGIN,
    payload: IUser
}

export interface ILoginRequest {
    type: typeof REQUEST_LOGIN
    payload: IUser
}

export interface ILoginRecieve {
    type: typeof RECIEVE_LOGIN
    payload: IToken
}

export interface ILoginRecieveError { 
    type: typeof RECIEVE_LOGIN_ERROR
}
