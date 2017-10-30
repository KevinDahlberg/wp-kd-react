import React, { Component } from 'react'
import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class Menu extends Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <LinkContainer to="/">
            <Navbar.Brand>
              The OCD Coder
            </Navbar.Brand>
          </LinkContainer>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/home">
              <NavItem eventKey={1} href="/home">Home</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to="/about">
              <NavItem eventKey={2} href="/about">About</NavItem>
            </LinkContainer>
            <LinkContainer to="/projects">
              <NavItem eventKey={3} href="/projects">Projects</NavItem>
            </LinkContainer>
          <NavDropdown eventKey={4} title="On The Web" id="nav-dropdown">
            <MenuItem eventKey={4.1}>Facebook</MenuItem>
            <MenuItem eventKey={4.2}>Github</MenuItem>
            <MenuItem eventKey={4.3}>Coding Blog</MenuItem>
          </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
