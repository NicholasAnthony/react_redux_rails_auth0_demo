// import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root/Root'
import configureStore from './store/configureStore'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)


// import React from 'react'
// import ReactDOM from 'react-dom'

// // import 'bootstrap/dist/css/bootstrap.css'
// // require('react-bootstrap')
// require('bootstrap/dist/css/bootstrap.css');

// import './App.css'

// import App from './containers/App/App'

// import {hashHistory} from 'react-router'
// import makeRoutes from './routes'

// const routes = makeRoutes()

// const mountNode = document.querySelector('#root');
// ReactDOM.render(
//   <App history={hashHistory}
//         routes={routes} />,
// mountNode);








// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
