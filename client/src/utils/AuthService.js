import { EventEmitter } from 'events'
import { isTokenExpired } from './jwtHelper'
import Auth0Lock from 'auth0-lock'
import configureStore from '../store/configureStore'


// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// export const LOGIN_ERROR = 'LOGIN_ERROR'
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

// export function loginSuccess(profile) {
//   return {
//     type: LOGIN_SUCCESS,
//     profile
//   }
// }

// export function loginError(error) {
//   return {
//     type: LOGIN_ERROR,
//     error
//   }
// }

// export function logoutSuccess(profile) {
//   return {
//     type: LOGOUT_SUCCESS
//   }
// }

export default class AuthService extends EventEmitter {
  constructor(clientId, domain, app = null ) {
    super()

    // Configure Auth0
    const authOptions = {
      auth: {
        // redirect: false
        redirect: true,
        redirectUrl: 'http://localhost:3000/login',
        responseType: 'token'
        // sso: true
      }
    }
    
    this.lock = new Auth0Lock(clientId, domain, authOptions)
    
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    // Add callback for lock `authorization_error` event
    this.lock.on('authorization_error', this._authorizationError.bind(this))
    // binds login functions to keep this context
    this.login = this.login.bind(this)
  }

  _doAuthentication(authResult){
    // debugger
    // Saves the user token
    this.setToken(authResult.idToken)
    // Async loads the user profile data
    this.lock.getProfile(authResult.idToken, (error, profile) => {
      if (error) {
        console.log('Error loading the Profile', error)
      } else {
        this.setProfile(profile)

        this.emit('authorization_complete', profile)
        // if (this.dispatch) {
        //   return this.dispatch(loginSuccess(profile))  
        // }
      }
    })
  }

  _authorizationError(error){
    // Unexpected authentication error
    console.log('Authentication Error', error)
  }

  login() {
    // Call the show method to display the widget.
    // debugger
    // return dispatch => {
      this.lock.show()
      return false
    // }
    
  }

  loggedIn(){
    // debugger
    // Checks if there is a saved token and it's still valid
    const token = this.getToken()
    return !!token && !isTokenExpired(token)
  }

  setProfile(profile){
    // debugger
    // Saves profile data to localStorage
    localStorage.setItem('profile', JSON.stringify(profile))
    // Triggers profile_updated event to update the UI
    this.emit('profile_updated', profile)
  }

  getProfile(){
    // debugger
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  updateProfile(userId, data){
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
    }
    debugger
    return fetch(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/users/${userId}`, {
    // return fetch(`https://localhost:3002/api/v2/users/${userId}`, {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(newProfile => this.setProfile(newProfile))
  }
  
  setToken(idToken){
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken)
  }

  getToken(){
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token')
  }

  logout(){
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }

  _checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  fetch(url, options){
    // performs api calls sending the required authentication headers
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    if (this.loggedIn()){
      headers['Authorization'] = 'Bearer ' + this.getToken()
    }

    return fetch(url, {
      headers,
      ...options
    })
    .then(this._checkStatus)
    .then(response => response.json())
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(App)