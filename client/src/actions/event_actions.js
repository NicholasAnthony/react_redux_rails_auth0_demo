// import { CALL_API } from '../utils/middleware/eventsAPI'

export const EVENTS_REQUEST = 'EVENTS_REQUEST'
export const EVENTS_SUCCESS = 'EVENTS_SUCCESS'
export const EVENTS_FAILURE = 'EVENTS_FAILURE'

// function fetchEvents() {
//   return {
//     // This gets sent to the eventsAPI default method
//     // callAPI simply represents a symbol in memory
//     [CALL_API]: {
//       types: [ EVENTS_REQUEST, EVENTS_SUCCESS, EVENTS_FAILURE ],
//       endpoint: 'events.json',
//       authenticatedRequest: false
//     }
//   }
// }

// export function loadEvents() {
//   return dispatch => {
//     return dispatch(fetchEvents())
//   }
// }

// export const EVENT_REQUEST = 'EVENT_REQUEST'
// export const EVENT_SUCCESS = 'EVENT_SUCCESS'
// export const EVENT_FAILURE = 'EVENT_FAILURE'

// function fetchEvent(id) {
//   return {
//     [CALL_API]: {
//       types: [ EVENT_REQUEST, EVENT_SUCCESS, EVENT_FAILURE ],
//       endpoint: `events/${id}`,
//       authenticatedRequest: true
//     }
//   }
// }

// export function loadEvent(id) {
//   return dispatch => {
//     return dispatch(fetchEvent(id))
//   }
// }