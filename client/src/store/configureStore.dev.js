import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import eventsAPI from '../utils/middleware/eventsAPI'
import rootReducer from '../reducers'
import DevTools from '../utils/DevTools'

function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, eventsAPI, createLogger()),
      // DevTools.instrument()
      window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
      // window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore()