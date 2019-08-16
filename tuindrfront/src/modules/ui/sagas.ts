import { REQUEST_LOGIN, recieveLogin, recieveLoginError } from "./actions";
import { takeEvery, call, put} from 'redux-saga/effects';
import { login } from './api';
import { IAction } from '../../interfaces'



function* callRequestLogin(action: IAction) {
    let results = yield call(login, action.payload);
    if(typeof JSON.parse(results).token == typeof undefined)
        yield put(recieveLoginError(results));
    else 
        yield put(recieveLogin(results));
}

export function* requestLoginSaga() {
    yield takeEvery(REQUEST_LOGIN, callRequestLogin);
}
