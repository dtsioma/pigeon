import React from 'react';

import classes from './ConversationsList.module.css';
import ConversationItem from '../ConversationItem/ConversationItem';

const ConversationsList = (props) => {
  const convosList = props.conversations.map(convo => (
    <ConversationItem conversation={convo} key={convo.id} />
  ));

  return (
    <div className={classes.ConversationsList}>
      {convosList}
    </div>
  );
};

export default ConversationsList;