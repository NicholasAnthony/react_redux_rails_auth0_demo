import React, { PropTypes as T } from 'react'
import {Row, Col, Image, Button} from 'react-bootstrap'
import AuthService from '../../utils/AuthService'
import Messages from '../../components/Messages/Messages'
import ProfileDetails from '../../components/Profile/ProfileDetails'
import ProfileEdit from '../../components/Profile/ProfileEdit'
import styles from './styles.module.css'


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

  render(){
    const { profile } = this.state
    return (
      <div>
        <img src={profile.picture} alt="This is your beautiful face" />
        <hr/>
        <Button block onClick={this.props.onLogoutClick}>Logout</Button>
        <h2>Welcome back, {profile.name}!</h2>
        <hr/>
        <ProfileDetails profile={profile} />
        <hr/>
        <ProfileEdit profile={profile} auth={this.props.auth} />
        <hr/>
        <Messages auth={this.props.auth} />
      </div>
    )
  }
}

export default Home;
