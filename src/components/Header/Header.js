import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import classes from './Header.module.css';
import Button from '../UI/Button/Button';
import * as actions from '../../store/actions';

const Header = (props) => {
  const [username, setUsername] = useState(null);
  const userId = props.userId;

  let usernameBlock = (
    <span className={classes.Username}>
      <strong>@{username}</strong>
    </span>
  );

  const fetchUsername = useCallback(() => {
    axios.get(`https://pigeon-e9149.firebaseio.com/users/${userId}.json`)
      .then(res => {
        setUsername(res.data.username);
      })
      .catch(err => {
        console.log(err);
      });
  }, [userId]);

  useEffect(() => {
    fetchUsername();
  }, [fetchUsername]);  

  return (
    <div className={classes.Header}>
      {usernameBlock}
      <Button color="Black" clicked={props.onLogout}>Logout</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.userId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.logout())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);