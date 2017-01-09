import React, { Component, PropTypes as T } from 'react'
import {ButtonToolbar, Button, Label} from 'react-bootstrap'
import AuthService from '../../utils/AuthService'
import GeoLocation from '../../utils/GeoLocation'
import styles from './styles.module.css'


export class Login extends Component {
  constructor(props, context) {
    super(props, context)
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const { auth, dispatch } = this.props
    return (
      <div className={styles.root}>
        <h2>Login</h2>
        <ButtonToolbar className={styles.toolbar}>
          <Button bsStyle="primary" onClick={auth.login.bind(this)}>Login</Button>
        </ButtonToolbar>
        <hr/>
        <b>Geolocation Data: </b>
        <GeoLocation />
      </div>
    )
  }
}

export default Login;
