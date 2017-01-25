import React, { Component, PropTypes as T } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {loginSuccess, loginError, logoutSuccess} from '../../actions'
import TopNav from '../../components/TopNav/TopNav'
import AppHeader from '../../components/AppHeader/AppHeader'
import AppSidebar from '../../components/AppSidebar/AppSidebar'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Split from 'grommet/components/Split'
import styles from './styles.module.css'
import MenuIcon from 'grommet/components/icons/base/Menu';


class App extends Component {
  constructor(props) {
    super(props)
    
    props.route.auth.on('authorization_complete', (newProfile) => {
      this.props.loginSuccess(newProfile)
      this.context.router.push('/home')
    })

    this.state = {
      splitSide: "right",
      desktop: true
    }

    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.splitSwitch = this.splitSwitch.bind(this)
    this.handleResponsiveUpdate = this.handleResponsiveUpdate.bind(this)

  }

  static contextTypes = {
    router: T.object
  }

  handleLoginClick() {
    this.props.route.auth.login()
  }

  handleLogoutClick(){
    this.props.route.auth.logout()
    this.props.logoutSuccess(this.props.profile)
    this.context.router.push('/login');
  }

  splitSwitch() {
    this.setState({
      splitSide: this.state.splitSide === "right" ? "left" : "right"
    })
  }

  handleResponsiveUpdate(cols) {
    console.log("COLS: ", cols)
    this.setState({
      desktop: cols === "multiple"
    })
  }

  render() {
    console.log("🔥  RENDERING > this.props", this.state)

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
      profile
    } = this.props

    let side = this.state.splitSide;

    return (
      <Box>
        <TopNav 
          isAuthenticated={isAuthenticated}
          profile={profile}
          onLoginClick={this.handleLoginClick}
          onLogoutClick={this.handleLogoutClick}
        />
        <Box>
          {children}
        </Box>

      </Box>
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


      // <Split flex="right" priority={this.state.splitSide} onResponsive={ this.handleResponsiveUpdate }>
      //   <AppSidebar splitSwitch={this.splitSwitch} desktop={this.state.desktop} />
      //   <Box colorIndex='light-2' basis="2/3" justify='start' align='stretch' pad='none'>
      //     <h1>Two</h1>
      //     {!this.state.desktop && 
      //       <Button plain={true} onClick={this.splitSwitch} icon={<MenuIcon />} />
      //     }
      //   </Box>
      // </Split>

         // <Layer onClose={this.props.onClose} closer={true} align="left" a11yTitle={'Add Task Form'}>
         //   <h3>Layer</h3>
         // </Layer>

        // <Split flex='right'>
        //   <Box colorIndex='grey-3' basis="1/3" justify='start' align='start' pad='none'>
        //     <AppSidebar />
        //   </Box>
        //   <Box colorIndex='light-2' basis="2/3" justify='start' align='stretch' pad='none'>
        //       <TopNav 
        //         isAuthenticated={isAuthenticated}
        //         profile={profile}
        //         onLoginClick={this.handleLoginClick}
        //         onLogoutClick={this.handleLogoutClick}
        //       />
        //     <AppHeader 
        //       isAuthenticated={isAuthenticated}
        //       profile={profile}
        //       onLoginClick={this.handleLoginClick}
        //       onLogoutClick={this.handleLogoutClick}
        //     />
        //     <Box basis="full" justify='start' align='stretch' pad='medium'>
        //       {children}
        //     </Box>
        //   </Box>
        // </Split>