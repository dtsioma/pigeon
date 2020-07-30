import React from 'react';

import classes from './Auth.module.css';
import Subtitle from '../UI/Text/Subtitle/Subtitle';
import Form from '../UI/Form/Form';
import Input from '../UI/Form/Input/Input';

const Auth = (props) => {
  const formConfig = {
    controls: null,
    action: null,
    buttonText: null
  };
  let title = null;
  switch (props.location.pathname) {
    case '/login': 
      title = 'Log in';
      formConfig.controls = {
        username: {
          component: Input,
          // id: 'username',
          value: '',
          props: {
            type: 'email',
            placeholder: 'Your Username'
          },
          validation: {
            required: true,
            isEmail: true
          },
          valid: false,
          touched: false
        },
        password: {
          component: Input,
          // id: 'password',
          value: '',
          props: {
            type: 'password',
            placeholder: 'Your Password'
          },
          validation: {
            required: true,
            minLength: 6,
            maxLength: 20
          },
          valid: false,
          touched: false
        } 
      };
      formConfig.action = 'login'; 
      formConfig.buttonText = 'Start'; break;
    case '/create-account': 
      title = 'Create account'; 
      formConfig.controls = {
        username: {
          component: Input,
          id: 'username',
          value: '',
          props: {
            type: 'email',
            placeholder: 'New Username'
          },
          validation: {
            required: true,
            isEmail: true
          },
          valid: false,
          touched: false
        },
        password: {
          component: Input,
          id: 'password',
          value: '',
          props: {
            type: 'password',
            placeholder: 'New Password'
          },
          validation: {
            required: true,
            minLength: 6,
            maxLength: 20
          },
          valid: false,
          touched: false
        }
      };
      formConfig.action = 'signup'; 
      formConfig.buttonText = 'Go'; break;
    default: break;
  }

  return (
    <div className={classes.Auth}>
      <Subtitle>{title}</Subtitle>
      <Form config={formConfig} />
    </div>
  );
};

export default Auth;