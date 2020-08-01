import React, { useCallback, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from '../../../';
import axios from 'axios';
import { Link } from 'react-router-dom';

import classes from './ConversationItem.module.css';

const ConversationItem = (props) => {
  const [username, setUsername] = useState(null);
  const secondUser = props.conversation.users.filter(uid => uid !== props.userId)[0];
  console.log(secondUser);
  
  const fetchUsername = useCallback(() => {
    axios.get(`https://pigeon-e9149.firebaseio.com/users/${secondUser}.json`)
      .then(res => {
        console.log(res);
        setUsername(res.data.username);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetchUsername();
  }, [fetchUsername]);

  const openConversationHandler = () => {
    browserHistory.push('/conversation/' + username);
  }

  const messages = props.conversation.messages;

  return (
    <Link to={"/conversation/" + username} style={{textDecoration: 'none'}}>
      <div className={classes.ConversationItem} onClick={openConversationHandler}>
        <span className={classes.Username}><strong>@{username}</strong></span>
        <span className={classes.LastMessage}><strong>@:</strong> {messages[messages.length - 1].text}</span>
      </div>
    </Link>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.userId
  }
}

export default connect(mapStateToProps)(ConversationItem);