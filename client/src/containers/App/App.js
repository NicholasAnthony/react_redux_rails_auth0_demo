import React, { Component, PropTypes as T } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {loginSuccess, loginError, logoutSuccess} from '../../actions'
import Navbar from '../../components/Navbar/Navbar'
import styles from './styles.module.css'

class App extends Component {

  static contextTypes = {
    router: T.object
  }
  
  constructor(props) {
    super(props)
    props.route.auth.on('authorization_complete', (newProfile) => {
      this.props.loginSuccess(newProfile)
      this.context.router.push('/home')
    })
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleLoginClick() {
    this.props.route.auth.login()
  }

  handleLogoutClick(){
    this.props.route.auth.logout()
    this.props.logoutSuccess(this.props.profile)
    this.context.router.push('/login');
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        // sends instances to children
        dispatch: this.props.dispatch,
        auth: this.props.route.auth,
        onLogoutClick: this.handleLogoutClick
      })
    }
    
    const { 
      isAuthenticated, 
      profile } = this.props

    return (
      <div>
        <header>
          <Navbar 
            isAuthenticated={isAuthenticated}
            profile={profile}
            onLoginClick={this.handleLoginClick}
            onLogoutClick={this.handleLogoutClick}
            />
        </header>
        {children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { auth } = state
  const { isAuthenticated, profile } = auth
  return {
    isAuthenticated,
    profile
  }
}



const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    loginSuccess,
    loginError,
    logoutSuccess,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)