import React from 'react';
import { connect } from 'react-redux';

import classes from './ConvoDialog.module.css';
import ConvoMessage from '../ConvoMessage/ConvoMessage';

const ConvoDialog = (props) => {
  let convoMessages = [];

  if (props.conversation) {
    for (let msgId in props.conversation.messages) {
      const message = props.conversation.messages[msgId];
      convoMessages.push(
        <ConvoMessage
          date={message.date}
          sender={message.sender}
          text={message.text} 
          key={msgId} />
      );
    }
  }


  return (
    <div className={classes.ConvoDialog}>
      {convoMessages}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    conversation: state.convo.activeConvo
  }
}

export default connect(mapStateToProps)(ConvoDialog);