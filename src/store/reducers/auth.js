import * as actionTypes from '../actions/actionTypes';

const initialState = {
  userId: null,
  token: null,
  loading: false,
  error: null
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
        error: action.error
      }
    case actionTypes.SET_USERDATA: {
      return {
        userId: action.userId,
        token: action.token,
        loading: false,
        error: null
      }
    }
    default: return state;
  }
}

export default reducer;