// import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory /*hashHistory*/ } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root/Root'
import configureStore from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/bootstrap-3.3.7/css/bootstrap.simplex.min.css'
// import './assets/Flat-UI/dist/css/vendor/bootstrap/css/bootstrap.min.css'
// import './assets/Flat-UI/dist/css/flat-ui.min.css'
import './assets/jquery-ui-1.12.1-dark/jquery-ui.theme.css'
import 'fullcalendar/dist/fullcalendar.min.css'
import 'fullcalendar/dist/fullcalendar.min.js'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import './utils/eventfulAPI'

const store = configureStore
const history = syncHistoryWithStore(browserHistory, store)

render(
  <MuiThemeProvider>
    <Root store={store} history={history} />, document.getElementById('root')
  </MuiThemeProvider>
)