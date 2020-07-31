import React from 'react';

import classes from './Auth.module.css';
import Subtitle from '../UI/Text/Subtitle/Subtitle';
import Form from '../UI/Form/Form';
import { Link } from 'react-router-dom';
import authConfig from '../Auth/authConfig';
import { browserHistory } from '../../';

const Auth = (props) => {
  const currentUrl = browserHistory.location.pathname;
  const config = currentUrl === '/login' ? authConfig.login : authConfig.signup;

  return (
    <div className={classes.Auth}>
      <Subtitle>{config.title}</Subtitle>
      <Form config={config.form} />
      <Link to={config.bottomLink.url} className={classes.BottomLink}>{config.bottomLink.text}</Link>
    </div>
  );
};

export default Auth;