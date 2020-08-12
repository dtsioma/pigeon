import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { checkValidity } from '../../../shared/utility';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

import classes from './Form.module.css';
import Button from '../Button/Button';

const Form = (props) => {
  const configControls = props.config.controls;
  
  const [formControls, setFormControls] = useState(configControls);
  const [formIsDirty, setFormIsDirty] = useState(false);

  useEffect(() => {
    setFormControls(configControls);
  }, [configControls]);

  const inputChangeHandler = (event, ctrlKey) => {
    let activeControl = formControls[ctrlKey];
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

    let user = null;
  
    switch (props.config.action) {
      case 'login':
        user = {
          email: formControls.email.value,
          password: formControls.password.value
        }
        props.onLogin(user);
        break;
      case 'signup':
        user = {
          email: formControls.email.value,
          username: formControls.username.value,
          password: formControls.password.value
        }
        props.onSignup(user); break;
      default: throw new Error('Unexpected form action:', props.config.action);
    }
  }

  let formContent = Object.keys(formControls).map(ctrlKey => {
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
    <form className={classes.Form} onSubmit={submitHandler}>
      {formContent}
      {formButton}
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isLoggedIn: state.auth.userId !== null,
    userId: state.auth.userId
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