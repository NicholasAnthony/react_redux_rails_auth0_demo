import React, { Component, PropTypes as T } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { Jumbotron } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
// import { loadJedis, loadJedi, login, logout } from '../../actions'
// import { loadJedis, loadJedi, mylogin, mylogout } from '../../actions'
import { loadEvent, loadEvents } from '../../actions/event_actions'
// import JedisList from '../../components/JedisList'
// import Jedi from '../../components/Jedi'
// import Auth from '../../components/Auth'
import Calendar from '../../components/Calendar/Calendar'
import styles from './styles.module.css'
import AuthService, {loginSuccess, loginError} from '../../utils/AuthService'
import Navbar from '../../components/Navbar/Navbar'

class App extends Component {


  static contextTypes = {
    router: T.object
  }
  
  constructor(props) {
    super(props)
    this.handleGetJedisClick = this.handleGetJedisClick.bind(this)
    this.handleGetJediClick = this.handleGetJediClick.bind(this)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLoginTwoClick = this.handleLoginTwoClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    // props.route.auth.on('authorization_complete', (newProfile) => {
    //   alert("PROFILE: ", newProfile)
    //   console.log("  😎  PROFILE: ", newProfile)
    //   this.props.dispatch(loginSuccess(newProfile))
    //   this.context.router.push('/login');
    //   // this.setState({profile: newProfile})
    // })
  }

  componentDidMount() {
    console.log(" 🔔 containers/App/App.js componentDidMount PROPS: ", this.props)
    // debugger
    // this.props.loadEvents()
    // debugger
    // this.authLock = new AuthService(
    //   process.env.REACT_APP_AUTH0_CLIENT_ID, 
    //   process.env.REACT_APP_AUTH0_DOMAIN,
    //   this
    // )
  }

  componentDidUpdate(prevProps) {
    // console.log("componentDidUpdate PROPS:", this.props)
    console.log(" 🔔 containers/App/App.js componentDidUpdate PROPS: ", this.props)
    // only call loadEvents if ...
    // if( this.props.events.isFetching === true ){}
  }

  handleGetJedisClick(){
    // this.props.loadJedis()
  }
  
  handleGetJediClick(id){
    // this.props.loadJedi(id)
  }
  
  handleLoginClick(){
    // debugger
    // this.props.login()
  }

  handleLoginTwoClick(){
    debugger
    // this.props.route.auth.login()
    // this.props.route.auth.login
  }
  
  handleLogoutClick(){
    this.props.logout()
  }

  render() {
    // my stuff
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        dispatch: this.props.dispatch,
        auth: this.props.route.auth //sends auth instance to children
      })
    }
    
    // their stuf
    const { 
      // allJedis, 
      // singleJedi, 
      // errorJedis,
      // dispatch,
      events,
      singleEvent,
      errorEvents,
      isAuthenticated, 
      profile } = this.props

    return (

      <div>

        <header>
          {/*
            <div className="header">
              <img src={LogoImg} role="presentation" width="200" />
            </div>
          */}
          <Navbar />
        </header>
        
        <div>
          {/*
          <Auth 
            isAuthenticated={isAuthenticated}
            profile={profile}
            onLoginClick={this.handleLoginClick}
            onLogoutClick={this.handleLogoutClick}
          />
          */}
        </div>
          
        {/*
        <Jumbotron>
          <h2 className={styles.mainTitle}>
            <img src={LogoImg} role="presentation" width="200" />
          </h2>
        </Jumbotron>
        */}

        <div className="container-fluid">

          <div className="row">
            <div className="col-sm-4">
              {/*
              <h4>Col 2 </h4>
              <Button bsStyle="primary" onClick={this.props.authLogin}>Login 2</Button>
              */}
              
              {children}
            </div>
          </div>


          {/*

            <div className="col-sm-8">
              <h4>Found {events.allEvents.length} Events:</h4>
              <Calendar events={events.allEvents} />
            </div>

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
  // const { jedis, jedi, events, event, auth } = state
  const { events, event, auth } = state

  // const { allJedis, errorJedis } = jedis
  // const { singleJedi } = jedi
  
  const { /*allEvents,*/ errorEvents } = events
  const { singleEvent } = event
    
  const { isAuthenticated, profile } = auth
  return {
    
    // allJedis,
    // singleJedi,
    // errorJedis,
    
    /*allEvents,*/
    events,
    singleEvent,
    errorEvents,

    isAuthenticated,
    profile
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ 
    loadEvents,
    loadEvent,
    // loadJedis,
    // loadJedi,
    // login,
    // logout,
    dispatch
  }, dispatch)

  // return { 
  //   loadEvents: () => dispatch(loadEvents),
  //   loadEvent: () => dispatch(loadEvent),
  //   loadJedis: () => dispatch(loadJedis),
  //   loadJedi: () => dispatch(loadJedi),
  //   login: () => dispatch(login),
  //   logout: () => dispatch(logout),
  //   dispatch
  // }
}

// const mapDispatchToProps = (dispatch) => {
//   return {

//     dispatch
//   }
// }

// debugger
export default connect(mapStateToProps, mapDispatchToProps)(App)
