import React from 'react';

import classes from './ConvoInputField.module.css';

const ConvoInputField = (props) => {
  return (
    <input 
      className={classes.ConvoInputField} 
      onChange={props.changed}
      placeholder="Say something..." />
  );
};

export default ConvoInputField;