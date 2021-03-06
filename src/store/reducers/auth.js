import * as actionTypes from '../actions/actionTypes';

const initialState = {
  userId: null,
  token: null,
  loading: false,
  error: null,
  username: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_INIT:
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
    case actionTypes.SET_USERDATA:
      return {
        ...state,
        userId: action.userId,
        token: action.token,
        loading: false,
        error: null
      }
    case actionTypes.SET_USERNAME: 
      return {
        ...state,
        username: action.username
      }
    default: return state;
  }
}

export default reducer;