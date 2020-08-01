import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import classes from './Conversations.module.css';
import ConversationsNotFound from './ConversationsNotFound/ConversationsNotFound';
import ConversationsList from './ConversationsList/ConversationsList';
import Subtitle from '../UI/Text/Subtitle/Subtitle';

const Conversations = (props) => { 
  const [convos, setConvos] = useState([]);
  const userId = props.userId;

  const fetchConvos = () => {
    axios.get(`https://pigeon-e9149.firebaseio.com/conversations.json`)
      .then(res => {
        const fetchedConvos = [];
        for (let convo in res.data) {
          if (res.data[convo].users.includes(userId)) {
            fetchedConvos.push({
              ...res.data[convo],
              id: convo
            });
          }
        }
        setConvos(fetchedConvos);
      })
      .catch(err => { console.log(err.response); });
  }

  const addConvo = () => {
    axios.post('https://pigeon-e9149.firebaseio.com/conversations.json', {
      users: [
        '7C5B4vzLUKgwfBF0IVHeIhI9QDK2',
        'NvwEKG7tC3QeuE6aOnboRlU99Ht1'
      ],
      messages: [
        {
          sender: '7C5B4vzLUKgwfBF0IVHeIhI9QDK2',
          text: 'Hi, my name is Daniil',
          date: new Date(new Date().getTime() - 1000)
        },
        {
          sender: 'NvwEKG7tC3QeuE6aOnboRlU99Ht1',
          text: 'Hello, that\'s my response',
          date: new Date()
        }
      ]
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
      })
  }

  useEffect(() => {
    // addConvo();
    fetchConvos();
  }, []);

  let convosBlock = (
    <ConversationsNotFound />
  );

  if (convos.length !== 0) {
    convosBlock = (
      <div className={classes.Wrapper}>
        <Subtitle centered>Conversations</Subtitle>
        <ConversationsList conversations={convos} />
      </div>
    )
  }

  return (
    <div className={classes.Conversations}>
      {convosBlock}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.userId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);