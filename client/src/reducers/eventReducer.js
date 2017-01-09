import * as ActionTypes from '../actions'
import R from 'ramda'
import Moment from 'moment'

const intialEventsState = {
  isFetching: false,
  allEvents: [],
  error: ''
}

const withStartEndDate = (event) => {
  let start = Moment(event.start_time).format("YYYY-MM-DD")
  let end = event.end_time ? Moment(event.end_time).format("YYYY-MM-DD") : ""
  return {
    ...event,
    start: start,
    end: end
  }
}

const eventList = (response) => {
  return R.map(withStartEndDate, response.events.event)  
}

const eventsMeta = (response) => {
  return R.dissoc('events', response)
}


export function events(state = intialEventsState, action) {
  switch (action.type) {
    case ActionTypes.EVENTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case ActionTypes.EVENTS_SUCCESS:
      return Object.assign({}, state, {
        ...eventsMeta(action.response),
        isFetching: false,
        allEvents: eventList(action.response),
        error: ''
      })
    case ActionTypes.EVENTS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        allEvents: [],
        error: action.error
      })
    default:
      return state
  }
}

export function event(state = {
  isFetching: false,
  singleEvent: {},
  error: ''
}, action) {
  switch (action.type) {
    case ActionTypes.EVENT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case ActionTypes.EVENT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        singleEvent: action.response,
        error: ''
      })
    case ActionTypes.EVENT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        singleEvent: {},
        error: action.error
      })
    default:
      return state
  }
}