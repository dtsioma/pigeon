import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';

export function* fetchConversationsSaga(action) {
  yield put(actions.fetchConversationsInit());

  try {
    const response = yield axios.get(`https://pigeon-e9149.firebaseio.com/conversations.json`);
    // console.log(response);

    const fetchedConvos = [];
    for (let convo in response.data) {
      if (response.data[convo].users.includes(action.userId)) {
        fetchedConvos.push({
          ...response.data[convo],
          id: convo
        });
      }
    }
    // console.log(fetchedConvos);
    yield put(actions.fetchConversationsSuccess(fetchedConvos));
  } catch (err) {
    yield put(actions.fetchConversationsFailed());
  }
  // axios.get(`https://pigeon-e9149.firebaseio.com/conversations.json`)
  //   .then(res => {
  //     const fetchedConvos = [];
  //     for (let convo in res.data) {
  //       if (res.data[convo].users.includes(userId)) {
  //         fetchedConvos.push({
  //           ...res.data[convo],
  //           id: convo
  //         });
  //       }
  //     }
  //     setConvos(fetchedConvos);
  //   })
  //   .catch(err => { console.log(err.response); });
}