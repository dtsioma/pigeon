import React from 'react';

import classes from './Subtitle.module.css';

const Subtitle = (props) => {
  return <h2 className={classes.Subtitle}>{props.children}</h2>;
};

export default Subtitle;