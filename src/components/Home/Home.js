import React from 'react';
import { connect } from 'react-redux';

import classes from './Home.module.css';
import { Switch, Route } from 'react-router-dom';
import HomeContent from './HomeContent/HomeContent';
import Auth from '../Auth/Auth';
import Title from '../UI/Text/Title/Title';

const Home = (props) => {
  return (
    <div className={classes.Home}>
      {/* {props.loading ? <p>loading...</p> : null}
      {props.error ? <p>error</p> : null} */}
      <Title>Start messaging now.</Title>
      <Switch>
        <Route path="/" exact component={HomeContent} />
        <Route path="/login" exact component={Auth} />
        <Route path="/create-account" exact component={Auth} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Home);