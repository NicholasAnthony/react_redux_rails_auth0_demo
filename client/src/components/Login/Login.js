import React, { Component, PropTypes as T } from 'react'
import AuthService from '../../utils/AuthService'
import GeoLocation from '../../utils/GeoLocation'
import styles from './styles.module.css'
import {
  Box,
  Header,
  Heading,
  Form,
  Button,
  Label,
  Footer
} from '../Common'



export class Login extends Component {
  constructor(props, context) {
    super(props, context)
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const { auth, dispatch } = this.props
    return (
      <Box 
        size={{height: 'large'}} 
        justify="center"
        align="center"
        pad={{vertical: "large"}}
        flex="grow"
        >
        <Header size="medium" justify="center" pad={{horizontal: "large"}}>
          <Heading align="center" tag="h2">
            Login with Facebook, Gihub, Google or Twitter
          </Heading>
        </Header>
        <Footer pad={{"vertical": "medium"}} justify="center">
          <Button label='Login' primary={true} type='submit' onClick={auth.login.bind(this)} />
        </Footer>
        <b>Geolocation Data: </b>
        <GeoLocation />
      </Box>
    )
  }
}

export default Login;
