import React, {useRef, useState, useEffect} from 'react'
import { Container, Row, Col, Card, Form, Spinner, Button } from 'react-bootstrap'
import Helmet from 'react-helmet'
import Loader from '../components/Loader'


function Apply() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const form = useRef();
  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();
  };
  return (
    <div className='apply-page'> 
    <Helmet>
       <title>Knight Corporate Services - Our Services</title>
       <meta name="description" content="Check out our core services in Nigeria's business ecosystem." />
     </Helmet>
    <Container className='mt-5 py-5 text-center'>
     <h1 className='what-heading'>Career Opportunities</h1>
     <p className='apply-message pb-5'>Welcome to our job application board, where we collaborate with leading companies in the Nigerian job market. With our strong partnerships, we are well-equipped to assist you in finding the perfect fit based on your abilities, experience, and career aspirations. Start your career journey today!</p>
     </Container>
     <Container className='what-div p-5' fluid>
      <Container className='p-md-5 my-5'>
      <Row>
      <Card className='apply-form'>
        <Card.Body>
        <Form ref={form} onSubmit={sendEmail}>
                    <Form.Group
                      className="mb-3"
                      controlId="FullName"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Full Name"
                        name="user_fullname"
                        required
                      />
                    </Form.Group>
                 
                    <Form.Group
                      className="mb-3"
                      controlId="Gender"
                    >
                      <Form.Select controlId="Gender" size="sm" className='form-control' name="user_gender">
                      <option>Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      </Form.Select>
                    </Form.Group>
               
                    <Form.Group
                      className="mb-3"
                      controlId="PhoneNumber"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Phone Number"
                        name="user_phone_number"
                        required
                      />
                    </Form.Group>
                
                    <Form.Group
                      className="mb-3"
                      controlId="Email"
                    >
                      <Form.Control
                        type="email"
                        placeholder="Enter Your Email Address"
                        name="user_email"
                        required
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="StateOfResidence"
                    >
                      <Form.Control
                        type="email"
                        placeholder="Enter Your State Of Residence"
                        name="user_state"
                        required
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="StateOfWork"
                    >
                      <Form.Control
                        type="email"
                        placeholder="Enter The State You'll Like To Work"
                        name="user_state_of_work"
                        required
                      />
                    </Form.Group>
                 
                    <Form.Group
                      className="mb-3"
                      controlId="Career"
                    >
                      <Form.Select size="sm" name='user_career' className='form-control'>
                      <option>Choose career path</option>
                      <option>Engineering</option>
                      <option>Information Technology(IT)</option>
                      <option>Construction</option>
                      <option>Human Resource Management</option>
                      </Form.Select>
                    </Form.Group>
               
                    <Form.Group
                      className="mb-3"
                      controlId="Resume"
                    >
                      
                      <Form.Text>Upload Resume</Form.Text>
                      
                      <Form.Control
                        type="file"
                        name="user_resume"
                      />
                      
                    </Form.Group>
                 <Col className='text-center'>
                 <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Still in development...
      </Button>
      {/*}
                <input className='btn btn-primary' type="submit" value="Send Message" />
  {*/}
                </Col>
            </Form>
        </Card.Body>
      </Card>
      </Row>
      </Container>
     </Container>
     </div>
  )
}

export default Apply