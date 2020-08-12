import React from 'react';
import { connect } from 'react-redux';

import classes from './ConvoMessage.module.css';

const ConvoMessage = (props) => {
  const convoMessageClasses = [classes.ConvoMessage, props.sender === props.userId ? classes.FromMe : classes.ToMe];

  return (
    <div className={convoMessageClasses.join(' ')}>
      {props.text}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId
  }
}

export default connect(mapStateToProps)(ConvoMessage);