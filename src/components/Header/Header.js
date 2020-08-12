import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './Header.module.css';
import Button from '../UI/Button/Button';
import * as actions from '../../store/actions';

const Header = (props) => {
  const userId = props.userId;
  const onFetchUsername = props.onFetchUsername;

  let usernameBlock = (
    <span className={classes.Username}>
      <strong>@{props.username}</strong>
    </span>
  );

  useEffect(() => {
    onFetchUsername(userId);
  }, [onFetchUsername, userId]);  

  return (
    <div className={classes.Header}>
      {usernameBlock}
      <Button color="Black" clicked={props.onLogout}>Logout</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    username: state.auth.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.logout()),
    onFetchUsername: (userId) => dispatch(actions.fetchUsername(userId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);