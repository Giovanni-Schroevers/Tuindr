import { REQUEST_LOGIN, RECIEVE_LOGIN, RECIEVE_LOGIN_ERROR } from '../modules//ui/actions'

export interface IFormProps {
    remember_me?: boolean;
    requestLogin: Function;
    loginError: string
}

export interface IFormState {
    username: string;
    password: string
    token: string | null;
    submitted?: boolean;
}

export interface IState {
    loading: Boolean
    user?: IUser
    token?: string
}

export interface IReducer {
    loginError: string
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
    payload: string
}

export interface ILoginRecieveError { 
    type: typeof RECIEVE_LOGIN_ERROR
    payload: string;
}
