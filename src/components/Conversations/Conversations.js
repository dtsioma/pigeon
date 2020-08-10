import React from 'react';
import { connect } from 'react-redux';

import classes from './Conversations.module.css';
import ConversationsNotFound from './ConversationsNotFound/ConversationsNotFound';
import ConversationsList from './ConversationsList/ConversationsList';
import Subtitle from '../UI/Text/Subtitle/Subtitle';
import Loading from '../UI/Loading/Loading';

const Conversations = (props) => {
  let convosBlock = (
    <ConversationsNotFound />
  );

  if (props.conversations.length !== 0) {
    convosBlock = (
      <div className={classes.Wrapper}>
        <Subtitle centered>Conversations</Subtitle>
        <ConversationsList />
      </div>
    )
  }

  if (props.loading) {
    return <Loading height="calc(100vh - 87px)" />;
  }

  return (
    <div className={classes.Conversations}>
      {convosBlock}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    conversations: state.conversations.convos,
    loading: state.conversations.loading
  }
}

export default connect(mapStateToProps)(Conversations);