import { REQUEST_LOGIN, SEND_NEW_PASSWORD, SET_NEW_PASSWORD, setNewPassword, recieveLogin, recieveLoginError, requestPassword, recieveSendPasswordError  } from "./actions";
import { takeEvery, call, put} from 'redux-saga/effects';
import { login, resetPassword } from './api';
import { IAction, IResetPassword } from '../../interfaces'
import setAuth from '../../utils/setAuthorizationToken'
import jwt from 'jsonwebtoken';



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

function* sendPassword(action: IResetPassword): any {
    let results = yield call(resetPassword, action.payload);
    results = JSON.parse(results)
    if(typeof results.username == typeof undefined) {
        yield put(recieveSendPasswordError(results))
    }
    yield put(sendPassword(results.username));
    
}

export function* sendPasswordSaga() {
    yield takeEvery(SEND_NEW_PASSWORD, sendPassword);
}
