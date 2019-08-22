import { REQUEST_LOGIN, RECIEVE_LOGIN, RECIEVE_LOGIN_ERROR, RECIEVE_SEND_NEW_PASSWORD_EMAIL, RECIEVE_SEND_NEW_PASSWORD_EMAIL_ERROR, RECIEVE_RESET_PASSWORD, RECIEVE_RESET_PASSWORD_ERROR } from '../modules//ui/actions'

export interface IFormProps {
    remember_me?: boolean;
    requestLogin: Function;
    requestPasswordEmail: Function;
    loginError: string;
    emailError: string;
    match: IParam;
    requestResetPassword: Function;
    setPasswordError: string;
}

interface ITest {
    token: string;
}

interface IParam {
    params: ITest;
}
export interface IFormState {
    username: string;
    password: string
    token: string | null;
    submitted?: boolean;
    password_repeat?: string;
    setPasswordError? : string;
}


export interface IState {
    loading: Boolean;
    user?: IUser;
    token?: string;
}

export interface IReducer {
    loginError: string;
    emailError: string;
    setPasswordError: string;
}

export interface IUser {
    username: string;
    password: string;
    isAuthenticated: boolean;
}

export interface IUserReset {
    username: string;
    password: string;
    token: string;
}

export interface IToken {
    sub: string;
    exp: string;
}


export interface IResetPasswordEmail {
    payload: IUser;
    type: typeof RECIEVE_SEND_NEW_PASSWORD_EMAIL;
}

export interface IResetPasswordEmailError {
    payload: IErrorObject;
    type: typeof RECIEVE_SEND_NEW_PASSWORD_EMAIL_ERROR;
}

interface IErrorObject {
    message: string;
}

export interface IAction {
    type: typeof REQUEST_LOGIN,
    payload: IUser;
}

export interface ILoginRequest {
    type: typeof REQUEST_LOGIN
    payload: IUser;
}

export interface IStatus {
    status: number;
}

export interface ILoginRecieve {
    type: typeof RECIEVE_LOGIN
    payload: IToken;
    
}

export interface ILoginRecieveError { 
    type: typeof RECIEVE_LOGIN_ERROR
    payload: IStatus;
}

export interface IResetPassword {
    type: typeof RECIEVE_RESET_PASSWORD;
    payload: IUser;
}

export interface IResetPasswordError {
    type: typeof RECIEVE_RESET_PASSWORD_ERROR;
    payload: IErrorObject;
}
