import React, {useRef, useState} from 'react'
import {useEffect} from 'react'
import {Card, Row, Col, Container, Form, Button, Alert} from 'react-bootstrap'
import contact from '../images/contact.jpg'
import {Helmet} from 'react-helmet'
import emailjs from '@emailjs/browser';
function Contact() {
  const [error, setError] = useState("")
  const [emailSent, setEmailSent] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
   }, []);
   const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_r9mfqie', 'contact_form', form.current, 'wkbG4ac-EXzIqHQa_')
      .then((result) => {
          setEmailSent(true);
      }, (error) => {
          setError(error.text);
      });
      setEmailSent(true);
  };
  return (
    <div>
       <Helmet>
          <title>Knight Corporate Services - Contact Us</title>
          <meta name="description" content="Reach out to us so we work together to ensure your business gets the needed expertise to thrive in Nigeria's business ecosystem." />
        </Helmet>
        <Container className='m-top'>
          <Row>
            <Col>
              <Card className="bg-dark text-white">
                <Card.Img
                  className="img-fluid"
                  src={contact}
                  height={100}
                  alt="Contact image"
                />
                <Card.ImgOverlay></Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          <Row className="mt-1">
            <Col>
              <h3>
                <b className="contact">
                  Send a Message and We'll Get In Touch:
                </b>
              </h3>
            </Col>
          </Row>
          {error && 
          <Row>
            <Col><Col><Alert variant="warning">{error}</Alert></Col></Col>
          </Row>
          }
          {emailSent ? 
          <Row>
          <Col><Col><Alert variant="warning" className='text-center'>We received your message. We will get back to you shortly.</Alert></Col></Col>
        </Row> :
        <Row>
        <Col>
          <Card className="contact-form">
            <Card.Body>
              <Form ref={form} onSubmit={sendEmail}>
                <Container>
                  <Row>
                  <Col md={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="FirstName"
                      >
                        <Form.Label>First Name*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter First Name"
                          name="user_firstname"
                          required
                        />
                      </Form.Group>
                    </Col>                        
                    <Col md={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="LastName"
                      >
                        <Form.Label>Last Name*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Last Name"
                          name="user_lastname"
                          required
                        />
                      </Form.Group>
                    </Col>                        
                    <Col md={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="PhoneNumber"
                      >
                        <Form.Label>Phone Number*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Phone Number"
                          name="user_phone_number"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="Email"
                      >
                        <Form.Label>Email address*</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          name="user_email"
                          required
                        />
                        <Form.Text>
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="CompanyName"
                      >
                        <Form.Label>Company Name*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Your Company Name"
                          name="user_company"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="CompanyAddress"
                      >
                        <Form.Label>Company Address*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Your Company Address"
                          name="user_company_address"
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group
                        className="mb-3"
                        controlId="Message"
                      >
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea" 
                          rows={5}
                          placeholder="Any other information you'd like to share?."
                          name="message"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <input className='btn btn-primary' type="submit" value="Send Message" />
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
        }
          <Row>
            <Col md={4} className="mt-4 mb-4">
              <Card className="text-center mt-2 mb-3 pt-3 action-card">
                <Card.Header>
                <i className="fas fa-phone-volume fa-3x"></i>
                </Card.Header>
                <Card.Body>
               
                  <Card.Text className='contact-details'>
                  +2348082328425
                 
                     
                   
                  </Card.Text>
                </Card.Body>
                <Card.Footer> <a href="tel:+2348082328425"><Button variant="secondary">Call Us Now</Button></a></Card.Footer>
              </Card>
            </Col>
            <Col md={4} className="primary-color action-card">
              <Card className="text-center mt-2 mb-3 primary-color pt-2">
                <i className="fas fa-magnifying-glass-location fa-4x fa-mine"></i>
                <hr />
                <Card.Body>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7571348387355!2d3.3725308141279537!3d6.552316024647082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dfbdfd257af%3A0xf27a01118ee143b9!2sNorthwest%20Petroleum%20Mega%20Station!5e0!3m2!1sen!2sng!4v1679131396370!5m2!1sen!2sng" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mt-4 mb-4">
              <Card className="text-center mt-2 mb-3 pt-3 action-card">
                <Card.Header>
                <i className="fas fa-envelope-circle-check fa-3x"></i>
                </Card.Header>
                <Card.Body>
                  <Card.Text className='contact-details'>
                  sales@knightservices.ng,
                  talk2knight.inc@gmail.com
                 
                     
                   
                  </Card.Text>
                </Card.Body>
                <Card.Footer><a href='mailto:sales@knightservices.ng'><Button variant="secondary">Email us Now</Button></a></Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default Contact