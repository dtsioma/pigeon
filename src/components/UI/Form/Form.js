import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { checkValidity } from '../../../shared/utility';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../../axios-instance';

import classes from './Form.module.css';
// import Input from './Input/Input';
import Button from '../Button/Button';

const Form = (props) => {
  const [formControls, setFormControls] = useState(props.config.controls);
  const [formIsValid, setFormIsValid] = useState(false);
  const [formIsDirty, setFormIsDirty] = useState(false);

  const inputChangeHandler = (event, ctrlKey) => {
    let activeControl = formControls[ctrlKey];
    activeControl.value = event.target.value;
    activeControl = {
      ...activeControl,
      value: event.target.value,
      valid: checkValidity(event.target.value, activeControl.validation),
      touched: true
    }
    const updatedFormControls = {
      ...formControls,
      [ctrlKey]: activeControl
    }

    setFormControls(updatedFormControls);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    let formIsValid = true;
    for (let controlKey in formControls) {
      formIsValid = formControls[controlKey].valid && formIsValid;
    }
    if (!formIsValid) {
      setFormIsDirty(true);
      return;
    }
    
    const user = {
      email: formControls.username.value,
      password: formControls.password.value
    }
    switch (props.config.action) {
      case 'login':
        props.onLogin(user); break;
      case 'signup':
        props.onSignup(user); break;
      default: throw new Error('Unexpected form action:', props.config.action);
    }
  }

  const formContent = Object.keys(formControls).map(ctrlKey => {
    const control = formControls[ctrlKey];
    const Cmp = control.component;
    return (
      <Cmp 
        {...control.props} 
        key={ctrlKey} 
        value={control.value}
        invalid={!control.valid}
        shouldValidate={control.validation}
        formIsDirty={formIsDirty}
        touched={control.touched}
        changed={(event) => inputChangeHandler(event, ctrlKey)} 
      />
    );
  });
  const formButton = (
    <Button color="Black" fullWidth>{props.loading ? 'Loading...' : props.config.buttonText}</Button>
  );

  return (
    <form className={classes.Form} onSubmit={(event) => submitHandler(event, {email: formControls.username.value, password: formControls.password.value})}>
      {formContent}
      {formButton}
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (user) => dispatch(actions.login(user)),
    onSignup: (user) => dispatch(actions.signup(user)),
    onClearError: () => dispatch(actions.clearError())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Form));