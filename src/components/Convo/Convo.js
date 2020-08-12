import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './Convo.module.css';
import ConvoForm from './ConvoForm/ConvoForm';
import ConvoDialog from './ConvoDialog/ConvoDialog';
import * as actions from '../../store/actions';

const Convo = (props) => {
  const convos = props.convos;
  const onSetConvo = props.onSetConvo;
  const username = props.match.params.username;

  useEffect(() => {
    for (let convo in convos) {
      if (convos[convo].usernames.includes(username)) {
        onSetConvo(convos[convo]); return;
      }
    }
    onSetConvo(null); return;
  }, [onSetConvo, convos, username]);

  return (
    <div className={classes.Convo}>
      <ConvoDialog />
      <ConvoForm />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    convos: state.conversations.convos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetConvo: (convo) => dispatch(actions.setConvo(convo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Convo);