import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import AuthService from './utils/AuthService'
// import Container from './Container'
import App from './containers/App/App'
import Home from './components/Home/Home'
import Login from './components/Login/Login'


// const auth = new AuthService(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__);

const client_id =  process.env.REACT_APP_AUTH0_CLIENT_ID
const domain = process.env.REACT_APP_AUTH0_DOMAIN;

const auth = new AuthService(client_id, domain);

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

export default (
  <Route path="/" component={App} auth={auth}>
    <IndexRedirect to="/home" />
    <Route path="home" component={Home} onEnter={requireAuth} />
    <Route path="login" component={Login} />
    <Route path="access_token=:token" component={Login} /> //to prevent router errors
  </Route>
)

// export default makeMainRoutes


// import React from 'react'
// import { Route } from 'react-router'
// import App from './containers/App/App'

// export default (
//   <Route path="/" component={App}></Route>
// )


// import React from 'react'
// // import {browserHistory, Router, Route, Redirect} from 'react-router'
// import {Route} from 'react-router'

// import makeMainRoutes from './views/Main/routes'

// export const makeRoutes = () => {
//   const main = makeMainRoutes();

//   return (
//     <Route path=''>
//       {main}
//     </Route>
//   )
// }



// export default makeRoutes
