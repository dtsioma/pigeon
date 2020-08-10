import React, { Fragment, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import Conversations from '../Conversations/Conversations';
import Convo from '../Convo/Convo';
import * as actions from '../../store/actions';

const Main = (props) => {
  const userId = props.userId;
  const onFetchConversations = props.onFetchConversations;

  useEffect(() => {
    onFetchConversations(userId);
  }, [onFetchConversations, userId]);

  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/conversation/:username" component={Convo} />
        <Route path="/" component={Conversations} />
      </Switch>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchConversations: (userId) => dispatch(actions.fetchConversations(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);