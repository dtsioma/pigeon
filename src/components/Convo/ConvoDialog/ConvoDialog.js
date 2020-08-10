import React from 'react';
import { connect } from 'react-redux';

import classes from './ConvoDialog.module.css';
import ConvoMessage from '../ConvoMessage/ConvoMessage';

const ConvoDialog = (props) => {
  // console.log(props.conversation);

  let convoMessages = null;

  if (props.conversation) {
    convoMessages = props.conversation.messages.map((msg, index) => (
      <ConvoMessage
        date={msg.date}
        sender={msg.sender}
        text={msg.text} 
        key={msg.date}
        marginTop={index !== 0} />
    ));

    console.log(convoMessages);
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