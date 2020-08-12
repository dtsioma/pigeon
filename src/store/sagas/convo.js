import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';

export function* sendMessageSaga(action) {
  yield put(actions.sendMessageInit());

  
  try {
    const response = yield axios.post(`https://pigeon-e9149.firebaseio.com/conversations/${action.convoId}/messages.json`, action.message);

    yield put(actions.addMessage(response.data.name, action.message));
    yield console.log(response);
  } catch (err) {
    yield console.log(err);
  }
}