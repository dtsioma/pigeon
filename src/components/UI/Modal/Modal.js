import React, { Fragment } from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? 1 : 0
        }}>
        <div className={classes.Text}>
          {props.children}
        </div>
        <Button color="Black" clicked={props.modalClosed} margin="30px 0 0">OK</Button>
      </div>
    </Fragment>
  );
};

export default Modal;