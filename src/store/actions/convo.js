import * as actionTypes from './actionTypes';

export const setConvo = (convo) => {
  return {
    type: actionTypes.SET_CONVO,
    convo: convo
  }
}