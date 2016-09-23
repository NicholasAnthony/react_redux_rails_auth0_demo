import React, {Component, PropTypes as PT} from 'react'
import {Link} from 'react-router'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import styles from './styles.module.css'
import LogoImg from '../../assets/images/eventvs-logo.png';

export default class extends Component {
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
    const imgStyle = {position: "absolute", marginLeft: "-30px", marginTop: "-10px"}
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            {/*<a href="#" className="logo-text">eventvs</a>*/}
            <img src={LogoImg} role="presentation" />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/home">Home</NavItem>
            <NavItem eventKey={2} href="/login">Login</NavItem>
            <NavItem eventKey={2.1} href="/auth">Auth</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          { !isAuthenticated ? (
            <Nav pullRight>
              <NavItem eventKey={1} onClick={onLoginClick} href="#">
                Login
              </NavItem>
            </Nav>
            ) : (
            <Nav pullRight>
              <NavItem eventKey={2}>
                <img src={profile.picture} 
                  height="40px" 
                  role="presentation" 
                  style={imgStyle} />
              </NavItem>
              
              <NavItem eventKey={3}>
                <span>Welcome, {profile.nickname}</span>
              </NavItem>

              <NavItem eventKey={4} onClick={onLogoutClick}>
                Logout
              </NavItem>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    )
  }
}