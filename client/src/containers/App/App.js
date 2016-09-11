import React, { Component, PropTypes as T } from 'react'
import { connect } from 'react-redux'
import { Jumbotron } from 'react-bootstrap'
import { loadJedis, loadJedi, login, logout } from '../../actions'
import JedisList from '../../components/JedisList'
import Jedi from '../../components/Jedi'
import Auth from '../../components/Auth'
import styles from './styles.module.css'

class App extends Component {
  static contextTypes = {
    router: T.object
  }

  constructor(props) {
    super(props)
    this.handleGetJedisClick = this.handleGetJedisClick.bind(this)
    this.handleGetJediClick = this.handleGetJediClick.bind(this)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleGetJedisClick() {
    this.props.loadJedis()
  }
  
  handleGetJediClick(id) {
    this.props.loadJedi(id)
  }
  
  handleLoginClick() {
    this.props.login()
  }
  
  handleLogoutClick() {
    this.props.logout()
  }

  render() {

    // my stuff
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance to children
      })
    }

    // their stuf
    const { allJedis, singleJedi, error, isAuthenticated, profile } = this.props
    return (
      <div>
        <div className="navbar navbar-default">
          <div className="container-fluid">
            <a className="navbar-brand">Redux Jedi</a>
            <Auth 
              isAuthenticated={isAuthenticated}
              profile={profile}
              onLoginClick={this.handleLoginClick}
              onLogoutClick={this.handleLogoutClick}
            />
          </div>
        </div>
  
        {/*
        <Jumbotron>
          <h2 className={styles.mainTitle}>
            <img src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg" role="presentation" />
          </h2>
        </Jumbotron>
        */}

        <div className="container-fluid">
          <JedisList
            jedis={allJedis}
            error={error}
            onClick={this.handleGetJedisClick}
            onGetJediClick={this.handleGetJediClick}
            isAuthenticated={isAuthenticated}
          />
          <Jedi jedi={singleJedi} />

          {children}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { jedis, jedi, auth } = state
  const { allJedis, error } = jedis
  const { singleJedi } = jedi
  const { isAuthenticated, profile } = auth
  return {
    allJedis,
    singleJedi,
    error,
    isAuthenticated,
    profile
  }
}

export default connect(mapStateToProps, {
  loadJedis,
  loadJedi,
  login,
  logout
})(App)
