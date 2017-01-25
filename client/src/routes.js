import React from 'react'
import {Route, IndexRedirect, withRouter} from 'react-router'
import AuthService from './utils/AuthService'
import App from './containers/App/App'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import SubPage from './components/SubPage/SubPage'
import EventsConnector from './connectors/EventsConnector/EventsConnector'
import EventsContainer from './containers/EventsContainer/EventsContainer'

const auth = new AuthService(
  process.env.REACT_APP_AUTH0_CLIENT_ID, 
  process.env.REACT_APP_AUTH0_DOMAIN
)

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

const authRedirect = (nextState, replace) => {
  if (auth.loggedIn()) {
    replace({ pathname: '/home' })
  }
}

export default (
  <Route path="/" component={App} auth={auth} >
    <IndexRedirect to="/home" />
    <Route path="home" name="Profile" component={Home} onEnter={requireAuth} />
    <Route path="login" name="Login" component={Login} onEnter={authRedirect} />
    <Route path="access_token=:token" component={Login} /> //to prevent router errors
    <Route path="events" name="Events" component={withRouter(EventsConnector(EventsContainer))} />
    <Route path="subpage" name="Sub Page" component={SubPage} onEnter={requireAuth} />
  </Route>
)