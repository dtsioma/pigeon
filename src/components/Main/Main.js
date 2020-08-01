import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Conversations from '../Conversations/Conversations';
import Convo from '../Convo/Convo';

const Main = (props) => {

  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/conversation" component={Convo} />
        <Route path="/" component={Conversations} />
      </Switch>
    </Fragment>
  );
};

export default Main;