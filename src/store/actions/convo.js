import * as actionTypes from './actionTypes';

export const setConvo = (convo) => {
  return {
    type: actionTypes.SET_CONVO,
    convo: convo
  }
}

export const addMessage = (msgId, msg) => {
  return {
    type: actionTypes.ADD_MESSAGE,
    messageId: msgId,
    message: msg
  }
}

export const sendMessage = (convoId, msg) => {
  return {
    type: actionTypes.SEND_MESSAGE,
    convoId: convoId,
    message: msg
  }
}

export const sendMessageInit = () => {
  return {
    type: actionTypes.SEND_MESSAGE_INIT
  }
}