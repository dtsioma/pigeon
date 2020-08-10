import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './Convo.module.css';
import ConvoInput from './ConvoInput/ConvoInput';
import ConvoDialog from './ConvoDialog/ConvoDialog';
import * as actions from '../../store/actions';

const Convo = (props) => {
  const convos = props.convos;
  const onSetConvo = props.onSetConvo;

  const fetchConvo = () => {
    for (let convo in convos) {
      if (convos[convo].usernames.includes(props.match.params.username)) {
        return convos[convo];
      }
    }
    return null;
  }

  useEffect(() => {
    onSetConvo(fetchConvo());
  }, [convos, onSetConvo]);

  return (
    <div className={classes.Convo}>
      <ConvoDialog />
      <ConvoInput />
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