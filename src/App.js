import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import * as actions from './store/actions';

const App = (props) => {
  const { onAutoLogin } = props;
  
  useEffect(() => {
    onAutoLogin();
  }, [onAutoLogin]);

  const loggedOutRoute = <Route path="/" component={Home} />;
  const loggedInRoutes = (
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  )
  
  return props.isLoggedIn ? loggedInRoutes : loggedOutRoute;
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.userId !== null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAutoLogin: () => dispatch(actions.autoLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);