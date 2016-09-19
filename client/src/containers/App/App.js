import React, { Component, PropTypes as T } from 'react'
import { connect } from 'react-redux'
import { Jumbotron } from 'react-bootstrap'
import { loadJedis, loadJedi, login, logout } from '../../actions'
import { loadEvent, loadEvents } from '../../actions/event_actions'
import JedisList from '../../components/JedisList'
import Jedi from '../../components/Jedi'
import Auth from '../../components/Auth'
import Calendar from '../../components/Calendar/Calendar'
import styles from './styles.module.css'
import LogoImg from '../../assets/images/eventist-logo.png';

class App extends Component {
  static contextTypes = {
    router: T.object
  }
  
  componentDidMount() {
    this.props.loadEvents()
  }

  componentDidUpdate(prevProps) {
    // only call loadEvents if ...
    // if( this.props.events.isFetching === true ){}
  }

  handleGetJedisClick = () => {
    this.props.loadJedis()
  }
  
  handleGetJediClick = (id) => {
    this.props.loadJedi(id)
  }
  
  handleLoginClick = () => {
    this.props.login()
  }
  
  handleLogoutClick = () => {
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
    const { 
      // allJedis, 
      // singleJedi, 
      // errorJedis,
      events,
      singleEvent,
      errorEvents,
      isAuthenticated, 
      profile } = this.props

    return (

      <div>

        <header>
          <div className="header">
            <img src={LogoImg} role="presentation" width="200" />
          </div>
        </header>
    
        <div>
          <Auth 
            isAuthenticated={isAuthenticated}
            profile={profile}
            onLoginClick={this.handleLoginClick}
            onLogoutClick={this.handleLogoutClick}
          />
        </div>
          
        {/*
        <Jumbotron>
          <h2 className={styles.mainTitle}>
            <img src={LogoImg} role="presentation" width="200" />
          </h2>
        </Jumbotron>
        */}

        <div className="container-fluid">

          <div className="col-sm-8">
            <h4>Found {events.allEvents.length} Events:</h4>
            <Calendar events={events.allEvents} />
          </div>

          <div className="col-sm-4">
            {/*<h4>Col 2 </h4>*/}
            {children}
          </div>

          {/*
            <JedisList
              jedis={allJedis}
              error={errorJedis}
              onClick={this.handleGetJedisClick}
              onGetJediClick={this.handleGetJediClick}
              isAuthenticated={isAuthenticated}
            />
            <Jedi jedi={singleJedi} />
          */}

        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  const { jedis, jedi, events, event, auth } = state
  
  const { allJedis, errorJedis } = jedis
  const { singleJedi } = jedi
  
  const { /*allEvents,*/ errorEvents } = events
  const { singleEvent } = event
  
  const { isAuthenticated, profile } = auth
  return {
    
    allJedis,
    singleJedi,
    errorJedis,
    
    /*allEvents,*/
    events,
    singleEvent,
    errorEvents,

    isAuthenticated,
    profile
  }
}

export default connect(mapStateToProps, {
  loadEvents,
  loadEvent,
  loadJedis,
  loadJedi,
  login,
  logout
})(App)
