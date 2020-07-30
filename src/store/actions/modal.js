import * as actionTypes from './actionTypes';

export const showErrorModal = (error) => {
  return {
    type: actionTypes.SET_ERROR,
    error: error
  }
}

export const clearError = () => {
  return {
    type: actionTypes.SET_ERROR,
    error: null
  }
}