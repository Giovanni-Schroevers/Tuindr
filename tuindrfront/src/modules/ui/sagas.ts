import { takeEvery, call, put} from 'redux-saga/effects';
import { login, sendResetMail, resetPassword } from './api';
import { IAction, IResetPassword } from '../../interfaces'
import setAuth from '../../utils/setAuthorizationToken'
import jwt from 'jsonwebtoken';

import {
    REQUEST_LOGIN,
    REQUEST_SEND_NEW_PASSWORD_EMAIL,
    recieveLogin,
    recieveLoginError,
    recievePasswordEmail,
    recievePasswordEmailError,
    REQUEST_RESET_PASSWORD,
    recieveResetPasswordError,
    recieveResetPassword } 
from "./actions";



function* callRequestLogin(action: IAction) {
    let results = yield call(login, action.payload);
    results = JSON.parse(results)
    if(typeof results.token == typeof undefined){
        yield put(recieveLoginError(results));
    }
    const token = results.token
    localStorage.setItem('jwtToken', token)
    setAuth(token);
    const Tokendecode = yield jwt.decode(token)
    localStorage.setItem('User', Tokendecode.sub)
    yield put(recieveLogin(Tokendecode));
}

export function* requestLoginSaga() {
    yield takeEvery(REQUEST_LOGIN, callRequestLogin);
}

function* sendPasswordEmail(action: IResetPassword): any {
    let results = yield call(sendResetMail, action.payload);
    results = JSON.parse(results)
    if(results.code !== 200) {
        yield put(recievePasswordEmailError(results))
    }
    yield put(recievePasswordEmail(results));
}

export function* sendEmailSaga() {
    yield takeEvery(REQUEST_SEND_NEW_PASSWORD_EMAIL, sendPasswordEmail);
}

function* callRequestResetPassword(action: any) {
    let results = yield call(resetPassword, action.payload)
    results = JSON.parse(results)
    
    if(results.code !== 200) {
        yield put(recieveResetPasswordError(results))
    }
    yield put(recieveResetPassword());
}

export function* resetPasswordSaga() {
    yield takeEvery(REQUEST_RESET_PASSWORD, callRequestResetPassword)
}
