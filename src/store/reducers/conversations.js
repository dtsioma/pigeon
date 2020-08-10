import * as actionTypes from '../actions/actionTypes';

const initialState = {
  convos: {},
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CONVERSATIONS_INIT:
      return {
        ...state,
        loading: true
      }
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case actionTypes.SET_CONVERSATIONS:
      return {
        ...state,
        convos: action.conversations,
        loading: false,
        error: null
      }
    default: return state;
  }
}

export default reducer;