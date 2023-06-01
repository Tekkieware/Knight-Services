import React from 'react'
import logo from '../Logo.png'
import {Navbar, Nav, Image, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {useState} from 'react'
function Header() {
  const [pinnavbar, setPinnavbar] =  useState(false)
 const changeNavBackground = () => {
      if (window.scrollY >= 80){
        setPinnavbar(true)
      }else{
        setPinnavbar(false)
      }
 }
  window.addEventListener('scroll', changeNavBackground)
  return (
        <Navbar expand="lg" fixed="top" collapseOnSelect>
          <Container fluid className='padd-container-fluid'>
        <LinkContainer to="/">  
        <Navbar.Brand>
            <Image 
              src={logo}
              width="150"
              className="d-inline-block align-top img-fluid"
              alt="Knight services logo"
            />
          </Navbar.Brand>
          </LinkContainer>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto">
            <LinkContainer to="/">
            <Nav.Link>HOME</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
            <Nav.Link>SERVICES</Nav.Link>
            </LinkContainer>
            <LinkContainer to="contact">
            <Nav.Link>CONTACT</Nav.Link>
            </LinkContainer>
            <LinkContainer to="about">
            <Nav.Link>ABOUT US</Nav.Link>
            </LinkContainer>  
          </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
  )
}

export default Header