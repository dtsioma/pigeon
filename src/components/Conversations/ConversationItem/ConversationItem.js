import React, { useCallback, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from '../../../';
import axios from 'axios';
import { Link } from 'react-router-dom';

import classes from './ConversationItem.module.css';

const ConversationItem = (props) => {
  // const [username, setUsername] = useState(null);
  const secondUsername = props.conversation.usernames.filter(un => un !== props.username)[0];
  const secondUserId = props.conversation.users.filter(uid => uid !== props.userId)[0];
  
  // const fetchUsername = useCallback(() => {
  //   axios.get(`https://pigeon-e9149.firebaseio.com/users/${secondUser}.json`)
  //     .then(res => {
  //       setUsername(res.data.username);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, [secondUser]);

  // useEffect(() => {
  //   fetchUsername();
  // }, [fetchUsername]);

  const openConversationHandler = () => {
    browserHistory.push('/conversation/' + secondUsername);
  }

  const messages = props.conversation.messages;

  return (
    <Link to={"/conversation/" + secondUsername} style={{textDecoration: 'none'}}>
      <div className={classes.ConversationItem} onClick={openConversationHandler}>
        <span className={classes.Username}><strong>@{secondUsername}</strong></span>
        <span className={classes.LastMessage}>
          <strong>{messages[messages.length - 1].sender === secondUserId ? '@: ' : 'You: '}</strong> 
          {messages[messages.length - 1].text}
          </span>
      </div>
    </Link>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    username: state.auth.username
  }
}

export default connect(mapStateToProps)(ConversationItem);