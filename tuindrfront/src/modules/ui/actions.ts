import { createAction } from 'redux-actions';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECIEVE_LOGIN = 'RECIEVE_LOGIN';
export const RECIEVE_LOGIN_ERROR = 'RECIEVE_LOGIN_ERROR';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SEND_NEW_PASSWORD = 'SEND_NEW_PASSWORD';
export const RECIEVE_SEND_PASSWORD_ERROR = 'RECIEVE_SEND_PASSWORD_ERROR'

export const requestLogin = createAction(REQUEST_LOGIN);
export const recieveLogin = createAction(RECIEVE_LOGIN);
export const recieveLoginError = createAction(RECIEVE_LOGIN_ERROR);
export const requestPassword = createAction(SEND_NEW_PASSWORD)
export const recieveSendPasswordError = createAction(RECIEVE_SEND_PASSWORD_ERROR)