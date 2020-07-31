import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import reducer from './store/reducers/auth';
import createSagaMiddleware from 'redux-saga';
import { watchAuth } from './store/sagas';
import { createBrowserHistory } from 'history';

import './index.css';
import App from './App';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer, 
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);

export const browserHistory = createBrowserHistory();

sagaMiddleware.run(watchAuth);

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
