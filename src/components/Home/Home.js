import React from 'react';
import { connect } from 'react-redux';

import classes from './Home.module.css';
import { Switch, Route } from 'react-router-dom';
import HomeContent from './HomeContent/HomeContent';
import Auth from '../Auth/Auth';
import Title from '../UI/Text/Title/Title';
import Loading from '../UI/Loading/Loading';

const Home = (props) => {
  if (props.loading) {
    return <Loading fullscreen />;
  }

  return (
    <div className={classes.Home}>
      <Title>Start messaging now.</Title>
      <Switch>
        <Route path="/login" exact component={Auth} />
        <Route path="/create-account" exact component={Auth} />
        <Route path="/" component={HomeContent} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error
  }
}

export default connect(mapStateToProps)(Home);