import React, { Component, PropTypes as T } from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import Messages from '../../components/Messages/Messages'
import AuthService, {loginSuccess, loginError} from '../../utils/AuthService'
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
  constructor(props, context) {
    super(props, context)
    // this.state = {
    //   profile: props.auth.getProfile()
    // }
    // props.auth.on('profile_updated', (newProfile) => {
    //   this.setState({profile: newProfile})
    // })
    // debugger
    props.auth.on('authorization_complete', (newProfile) => {
      alert("PROFILE: ", newProfile)
      console.log("  😎  PROFILE: ", newProfile)
      props.dispatch(loginSuccess(newProfile))
      this.context.router.push('/home');
      // this.setState({profile: newProfile})
    })
  }

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

  // componentDidMount(){}
  // componentDidUpdate(prevProps, prevState) {}

  render() {
    const { auth, dispatch } = this.props
    console.log(" 🔔 src/components/Login/Login.js RENDER", this.props)
    return (
      <div className={styles.root}>
        <h2>Login</h2>
        <ReactGeoLocation>Example</ReactGeoLocation>
        {/*<Messages auth={this.props.auth}></Messages>*/}
        <ButtonToolbar className={styles.toolbar}>
          <Button bsStyle="primary" onClick={auth.login.bind(this)}>Login</Button>
        </ButtonToolbar>
        
      </div>
    )
  }
}

export default Login;
