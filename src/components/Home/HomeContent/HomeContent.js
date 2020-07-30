import React from 'react';

import classes from './HomeContent.module.css';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import ButtonGroup from '../../UI/Button/ButtonGroup/ButtonGroup';

const HomeContent = () => {
  return (
    <div className={classes.HomeContent}>
      <ButtonGroup>
        <Link to="/login"><Button color="Black" margin="0 10px">Log in</Button></Link>
        <span>or</span>
        <Link to="/create-account"><Button color="BlackInverted" margin="0 10px">Create account</Button></Link>
      </ButtonGroup>
    </div>
  );
};

export default HomeContent;