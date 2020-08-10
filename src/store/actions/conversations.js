import * as actionTypes from './actionTypes';

export const fetchConversations = (userId) => {
  return {
    type: actionTypes.FETCH_CONVERSATIONS,
    userId: userId
  }
}

export const fetchConversationsInit = () => {
  return {
    type: actionTypes.FETCH_CONVERSATIONS_INIT
  }
}

export const fetchConversationsSuccess = (convos) => {
  return {
    type: actionTypes.SET_CONVERSATIONS,
    conversations: convos
  }
}

export const fetchConversationsFailed = () => {
  return {
    type: actionTypes.FETCH_CONVERSATIONS_FAILED
  }
}