import React from 'react'
import {useEffect} from 'react'
import {Card, Image, Col, Row, Container, Toast} from 'react-bootstrap'
import about from '../images/about.jpg'
import FadeInSection from '../components/FadeInSection'
import Testimonials from '../components/Testimonials'
import {Helmet} from 'react-helmet'
function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
   }, []);
  return (
    <div>
       <Helmet>
          <title>Knight Corporate Services - About Us</title>
          <meta name="description" content="Find out all your need to know about one of the most experienced business consultants in Nigeria." />
        </Helmet>
      <Container className='m-top'>
      <Row className='pt-3'>
       
        <Col md={6} className="what-div about-us py-3">
        <h3 className='text-center'>At <b className='knight-about'>Knight Corporate Services, </b> we provide professional HR and Business Support Solution in Nigeria.</h3>
        <hr />
        <p className='about-message'>
        We leverage decades of experience and actíve participation in Nigeria's business ecosystem to deliver a cost-effective and qualitative services across several areas such as Recruitment and Assessment, Training, Outsourcing, Taxation and Accounting Services.
        take pride in our ability to analyze and identify each client's peculiar need, we leverage that information to provide an effective and tailored solution. We have a team of young and agile professionals who will take-up some of your business function, allowing you to concentrate your effort on your core business.
        We cover a wide range of sectors including but not limited to:
        </p>
        <ul>
          <li className='about-message'>Banking.</li>
          <li className='about-message'>Manufacturing.</li>
          <li className='about-message'>Telecommunications.</li>
          <li className='about-message'>Service.</li>
        

          </ul>

          <p className='about-message'>
          <b>Let us handle part of your business processes, thereby allowing you concentrate on your core business function.</b>
          </p>

        </Col>
      
        <Col md={6} className="text-center py-2">
          <FadeInSection>
        <Card className="bg-dark text-white border-image-clip-path">
      <Card.Img src={about} alt="Card image" />
      <Card.ImgOverlay className='mt-lg-5 mt-md-3 mt-3'>
        <Card.Text>
        <h3 className='quote'>“He who wants to do everything will never do anything.” <br /><br />-André Maurois.</h3>
        </Card.Text>
        
      </Card.ImgOverlay>
    </Card>
    </FadeInSection>
        
        </Col>
      </Row>
      </Container>
      <Testimonials />
    </div>
  )
}

export default About