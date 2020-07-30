import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Modal from './components/UI/Modal/Modal';
import * as actions from './store/actions';

const App = (props) => {
  const { onAutoLogin } = props;

  useEffect(() => {
    onAutoLogin();
  }, [onAutoLogin]);

  return (
    <Switch>
      <Route path="/" component={props.isLoggedIn ? Main : Home} />
    </Switch>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.userId !== null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAutoLogin: () => dispatch(actions.autoLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);