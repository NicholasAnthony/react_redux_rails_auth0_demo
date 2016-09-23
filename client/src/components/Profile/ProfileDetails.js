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
    console.log("STYLES: ", styles)
    return (
      <div>
        {/*<Row className={styles.root}>*/}
          {/*<Col xs={3}>*/}
            {/*<Image src={profile.picture} circle bsClass={styles.avatar} style={{width: "100%"}}/>*/}
          {/*</Col>*/}
          {/*<Col xs={6}>*/}
            <h3>Profile Details</h3>
            <p><strong>Name: </strong> {profile.name}</p>
            <p><strong>Email: </strong> {profile.email}</p>
            <p><strong>Nickname: </strong> {profile.nickname}</p>
            <p><strong>Address: </strong> {address}</p>
            <p><strong>Created At: </strong> {profile.created_at}</p>
            <p><strong>Updated At: </strong> {profile.updated_at}</p>
          {/*</Col>*/}
        {/*</Row>*/}
      </div>
    )
  }
}

export default ProfileDetails;
