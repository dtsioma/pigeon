import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import classes from './ConvoForm.module.css';
import Button from '../../UI/Button/Button';
import ConvoInput from './ConvoInput/ConvoInput';

const ConvoForm = (props) => {
  const [message, setMessage] = useState('');

  const inputChangedHandler = (event) => {
    setMessage(event.target.value);
  }

  const messageSentHandler = (event) => {
    event.preventDefault();
    if (message !== '') {
      console.log(message);
      const msg = {
        date: new Date(),
        sender: props.userId,
        text: message
      }
      props.onSend(props.convoId, msg);
      setMessage('');
    }
  }

  return (
    <form 
      className={classes.ConvoInput}
      onSubmit={messageSentHandler}>
      <ConvoInput
        changed={inputChangedHandler} 
        message={message} />
      <Button color="Black">Send</Button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    convoId: state.convo.activeConvo ? state.convo.activeConvo.id : null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSend: (convoId, msg) => dispatch(actions.sendMessage(convoId, msg))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConvoForm);