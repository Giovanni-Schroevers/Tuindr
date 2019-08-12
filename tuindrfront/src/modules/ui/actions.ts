import { createAction } from 'redux-actions';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECIEVE_LOGIN = 'RECIEVE_LOGIN';
export const RECIEVE_LOGIN_ERROR = 'RECIEVE_LOGIN_ERROR';

export const requestLogin = createAction(REQUEST_LOGIN);
export const recieveLogin = createAction(RECIEVE_LOGIN);
export const recieveLoginError = createAction(RECIEVE_LOGIN_ERROR);