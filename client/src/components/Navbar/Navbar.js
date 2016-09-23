import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import styles from './styles.module.css'
import LogoImg from '../../assets/images/eventvs-logo.png';

export default class extends Component {
  // state = {
  // }
  // componentWillReceiveProps(nextProps) {
  // }
  // handleSubmit = (e) => {
  // }
  // handleInputChange = (e) => {
  // }
  render() {
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
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavItem eventKey={2} href="#">Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}