import React from 'react'
import logo from '../Logo.png'
import {Navbar, Nav, Image, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
function Header() {
  return (
    <header className='text-center'>
        <Navbar expand="lg" sticky='top'>
          <Container>
        <LinkContainer to="/">
        <Navbar.Brand href="#home">
            <Image 
              src={logo}
              width="200"
              className="d-inline-block align-top"
              alt="Knight services logo"
            />
          </Navbar.Brand>
          </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
            <Nav.Link>Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="contact">
            <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="about">
            <Nav.Link>About Us</Nav.Link>
            </LinkContainer>  
          </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
    
  )
}

export default Header