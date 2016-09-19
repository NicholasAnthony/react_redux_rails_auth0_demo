import React, { Component, PropTypes as T } from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import Messages from '../../components/Messages/Messages'
import AuthService from '../../utils/AuthService'
// var ReactGeoLocation = require('react-geo-location');
import styles from './styles.module.css'

export class ReactGeoLocation extends Component {
  
  state = {
    lat: null,
    lng: null
  }

  _handleGeoPosition = (position) => {
    this.setState({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    })
  }
  
  _handleClick = (e) => {
    e.preventDefault()
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._handleGeoPosition);
    }
  }

  render() {
    return (
      <div>
        <a onClick={this._handleClick}>Detect location</a>
        { this.state.lat && this.state.lng &&
          `lat: ${this.state.lat} / lng: ${this.state.lng}` 
        }
      </div>
    )
  }
}


export class Login extends Component {

  state = {
    events: []
  }
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  componentDidMount(){
  }

  componentDidUpdate(prevProps, prevState) { 
  }

  render() {
    const { auth, dispatch } = this.props
    return (
      <div className={styles.root}>
        <h2>Login</h2>
        <ReactGeoLocation>Example</ReactGeoLocation>
        {/*<Messages auth={this.props.auth}></Messages>*/}
        <ButtonToolbar className={styles.toolbar}>
          <Button bsStyle="primary" onClick={auth.login.bind(this, dispatch)}>Login</Button>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Login;
