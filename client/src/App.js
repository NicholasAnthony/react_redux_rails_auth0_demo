// import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory /*hashHistory*/ } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root/Root'
import configureStore from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.css'
import 'fullcalendar/dist/fullcalendar.min.css'
import 'fullcalendar/dist/fullcalendar.min.js'

const store = configureStore
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)