import * as actionTypes from './actionTypes';

export const login = (user) => {
  return {
    type: actionTypes.LOGIN_USER,
    email: user.email,
    password: user.password
  }
}

export const loginInit = () => {
  return {
    type: actionTypes.AUTH_INIT
  }
}

export const loginSuccess = (id, token) => {
  return {
    type: actionTypes.SET_USERDATA,
    userId: id,
    token: token
  }
}

export const loginFailed = (error) => {
  return {
    type: actionTypes.SET_ERROR,
    error: error
  }
}

export const signup = (user) => {
  return {
    type: actionTypes.SIGNUP_USER,
    email: user.email,
    password: user.password,
    username: user.username
  }
}

export const signupInit = () => {
  return {
    type: actionTypes.AUTH_INIT
  }
}

export const signupSuccess = (id, token) => {
  return {
    type: actionTypes.SET_USERDATA,
    userId: id,
    token: token
  }
}

export const signupFailed = (error) => {
  return {
    type: actionTypes.SET_ERROR,
    error: error
  }
}

export const autoLogin = () => {
  return {
    type: actionTypes.AUTO_LOGIN
  }
}

export const logout = () => {
  return {
    type: actionTypes.LOGOUT
  }
}

export const logoutSuccess = () => {
  return {
    type: actionTypes.SET_USERDATA,
    userId: null,
    token: null
  }
}

export const fetchUsername = (userId) => {
  return {
    type: actionTypes.FETCH_USERNAME,
    userId: userId
  }
}

export const setUsername = (username) => {
  return {
    type: actionTypes.SET_USERNAME,
    username: username
  }
}