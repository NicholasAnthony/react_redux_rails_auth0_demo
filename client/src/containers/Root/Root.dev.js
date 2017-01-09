import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import routes from '../../routes'
import DevTools from '../../utils/DevTools'
import { Router } from 'react-router'
import { Grid } from 'react-bootstrap'
import styles from './styles.module.css'

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <Grid style={{fontFamily: "Open Sans", marginLeft: "0px", marginRight: "0px"}}>
          <Router history={history} routes={routes} />
          {!window.devToolsExtension ? <DevTools /> : null}
        </Grid>
      </Provider>
    )
  }
}