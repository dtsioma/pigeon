import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  let margin = props.margin ? props.margin : 0;
  let buttonClasses = [classes.Button, classes[props.color]];
  buttonClasses.push(props.fullWidth ? classes.FullWidth : null);
  return (
    <button 
      className={buttonClasses.join(' ')} 
      style={{margin: margin}} 
      disabled={props.disabled}
      onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default Button;