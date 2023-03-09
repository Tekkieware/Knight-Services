import React from 'react'
import {Container, Col, Row, Image} from 'react-bootstrap'
import logo from '../Logo.png'
import {LinkContainer} from 'react-router-bootstrap'

function Footer() {
  return (
    <footer className='mt-3'>
      <Container className='footer'>
      <Row className='footer'>
        <Col md={12} className='footer'>
        <Image 
              src={logo}
              width="100"
              className="d-inline-block align-top footer-logo"
              alt="Knight services logo"
            />
            </Col>

      </Row> 
      <Row className='text-center'>
      <Col md={4} className="footer pt-1">
      <h5>Contact Information:</h5>  
      <ul>
        <li className='footer-list'>Address: Northwest Filling Station Office Complex, Oworonshoki-Oshodi Expressway, Gbagada, Lagos.</li>
        <li className='footer-list'>Phone: 08082328425</li>
        <li className='footer-list'>Email: Email- enquiry@knightservices.com, talk2knight.inc@gmail.com</li>
      </ul>
      </Col>
      <Col md={4} className="footer pt-1">
      <h5>Quick Links:</h5>  
      <ul>
        <LinkContainer to='/'>
        <li className='footer-list footer-link'>Home</li>
        </LinkContainer>
        <LinkContainer to="/services">
        <li className='footer-list footer-link'>Services</li>
        </LinkContainer>
        <LinkContainer to="/about">
        <li className='footer-list footer-link'>About Us</li>
        </LinkContainer>
        <LinkContainer to="/contact">
        <li className='footer-list footer-link'>Contact Us</li>
        </LinkContainer>
      </ul>
      </Col>
      <Col md={4} className="footer pt-1">
      <h5>Social:</h5>  
      <ul>
        <a href=''>
        <li className='footer-list'><i className="fa-brands fa-square-facebook"></i>&nbsp;&nbsp;Facebook</li>
        </a>
        <a href='https://www.linkedin.com/company/knight-corporate-services-ltd/'>
        <li className='footer-list'><i className="fa-brands fa-linkedin"></i>&nbsp;&nbsp;&nbsp;&nbsp;LinkedIn</li>
        </a>
      </ul>
      </Col>
      
      </Row> 
      <Row className='text-center copy'>
        <Col className='copy'>
        Copyrights &copy; Knight corporate services 2023. Design by Tekkieware.
        </Col>
      </Row>
      </Container>  
      
      </footer>
  )
}

export default Footer