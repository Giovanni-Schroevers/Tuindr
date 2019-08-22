import { createAction } from 'redux-actions';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECIEVE_LOGIN = 'RECIEVE_LOGIN';
export const RECIEVE_LOGIN_ERROR = 'RECIEVE_LOGIN_ERROR';

export const REQUEST_SEND_NEW_PASSWORD_EMAIL = 'REQUEST_SEND_NEW_PASSWORD_EMAIL';
export const RECIEVE_SEND_NEW_PASSWORD_EMAIL = 'RECIEVE_SEND_NEW_PASSWORD_EMAIL';
export const RECIEVE_SEND_NEW_PASSWORD_EMAIL_ERROR = 'RECIEVE_SEND_NEW_PASSWORD_EMAIL_ERROR';

export const REQUEST_RESET_PASSWORD = 'REQUEST_RESET_PASSWORD';
export const RECIEVE_RESET_PASSWORD = 'RECIEVE_RESET_PASSWORD';
export const RECIEVE_RESET_PASSWORD_ERROR = 'RECIEVE_RESET_PASSWORD_ERROR';

export const requestLogin = createAction(REQUEST_LOGIN);
export const recieveLogin = createAction(RECIEVE_LOGIN);
export const recieveLoginError = createAction(RECIEVE_LOGIN_ERROR);

export const requestPasswordEmail = createAction(REQUEST_SEND_NEW_PASSWORD_EMAIL);
export const recievePasswordEmail = createAction(RECIEVE_SEND_NEW_PASSWORD_EMAIL);
export const recievePasswordEmailError = createAction(RECIEVE_SEND_NEW_PASSWORD_EMAIL_ERROR);

export const requestResetPassword = createAction(REQUEST_RESET_PASSWORD);
export const recieveResetPassword = createAction(RECIEVE_RESET_PASSWORD);
export const recieveResetPasswordError = createAction(RECIEVE_RESET_PASSWORD_ERROR);
