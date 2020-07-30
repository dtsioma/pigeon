import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  const inputClasses = [classes.Input];
  if (props.shouldValidate && props.invalid && props.touched && props.formIsDirty) {
    inputClasses.push(classes.Invalid);
  }

  return (
    <label className={classes.Label}>
      <input 
        type={props.type}
        className={inputClasses.join(' ')} 
        value={props.value}
        onChange={props.changed}
        placeholder={props.placeholder} />
    </label>
  );
};

export default Input;