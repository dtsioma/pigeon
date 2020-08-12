import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { watchAuth, watchConversations, watchConvo } from './store/sagas';
import { createBrowserHistory } from 'history';

import authReducer from './store/reducers/auth';
import conversationsReducer from './store/reducers/conversations';
import convoReducer from './store/reducers/convo';

import './index.css';
import App from './App';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer,
  conversations: conversationsReducer,
  convo: convoReducer
});

const store = createStore(
  rootReducer, 
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);

export const browserHistory = createBrowserHistory();

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchConversations);
sagaMiddleware.run(watchConvo);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router history={browserHistory}>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
