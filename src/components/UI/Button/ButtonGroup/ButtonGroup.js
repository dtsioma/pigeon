import React from 'react';

import classes from './ButtonGroup.module.css';

const ButtonGroup = (props) => {
  return <div className={classes.ButtonGroup}>{props.children}</div>;
};

export default ButtonGroup;