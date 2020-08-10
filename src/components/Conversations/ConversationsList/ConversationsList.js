import React from 'react';
import { connect } from 'react-redux';

import classes from './ConversationsList.module.css';
import ConversationItem from '../ConversationItem/ConversationItem';
import * as actions from '../../../store/actions';

const ConversationsList = (props) => {

  let convosList = [];

  if (Object.keys(props.conversations).length !== 0) {
    for (let convoId in props.conversations) {
      let convo = props.conversations[convoId];
      convosList.push(<ConversationItem conversation={convo} key={convo.id} />);
    }
  }

  return (
    <div className={classes.ConversationsList}>
      {convosList}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    conversations: state.conversations.convos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchConversations: (userId) => dispatch(actions.fetchConversations(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationsList);