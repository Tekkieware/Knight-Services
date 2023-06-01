import React from 'react'
import {Container, Row, Col, Carousel, Card} from 'react-bootstrap'

function Testimonials() {
  return (
    <Container fluid className='testimonials'>
    <Container className='mt-2'>
        <Row>
        <p  className="what-heading text-center mt-3 mb-0">What Our Clients Say.</p>

        <Carousel className='text-center textimonial-carousel'>
      <Carousel.Item className='testimonial-message'>
          <h3 className='testimonial-name'>Alexander Idowu. <br /> <b className='testimonial-company'>Executive Director/Business Transformation Strategist, SWIX Integrated Solutions. Lagos.</b></h3>
          <p className='testimonial-quote'>"If you need a reputable outsourcing partner you can trust to deliver optimally on core functions in your organisation while you focus on other pressing deliverables, then Knight Corporate Services should be your go-to partner.
         
            When we started SWIX INTEGRATED SOLUTIONS two years ago, we were focused on improving the quality of our services and as a result, we needed help with keeping track of our corporate finance and distribution mix; Knight Corporate Services came to the rescue as a trusted outsourcing partner. The decision which still stands as one of the best we made till date. Strongly recommended!"</p>
      </Carousel.Item>
      <Carousel.Item className='testimonial-message'>
          <h3 className='testimonial-name'>Bisola Bakare.<br /><b className='testimonial-company'>HR, Fastizer Foods and Confectionery Ltd. Lagos.</b></h3>
          <p className='testimonial-quote'>"We are really grateful to Knight Corporate Services for being a trusted outsourcing partner and for assisting us in meeting our manpower needs and in turn our production targets."</p>
      </Carousel.Item>
    </Carousel>
        
      
        </Row>
      </Container>
      </Container>
  )
}

export default Testimonials