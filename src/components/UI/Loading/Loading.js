import React from 'react';

import classes from './Loading.module.css';

const Loading = (props) => {
  console.log(props);
  let loadingHeight = 0;
  if (props.fullscreen) {
    loadingHeight = '100vh';
  } else {
    loadingHeight = props.height;
  }

  return (
    <div className={classes.Loading} style={{height: loadingHeight}}>
      <div className={classes.Loader}>Loading...</div>
    </div>
  );
};

export default Loading;