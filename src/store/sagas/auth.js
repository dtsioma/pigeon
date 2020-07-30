import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';

export function* loginSaga(action) {
  yield put(actions.loginInit());

  const userData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  };
  const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC2GCvYAn-VSPpa0cPPLG0QkplyZvij3zY';

  try {
    const response = yield axios.post(url, userData);
    const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);

    yield localStorage.setItem('userId', response.data.localId);
    yield localStorage.setItem('token', response.data.idToken);
    yield localStorage.setItem('expirationDate', expirationDate);
    yield put(actions.loginSuccess(response.data.localId, response.data.idToken));
  } catch (err) {
    yield put(actions.loginFail(err));
  }
}

export function* autoLoginSaga(action) {
  const token = localStorage.getItem('token');

  if (!token) {
    yield put(actions.logout());
  } else {
    const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
    if (expirationDate <= new Date()) {
      yield put(actions.logout());
    } else {
      const userId = localStorage.getItem('userId');
      yield put(actions.loginSuccess(userId, token));
    }
  }
}

export function* logoutSaga(action) {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('userId');
  yield localStorage.removeItem('expirationDate');
  yield put(actions.logoutSuccess());
}

export function* signupSaga(action) {
  yield put(actions.signupInit());

  const userData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  }
  const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC2GCvYAn-VSPpa0cPPLG0QkplyZvij3zY';

  try {
    const response = yield axios.post(url, userData);
    const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000)

    yield localStorage.setItem('userId', response.data.localId);
    yield localStorage.setItem('token', response.data.idToken);
    yield localStorage.setItem('expirationDate', expirationDate);
    yield put(actions.signupSuccess(response.data.localId, response.data.idToken));
  } catch (err) {
    yield put(actions.signupFail(err));
  }
}