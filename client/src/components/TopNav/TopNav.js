import React, {Component, PropTypes as PT} from 'react'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import Search from 'grommet/components/Search'
import Menu from 'grommet/components/Menu'
import Actions from 'grommet/components/icons/base/Actions'
import Anchor from 'grommet/components/Anchor'
import LogoImg from '../../assets/images/nyn-fire-med.png'
import User from 'grommet/components/icons/base/User'
import Calendar from 'grommet/components/icons/base/Calendar'
import Styles from './styles.module.css'






export default class TopNav extends Component {
  constructor(props) {
    super(props)
  }

  static PropTypes = {
    isAuthenticated: PT.bool,
    onLoginClick: PT.func,
    onLogoutClick: PT.func
  }

  render() {
    const { onLoginClick, onLogoutClick, isAuthenticated, profile } = this.props
    // const welcome = `Welcome, ${profile.nickname}`
    return (
      <Header
        align="center"
        flex="grow"
        direction="row"
        justify="between"
        pad={{horizontal: "medium"}}
        responsive={false}
        separator="bottom"
        size="large"
        >
        <Menu
          responsive={true}
          direction='row'
          inline={true}
          closeOnClick={true}
          dropAlign={{top: "top", left: "left"}}
          pad="none"
          size="medium"
          align="end"
          basis="1/3"
          className={Styles.menu}
          >
          { isAuthenticated ? ( <Anchor icon={<User />} animateIcon={true} href='/profile' /> ) : ( "" )}
          { isAuthenticated ? ( <Anchor icon={<Calendar />} animateIcon={true} href='/events' /> ) : ( "" )}
        </Menu>

        <Box
          responsive={false}
          direction='row'
          pad="none"
          justify="center"
          flex={false}
          basis="1/3"
          >
          <Anchor href='/' className='active'>
            <img src={LogoImg} alt="logo" />
          </Anchor>
        </Box>

        <Menu
          responsive={true}
          direction='row'
          inline={true}
          closeOnClick={true}
          justify="end"
          dropAlign={{top: "top", right: "right"}}
          pad="none"
          size="medium"
          align="start"
          basis="1/3"
          className={Styles.menu}
          >
          { !isAuthenticated ? (
            <Anchor href='/login' className='active'>Login</Anchor>
          ) : (
            <Anchor href='#' onClick={onLogoutClick}>Log Out</Anchor>
          )}
        </Menu>

      </Header>
    )
  }
}