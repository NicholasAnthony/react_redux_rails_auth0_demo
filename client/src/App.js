// import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory /*hashHistory*/ } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root/Root'
import configureStore from './store/configureStore'

// import 'fullcalendar/dist/fullcalendar.min.css'
// import 'fullcalendar/dist/fullcalendar.min.js'

import App from 'grommet/components/App'
import 'grommet/scss/hpe/index.scss'

const store = configureStore
const history = syncHistoryWithStore(browserHistory, store)

const Layout = () => (
  <App centered={false} inline={true}> 
    <Root store={store} history={history} />
  </App>
)

render(
  <Layout />, document.getElementById('root')
)
