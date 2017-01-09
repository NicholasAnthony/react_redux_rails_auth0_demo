import { CALL_EVENTS_API } from '../utils/middleware/eventsAPI'


// AUTH
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export function loginSuccess(profile) {
  return dispatch => {
    return dispatch({
      type: LOGIN_SUCCESS,
      profile
    })
  }
}

export function loginError(error) {
  return dispatch => {
    return dispatch({
      type: LOGIN_ERROR,
      error
    })
  }
}

export function logoutSuccess() {
  return dispatch => {
    return dispatch({
      type: LOGOUT_SUCCESS
    })
  }
}

export const EVENTS_REQUEST = 'EVENTS_REQUEST'
export const EVENTS_SUCCESS = 'EVENTS_SUCCESS'
export const EVENTS_FAILURE = 'EVENTS_FAILURE'

function fetchEvents() {
  // debugger
  return {
    // This gets sent to the eventsAPI default method
    // callAPI simply represents a symbol in memory
    [CALL_EVENTS_API]: {
      types: [ EVENTS_REQUEST, EVENTS_SUCCESS, EVENTS_FAILURE ],
      endpoint: 'events.json',
      authenticatedRequest: false
    }
  }
}

export function loadEvents() {
  // debugger
  return dispatch => {
    return dispatch(fetchEvents())
  }
}






export const EVENT_REQUEST = 'EVENT_REQUEST'
export const EVENT_SUCCESS = 'EVENT_SUCCESS'
export const EVENT_FAILURE = 'EVENT_FAILURE'

function fetchEvent(id) {
  return {
    [CALL_EVENTS_API]: {
      types: [ EVENT_REQUEST, EVENT_SUCCESS, EVENT_FAILURE ],
      endpoint: `events/${id}`,
      authenticatedRequest: true
    }
  }
}

export function loadEvent(id) {
  return dispatch => {
    return dispatch(fetchEvent(id))
  }
}






// import { CALL_API } from '../utils/middleware/api'
// import Auth0Lock from 'auth0-lock'

// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_ERROR = 'LOGIN_ERROR'


// function loginSuccess(profile) {
//   debugger
//   return {
//     type: LOGIN_SUCCESS,
//     profile
//   }
// }

// function loginError(error) {
//   return {
//     type: LOGIN_ERROR,
//     error
//   }
// }

// export function login() {
//   // const lock = new Auth0Lock(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN)
//   const clientID = 'vJoU6o2nTMZ87Mp6FgPPNG9QUbh65BPX'
//   const clientDomain = 'treflabs.auth0.com'
//   const authOptions = {
//     auth: {
//       redirect: false
//       // redirect: true,
//       // redirectUrl: 'http://localhost:3000/',
//       // responseType: 'token',
//       // sso: true
//     }
//   }
//   const lock = new Auth0Lock(clientID, clientDomain, authOptions)
  

//   return dispatch => {
//     lock.show((error, profile, token) => {
//       if(error) {

//         return dispatch(loginError(error))
//       }

//       localStorage.setItem('profile', JSON.stringify(profile))
//       localStorage.setItem('id_token', token)
//       console.log(" 🔔 /index.js CALLING LOGIN SUCCESS", token)
//       return dispatch(loginSuccess(profile))
//     })
//   }
// }

// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

// function logoutSuccess(profile) {
//   return {
//     type: LOGOUT_SUCCESS
//   }
// }

// export function logout() {
//   return dispatch => {
//     localStorage.removeItem('id_token');
//     localStorage.removeItem('profile');
//     return dispatch(logoutSuccess());
//   }
// }

// export const JEDIS_REQUEST = 'JEDIS_REQUEST'
// export const JEDIS_SUCCESS = 'JEDIS_SUCCESS'
// export const JEDIS_FAILURE = 'JEDIS_FAILURE'

// function fetchJedis() {
//   return {
//     [CALL_API]: {
//       types: [ JEDIS_REQUEST, JEDIS_SUCCESS, JEDIS_FAILURE ],
//       endpoint: 'jedis',
//       authenticatedRequest: false
//     }
//   }
// }

// export function loadJedis() {
//   return dispatch => {
//     return dispatch(fetchJedis())
//   }
// }

// export const JEDI_REQUEST = 'JEDI_REQUEST'
// export const JEDI_SUCCESS = 'JEDI_SUCCESS'
// export const JEDI_FAILURE = 'JEDI_FAILURE'

// function fetchJedi(id) {
//   return {
//     [CALL_API]: {
//       types: [ JEDI_REQUEST, JEDI_SUCCESS, JEDI_FAILURE ],
//       endpoint: `jedis/${id}`,
//       authenticatedRequest: true
//     }
//   }
// }

// export function loadJedi(id) {
//   return dispatch => {
//     return dispatch(fetchJedi(id))
//   }
// }