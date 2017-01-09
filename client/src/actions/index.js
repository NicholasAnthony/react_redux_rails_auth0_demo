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

function fetchEvents(location = "New York City", keywords = "music") {
  return {
    // This gets sent to the eventsAPI default method
    // callAPI simply represents a symbol in memory
    [CALL_EVENTS_API]: {
      types: [ EVENTS_REQUEST, EVENTS_SUCCESS, EVENTS_FAILURE ],
      endpoint: `api/events?location=${location}&keywords=${keywords}`,
      authenticatedRequest: true
    }
  }
}

export function loadEvents() {
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