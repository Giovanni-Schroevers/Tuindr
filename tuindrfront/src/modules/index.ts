import { combineReducers } from 'redux';
import { fork, all} from 'redux-saga/effects'

import reducer from './ui/reducers';
import * as uiSagas from './ui/sagas';

export const rootReducer = combineReducers({
  reducer
});

export function* rootSaga() {
  yield all([
    ...Object.values(uiSagas),
  ].map(fork));
}
