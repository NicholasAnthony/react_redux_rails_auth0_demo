import React, {Component, PropTypes as PT} from 'react'
import {Link} from 'react-router'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import styles from './styles.module.css'
import LogoImg from '../../assets/images/nyn-grey.png';

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
    const welcome = `Welcome, ${profile.nickname}`
    return (
      <Navbar fixedTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            {/*<a href="#" className="logo-text">eventvs</a>*/}
            <img src={LogoImg} role="presentation" />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          
          { !isAuthenticated ? (
            <Nav>
              <NavItem eventKey={2} href="/login">Login</NavItem>  
            </Nav>
          ) : (
            <Nav>
              {/*<NavItem eventKey={1} href="/home">Home</NavItem>*/}
              <NavItem eventKey={2.1} href="/events">Events</NavItem>
              {/*
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
              */}
            </Nav>
          )}

          { isAuthenticated ? (
            <Nav pullRight>
              <NavItem eventKey={4}>
                <img src={profile.picture} 
                  height="40px" 
                  role="presentation" 
                  style={imgStyle} />
              </NavItem>

              <NavDropdown eventKey={5} title={welcome} id="basic-nav-dropdown">
                <MenuItem eventKey={5.1} href="/home">Profile</MenuItem>
                <MenuItem eventKey={5.2} onClick={onLogoutClick}>Logout</MenuItem>
                {/*
                  <MenuItem eventKey={5.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={5.3}>Separated link</MenuItem>
                */}
              </NavDropdown>


              

            </Nav>
          ) : ("")}

        </Navbar.Collapse>
      </Navbar>
    )
  }
}