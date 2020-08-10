import { all, takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { loginSaga, autoLoginSaga, logoutSaga, signupSaga, fetchUsernameSaga } from './auth';
import { fetchConversationsSaga } from './conversations';

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.LOGIN_USER, loginSaga),
    takeEvery(actionTypes.AUTO_LOGIN, autoLoginSaga),
    takeEvery(actionTypes.LOGOUT, logoutSaga),
    takeEvery(actionTypes.SIGNUP_USER, signupSaga),
    takeEvery(actionTypes.FETCH_USERNAME, fetchUsernameSaga)
  ])
}

export function* watchConversations() {
  yield all([
    takeEvery(actionTypes.FETCH_CONVERSATIONS, fetchConversationsSaga)
  ]);
}