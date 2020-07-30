import React from 'react';
import { connect } from 'react-redux';

import Button from '../UI/Button/Button';
import * as actions from '../../store/actions';


const Main = (props) => {
  return (
    <div>
      You are logged in
      <Button color="Black" clicked={props.onLogout}>Logout</Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout())
  }
}

export default connect(null, mapDispatchToProps)(Main);