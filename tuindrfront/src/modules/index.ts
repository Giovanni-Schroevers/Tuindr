import { combineReducers } from 'redux';
import { fork, all} from 'redux-saga/effects'

import Loginreducer from './ui/reducers/Loginreducer';
import * as uiSagas from './ui/sagas';

export const rootReducer = combineReducers({
  Loginreducer
});

export function* rootSaga() {
  yield all([
    ...Object.values(uiSagas),
  ].map(fork));
}
