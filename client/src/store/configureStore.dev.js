import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import api from '../utils/middleware/api'
import eventsAPI from '../utils/middleware/eventsAPI'
import rootReducer from '../reducers'
import DevTools from '../utils/DevTools'

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, api, eventsAPI, createLogger()),
      DevTools.instrument()
    )
  )

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     const nextRootReducer = require('../reducers').default
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }

  return store
}
