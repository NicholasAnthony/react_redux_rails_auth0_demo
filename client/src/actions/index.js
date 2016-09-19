import { CALL_API } from '../utils/middleware/api'
import Auth0Lock from 'auth0-lock'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'


function loginSuccess(profile) {
  debugger
  return {
    type: LOGIN_SUCCESS,
    profile
  }
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  }
}

export function login() {
  // const lock = new Auth0Lock(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN)
  const clientID = 'vJoU6o2nTMZ87Mp6FgPPNG9QUbh65BPX'
  const clientDomain = 'treflabs.auth0.com'
  const authOptions = {
    auth: {
      redirect: false
      // redirect: true,
      // redirectUrl: 'http://localhost:3000/',
      // responseType: 'token',
      // sso: true
    }
  }
  const lock = new Auth0Lock(clientID, clientDomain, authOptions)
  

  return dispatch => {
    lock.show((error, profile, token) => {
      if(error) {

        return dispatch(loginError(error))
      }

      localStorage.setItem('profile', JSON.stringify(profile))
      localStorage.setItem('id_token', token)
      console.log(" 🔔 /index.js CALLING LOGIN SUCCESS", token)
      return dispatch(loginSuccess(profile))
    })
  }
}

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

function logoutSuccess(profile) {
  debugger
  return {
    type: LOGOUT_SUCCESS
  }
}

export function logout() {
  debugger
  return dispatch => {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    return dispatch(logoutSuccess());
  }
}

export const JEDIS_REQUEST = 'JEDIS_REQUEST'
export const JEDIS_SUCCESS = 'JEDIS_SUCCESS'
export const JEDIS_FAILURE = 'JEDIS_FAILURE'

function fetchJedis() {
  return {
    [CALL_API]: {
      types: [ JEDIS_REQUEST, JEDIS_SUCCESS, JEDIS_FAILURE ],
      endpoint: 'jedis',
      authenticatedRequest: false
    }
  }
}

export function loadJedis() {
  return dispatch => {
    return dispatch(fetchJedis())
  }
}

export const JEDI_REQUEST = 'JEDI_REQUEST'
export const JEDI_SUCCESS = 'JEDI_SUCCESS'
export const JEDI_FAILURE = 'JEDI_FAILURE'

function fetchJedi(id) {
  return {
    [CALL_API]: {
      types: [ JEDI_REQUEST, JEDI_SUCCESS, JEDI_FAILURE ],
      endpoint: `jedis/${id}`,
      authenticatedRequest: true
    }
  }
}

export function loadJedi(id) {
  return dispatch => {
    return dispatch(fetchJedi(id))
  }
}