import React, { Fragment } from 'react';
// import { connect } from 'react-redux';

import Modal from '../../components/UI/Modal/Modal';
import { showErrorMessage } from '../../shared/utility';

const withErrorHandler = (WrappedComponent) => {
  return props => {
    props.error && console.log(props.error.response);

    return (
      <Fragment>
        <Modal
          show={props.error}
          modalClosed={props.onClearError}>
          {props.error && showErrorMessage(props.error.response.data.error.message)}
        </Modal>
        <WrappedComponent {...props} />
      </Fragment>
    );
  };
};

export default withErrorHandler;