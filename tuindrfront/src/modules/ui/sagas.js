import { REQUEST_LOGIN, recieveLogin } from "./actions";
import {takeEvery, call, put} from 'redux-saga/effects';
import { login } from './api';

function* callRequestLogin(action) {
    let results = yield call(login, action.payload);

    yield put(recieveLogin(results));
}

export function* requestLoginSaga() {
    yield takeEvery(REQUEST_LOGIN, callRequestLogin);
}