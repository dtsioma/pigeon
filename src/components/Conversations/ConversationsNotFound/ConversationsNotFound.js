import React from 'react';

import classes from './ConversationsNotFound.module.css';
import Subtitle from '../../UI/Text/Subtitle/Subtitle';


const ConversationsNotFound = (props) => {
  return (
    <div className={classes.ConversationsNotFound}>
      <Subtitle>You don't have any conversations yet.</Subtitle>
    </div>
  );
};

export default ConversationsNotFound;