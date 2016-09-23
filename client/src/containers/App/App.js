import React, { Component, PropTypes as T } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { Jumbotron } from 'react-bootstrap'
// import {Button} from 'react-bootstrap'
// import { loadJedis, loadJedi, login, logout } from '../../actions'
// import { loadEvent, loadEvents } from '../../actions/event_actions'
// import { loginSuccess, loginError, logoutSuccess } from '../../actions/auth_actions'
import {loadEvent, loadEvents, loginSuccess, loginError, logoutSuccess} from '../../actions'

// import JedisList from '../../components/JedisList'
// import Jedi from '../../components/Jedi'
// import Auth from '../../components/Auth'
import Calendar from '../../components/Calendar/Calendar'
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
    // my stuff
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        dispatch: this.props.dispatch,
        auth: this.props.route.auth, //sends auth instance to children
        onLogoutClick: this.handleLogoutClick
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
  const { /*jedis, jedi,*/ events, event, auth } = state
  // const { allJedis, errorJedis } = jedis
  // const { singleJedi } = jedi
  const { /*allEvents,*/ errorEvents } = events
  const { singleEvent } = event
  const { isAuthenticated, profile } = auth
  return {
    // allJedis,
    // singleJedi,
    // errorJedis,
    // allEvents,
    events,
    singleEvent,
    errorEvents,
    isAuthenticated,
    profile
  }
}



const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ 
    loadEvents,
    loadEvent,
    loginSuccess,
    loginError,
    logoutSuccess,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)




















  // constructor(props) {
  //   super(props)
  //   // this.handleGetJedisClick = this.handleGetJedisClick.bind(this)
  //   // this.handleGetJediClick = this.handleGetJediClick.bind(this)
  //   // this.handleLoginClick = this.handleLoginClick.bind(this)
  //   // this.handleLoginTwoClick = this.handleLoginTwoClick.bind(this)
  //   // this.handleLogoutClick = this.handleLogoutClick.bind(this)
  // }

  // handleGetJedisClick(){
  //   // this.props.loadJedis()
  // }
  
  // handleGetJediClick(id){
  //   // this.props.loadJedi(id)
  // }
  
  // handleLoginClick(){
  //   // this.props.login()
  // }

  // handleLoginTwoClick(){
  //   // this.props.route.auth.login()
  //   // this.props.route.auth.login
  // }

        //   <div className="header">
        //     <img src={LogoImg} role="presentation" width="200" />
        //   </div>
        //   <Auth 
        //     isAuthenticated={isAuthenticated}
        //     profile={profile}
        //     onLoginClick={this.handleLoginClick}
        //     onLogoutClick={this.handleLogoutClick}
        //   />
        // <Jumbotron>
        //   <h2 className={styles.mainTitle}>
        //     <img src={LogoImg} role="presentation" width="200" />
        //   </h2>
        // </Jumbotron>
        //     <div className="col-sm-8">
        //       <h4>Found {events.allEvents.length} Events:</h4>
        //       <Calendar events={events.allEvents} />
        //     </div>

        //     <JedisList
        //       jedis={allJedis}
        //       error={errorJedis}
        //       onClick={this.handleGetJedisClick}
        //       onGetJediClick={this.handleGetJediClick}
        //       isAuthenticated={isAuthenticated}
        //     />
        //     <Jedi jedi={singleJedi} />



// const mapDispatchToProps = (dispatch, ownProps) => {
//   return bindActionCreators({ 
//     loadEvents,
//     loadEvent,
//     // loadJedis,
//     // loadJedi,
//     // login,
//     // logout,
//     // dispatch
//   }, dispatch)
// }