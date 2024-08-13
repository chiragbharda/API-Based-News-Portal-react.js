import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Nav, Navbar, Dropdown, DropdownButton } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navbar.css';

export default function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <LinkContainer to="/">
        <Navbar.Brand className="navbar-brand-custom">Today News</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/">
            <Nav.Link className="nav-link-custom">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/services">
            <Nav.Link className="nav-link-custom">Business</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/technology">
            <Nav.Link className="nav-link-custom">Technology</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/world">
            <Nav.Link className="nav-link-custom">World</Nav.Link>
          </LinkContainer>
          <DropdownButton id="dropdown-basic-button" title="More" className="nav-link-custom">
            <LinkContainer to="/movies">
              <Dropdown.Item>Movies</Dropdown.Item>
            </LinkContainer>
            <LinkContainer to="/automobile">
              <Dropdown.Item >Automobile</Dropdown.Item>
            </LinkContainer>
            <LinkContainer to="/miscellaneous">
              <Dropdown.Item >Miscellaneous</Dropdown.Item>
            </LinkContainer>
            <LinkContainer to="/startup">
              <Dropdown.Item >Startup</Dropdown.Item>
            </LinkContainer>
            <LinkContainer to="/sport">
              <Dropdown.Item >Sport</Dropdown.Item>
            </LinkContainer>
            <LinkContainer to="/politics">
              <Dropdown.Item >Politics</Dropdown.Item>
            </LinkContainer>
          </DropdownButton>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
