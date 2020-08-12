import * as actionTypes from '../actions/actionTypes';

const initialState = {
  activeConvo: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CONVO:
      return {
        ...state,
        activeConvo: action.convo
      }
    case actionTypes.ADD_MESSAGE: {
      return {
        ...state,
        activeConvo: {
          ...state.activeConvo,
          messages: {
            ...state.activeConvo.messages,
            [action.messageId]: action.message
          }
        }
      }
    }
    default: return state;
  }
}

export default reducer;