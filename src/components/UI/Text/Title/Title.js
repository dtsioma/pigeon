import React from 'react';

import classes from './Title.module.css';

const Title = (props) => {
  return <h1 className={classes.Title}>{props.children}</h1>;
};

export default Title;