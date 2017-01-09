import React, { PropTypes as T } from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import styles from './styles.module.css'

export class ProfileDetails extends React.Component {
  static propTypes = {
    profile: T.object
  }

  render(){
    const { profile } = this.props
    const { address } = profile.user_metadata || {}
    return (
      <div>
        <h4>Profile Details</h4>
        <p><strong>Name: </strong> {profile.name}</p>
        <p><strong>Email: </strong> {profile.email}</p>
        <p><strong>Nickname: </strong> {profile.nickname}</p>
        <p><strong>Address: </strong> {address}</p>
        <p><strong>Created At: </strong> {profile.created_at}</p>
        <p><strong>Updated At: </strong> {profile.updated_at}</p>
      </div>
    )
  }
}

export default ProfileDetails;
