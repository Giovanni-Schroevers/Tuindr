import { REQUEST_LOGIN, RECIEVE_LOGIN, RECIEVE_LOGIN_ERROR, SET_CURRENT_USER, SEND_NEW_PASSWORD } from '../modules//ui/actions'

export interface IFormProps {
    remember_me?: boolean;
    requestLogin: Function;
    requestPassword: Function;
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
    username: string
    password: string
    isAuthenticated: boolean
    type: typeof SET_CURRENT_USER
}

export interface IToken {
    sub: string
    exp: string
}


export interface IResetPassword {
    type: typeof SEND_NEW_PASSWORD,
    payload: IUser
}
export interface IAction {
    type: typeof REQUEST_LOGIN,
    payload: IUser
}

export interface ILoginRequest {
    type: typeof REQUEST_LOGIN
    payload: IUser
}

export interface IStatus {
    status: number
}

export interface ILoginRecieve {
    type: typeof RECIEVE_LOGIN
    payload: IToken
    
}

export interface ILoginRecieveError { 
    type: typeof RECIEVE_LOGIN_ERROR
    payload: IStatus;
}
