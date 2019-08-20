import { REQUEST_LOGIN, recieveLogin, recieveLoginError } from "./actions";
import { takeEvery, call, put} from 'redux-saga/effects';
import { login } from './api';
import { IAction } from '../../interfaces'
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
