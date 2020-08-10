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
    default: return state;
  }
}

export default reducer;