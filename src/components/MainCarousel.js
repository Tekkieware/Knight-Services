import React from 'react'
import accounts from '../images/accounts.png'
import office from '../images/office.png'
import officeclose from '../images/officeclose.png'
import recruit from '../images/recruit.png'
import hero from '../images/hero.jpg'
import {Container, Carousel, Row, Col, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import FadeInSection from "./FadeInSection";


function MainCarousel() {
  return (
    
    <Container fluid>
      <Carousel className="main-carousel d-none d-sm-block">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hero}
            alt="Result-Oriented Consultancy Services For Your Business"
          />
          <Carousel.Caption>
            <h3>Knight Corporate Services</h3>
            <p>
              "Let us work with you to take your business to the next level."
            </p>
            <Row>
              <Col md={12}>
                <LinkContainer to="/contact">
                  <Button variant="primary" className="m-md-2">
                    Become Our Client
                  </Button>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Button variant="secondary">Learn More</Button>
                </LinkContainer>
              </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={office}
            alt="Result-Oriented Consultancy Services For Your Business"
          />
          <Carousel.Caption>
            <h3>Consultancy Services</h3>
            <p>
              "Leverage on our decades of experience and actíve participation in
              Nigeria's business ecosystem to get professional HR and Business
              Support Solution."
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={officeclose}
            alt="Recruiting Only The Finest Out There"
          />

          <Carousel.Caption>
            <h3>Outsourcing.</h3>
            <p>
              "Trust us to deliver the most qualified candidates for your
              organization's specific job needs."
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={recruit}
            alt="Recruiting Only The Finest Out There"
          />

          <Carousel.Caption>
            <h3>Recruitment.</h3>
            <p>"Hiring the right people aids the growth of your business."</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={accounts}
            alt="Balance Your Accounts And Taxes"
          />

          <Carousel.Caption>
            <h3>Taxation.</h3>
            <p>
              "We'll work together to identify and implement a customized tax
              remittance system that allows a seamless compliance with tax
              obligations"
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
   
  );
}

export default MainCarousel