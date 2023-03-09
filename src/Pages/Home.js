import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import recruitment from '../images/recruitment.jpg'
import finance from  '../images/finance.jpg'
import it from '../images/it.jpg'
import Training from '../images/Training.jpg'
import tax from '../images/tax.jpg'
import account from '../images/account.jpg'
import FadeInSection from "../components/FadeInSection";
import {useEffect} from 'react'

function Home() {
  useEffect(() => {
   document.title = 'Knight Services - Home'
  }, []);
  return (
    <div>
    
    <Row>
      <Col>
        <Container>
          <FadeInSection>
          <Card className="text-center card-edit">
            <Card.Body>
              <Card.Title>
                Result-Oriented Consultancy Services For Your Business
              </Card.Title>
              <Card.Text className="py-2">
                Leverage on our decades of experience and actíve participation
                in Nigeria's business ecosystem to get professional HR and
                Business Support Solution.
              </Card.Text>
              <Card className="card-edit">
                <Row>
                  <Col md={12}>
                    <LinkContainer to="/contact">
                      <Button variant="primary" className="m-2">
                        Become Our Client
                      </Button>
                    </LinkContainer>
                    <LinkContainer to="/about">
                      <Button variant="secondary">Learn More</Button>
                    </LinkContainer>
                  </Col>
                </Row>
              </Card>
            </Card.Body>
          </Card>
          </FadeInSection>
        </Container>
      </Col>
      <Container>
        <Row className="pt-4 what-div">
          <p className="what-heading text-center">What We Do.</p>
          <Col md={4}>
            <FadeInSection>
            <Card className="text-center card2 mt-2 mb-3">
              <Card.Img className="img" variant="top" src={recruitment} />
              <Card.Body>
                <Card.Title className="card-title2">Recruitment.</Card.Title>
                <Card.Text>
                Matching the right talent with the right job is the most important aspect of recruitment. It keeps the employee motivated....
                <LinkContainer to="/services"><span className="more-link">more</span></LinkContainer>
                </Card.Text>
              </Card.Body>
            </Card>
            </FadeInSection>
          </Col>
          <Col md={4}>
            <FadeInSection>
            <Card className="text-center card2 mt-2 mb-3">
              <Card.Img className="img" variant="top" src={it} />
              <Card.Body>
                <Card.Title className="card-title2">IT solutions.</Card.Title>
                <Card.Text>
                Businesses that leverage the opportunities of digital platform in the operation of their business have proved to be more....
                  <LinkContainer to="/services"><span className="more-link">more</span></LinkContainer>
                </Card.Text>
              </Card.Body>
            </Card>
            </FadeInSection>
          </Col>
          <Col md={4}>
            <FadeInSection>
            <Card className="text-center card2 mt-2 mb-3">
              <Card.Img className="img" variant="top" src={finance} />
              <Card.Body>
                <Card.Title className="card-title2">Finance.</Card.Title>
                <Card.Text>
                Finance being the mitochondria that power other parts of the business requires a deliberate care...
                  <LinkContainer to="/services"><span className="more-link">more</span></LinkContainer>
                </Card.Text>
              </Card.Body>
            </Card>
            </FadeInSection>
          </Col>
          <Col md={4}>
            <FadeInSection>
            <Card className="text-center card2 mt-2 mb-3">
              <Card.Img className="img" variant="top" src={Training} />
              <Card.Body>
                <Card.Title className="card-title2">Learning and Development.</Card.Title>
                <Card.Text>
                We are armed with the understanding that learning needs for employees varies from department to department...
                  <LinkContainer to="/services"><span className="more-link">more</span></LinkContainer>
                </Card.Text>
              </Card.Body>
            </Card>
            </FadeInSection>
          </Col>
          <Col md={4}>
            <FadeInSection>
            <Card className="text-center card2 mt-2 mb-3">
              <Card.Img className="img" variant="top" src={account} />
              <Card.Body>
                <Card.Title className="card-title2">Accounting and Book-keeping</Card.Title>
                <Card.Text>
                Proper planning emanates from a good financial record. Armed....
                  <LinkContainer to="/services"><span className="more-link">more</span></LinkContainer>
                </Card.Text>
              </Card.Body>
            </Card>
            </FadeInSection>
          </Col>
          <Col md={4}>
            <FadeInSection>
            <Card className="text-center card2 mt-2 mb-3">
              <Card.Img className="img" variant="top" src={tax} />
              <Card.Body>
                <Card.Title className="card-title2">Taxation</Card.Title>
                <Card.Text>
                We collaborate with you to identify and implement a customized tax remittance system that allows a seamless...
                  <LinkContainer to="/services"><span className="more-link">more</span></LinkContainer>
                </Card.Text>
              </Card.Body>
            </Card>
            </FadeInSection>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
        <p className="what-heading text-center mt-3">Who Needs Our Services?.</p>
        <p className="text-center">We provide a one-stop business support to SMEs and Corporations. We are the go-to company when you need support in any area of your business.</p>
        <Col md={4} className="what-div mt-4 mb-4">
          <FadeInSection>
        <Card className="text-center mt-2 mb-3 pt-3">
           <i className="fas fa-business-time fa-3x"></i>
              <Card.Body>
                <Card.Title className="card-title2">SMEs and Corporations.</Card.Title>
                <Card.Text>
                Our Training service (Learning & Development) use the knowledge of an organization's and department's objective combined with thorough evaluation of company's workforce to determine learning gap and develop a proper learning plan that gives the company traction on its quest to achieve its objective.
                </Card.Text>
              </Card.Body>
            </Card>
            </FadeInSection>
        </Col>
        <Col md={4} className="primary-color">
          <FadeInSection>
        <Card className="text-center mt-2 mb-3 mt-5 primary-color">
            <i class="fa-duotone fa-industry-windows"></i>
              <i className="fas fa-truck fa-3x fa-mine"></i>
              <Card.Body>
                <Card.Title className="card-title2">Service companies.</Card.Title>
                <Card.Text>
                Companies in competitive industry who are looking to engage a third party service provider to handle part of their business process, thereby allowing them concentrate their effort on their core business function.
                </Card.Text>
              </Card.Body>
            </Card>  
            </FadeInSection>
        </Col>
        <Col md={4} className="what-div mt-4 mb-4">
          <FadeInSection>
        <Card className="text-center mt-2 mb-3 pt-3">
              <i className="fas fa-helmet-safety fa-3x"></i>
              <Card.Body>
                <Card.Title className="card-title2">Manufacturing companies(FMCG).</Card.Title>
                <Card.Text>
                We have an established talent pipeline, we also have a system that enable us match the right candidate to the right role. Providing our client with motivated employees who are happy doing their jobs. 
                Our hiring system provides not only efficiency and effectiveness but return on hiring investment (ROHI).
                </Card.Text>
              </Card.Body>
            </Card> 
            </FadeInSection>
        </Col>
        </Row>
      </Container>
    </Row>
    

   </div>
  );
}

export default Home;
