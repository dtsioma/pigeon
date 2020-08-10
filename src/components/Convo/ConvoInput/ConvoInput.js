import React from 'react';

import classes from './ConvoInput.module.css';
import Button from '../../UI/Button/Button';
import ConvoInputField from './ConvoInputField/ConvoInputField';

const ConvoInput = () => {
  return (
    <div className={classes.ConvoInput}>
      <ConvoInputField />
      <Button color="Black">Send</Button>
    </div>
  );
};

export default ConvoInput;