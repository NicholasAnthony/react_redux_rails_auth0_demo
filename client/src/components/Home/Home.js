import React, { PropTypes as T } from 'react'
import {Button} from 'react-bootstrap'
// import AuthService from '../../utils/AuthService'
import Messages from '../../components/Messages/Messages'
import ProfileDetails from '../../components/Profile/ProfileDetails'
import ProfileEdit from '../../components/Profile/ProfileEdit'
import styles from './styles.module.css'
import AuthService, {logoutSuccess} from '../../utils/AuthService'

export class Home extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      profile: props.auth.getProfile()
    }
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    })
  }

  logout(){
    this.props.auth.logout()
    this.props.dispatch(logoutSuccess(this.state.profile))
    this.context.router.push('/login');
  }

  render(){
    const { profile } = this.state
    return (
      <div className={styles.root}>
        <h2>Home</h2>
        <p>Welcome {profile.name}!</p>
        <Messages auth={this.props.auth}></Messages>
        <ProfileDetails profile={profile}></ProfileDetails>
        <ProfileEdit profile={profile} auth={this.props.auth}></ProfileEdit>
        <Button onClick={this.logout.bind(this)}>Logout</Button>
      </div>
    )
  }
}

export default Home;
