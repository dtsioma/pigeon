import React from 'react';

import classes from './ConvoInput.module.css';

const ConvoInput = (props) => {
  return (
    <input 
      value={props.message}
      className={classes.ConvoInputField} 
      onChange={props.changed}
      placeholder="Say something..." />
  );
};

export default ConvoInput;