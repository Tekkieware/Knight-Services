import React from 'react'
import {useEffect} from 'react'
import {Accordion, Row, Col, Card, Container} from 'react-bootstrap'
import services from '../images/handshake.jpg'
import {Helmet} from 'react-helmet'

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0)
   }, []);
  return (
    <div>
       <Helmet>
          <title>Knight Corporate Services - Our Services</title>
          <meta name="description" content="Check out our core services in Nigeria's business ecosystem." />
        </Helmet>
      <Container className='m-top'>
      <Row>
        <Col>
        <Card className="bg-dark text-white">
      <Card.Img className='img-fluid' src={services} height={100} alt="Services image" />
      <Card.ImgOverlay>
      </Card.ImgOverlay>
    </Card>
        </Col>
      </Row>
      <Row className='mt-1'>
        <Col>
      <h3><b className='services'>Our <b className='services2'> Core</b> Services</b></h3>
      
          </Col>
        </Row>
      <Container className='what-div py-3'>
      <Row>
        <Col>
      <Accordion defaultActiveKey={['0', '1', '2', '3', '4']} flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Outsourcing.</Accordion.Header>
        <Accordion.Body>
        Running a successful business need not be a daunting task. By reducing the load you carry, you can minimize distractions and stay focused on your core objectives. Outsourcing certain business operations can help you achieve this goal and accelerate your progress. At Knight Corporate Services, we offer reliable outsourcing solutions that can help you streamline your business and achieve your goals faster. By partnering with us, you can free yourself from unnecessary burdens and gain the competitive edge you need to succeed. Make the right decision today and let us help you take your business to the next level.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Recruitment.</Accordion.Header>
        <Accordion.Body>
        Ensuring that the ideal candidate is matched with the appropriate role is the cornerstone of successful recruitment. This not only fosters a sense of motivation in the employee, but also leads to sustained job satisfaction. Ultimately, this is the key to achieving heightened productivity. At Knight Corporate Services, we have honed a strategy for identifying and aligning an applicant's strengths with the most fitting role. You can trust us to deliver the most qualified candidate for your organization's needs.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Learning and Development.</Accordion.Header>
        <Accordion.Body>
        The need to grow necessitate the need to learn, build capacity and empower employee. Knight Corporate Services stand at the crossroad to help you meet your learning needs.
We are armed with the understanding that learning need for employees varies from department to department and from organization to organization. our trainings are customized to meet the both individual need and that of the organization at large.
let us help you grow.


        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Finance.</Accordion.Header>
        <Accordion.Body>
        Finance being the mitochondria that power other parts of the business requires a deliberate care. Therefore, organizations must consciously sanitize its finance if it must stay in business. 
Knight Corporate Services provides wide array of financial services that guarantee the sanity of your company’s finance. 


        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Auditing.</Accordion.Header>
        <Accordion.Body>
        Our team of professionals will thoroughly examine your records to check for leakages, loopholes and errors. With the aim of establishing integrity and recommending system for financial efficiency that ensure optimal utilization of resources. 


        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Taxation.</Accordion.Header>
        <Accordion.Body>
        We collaborate with you to identify and implement a customized tax remittance system that allows a seamless compliance with tax obligations. We keep you informed of any change in tax regulation that concerns your business and proffer a solution that help your business accommodate and adjust to the changes. 


        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Accounting and Book-keeping.</Accordion.Header>
        <Accordion.Body>
        Proper planning emanates from a good financial record. Armed with this knowledge, we guide our clients on how to properly keep records to foster a more accurate planning. We help undertake the following:
      <ul>
      <li>General ledger and financial statement preparation.</li>  
      <li>Accounting software setup and training.</li> 
      <li>Book-keeping (Monthly, Quarterly and Annually).</li> 
      <li>Accounting system setup for new business </li> 
      <li>Tax return preparation.</li> 
      <li>Computerized payroll services.</li> 
      </ul>            
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>IT solutions.</Accordion.Header>
        <Accordion.Body>
        Businesses that leverage the opportunities of digital platform in the operation of their business have proved to be more profitable. More than ever it is easier to segment, target and reach wider audience through the use of these digital media. Knight Corporate Services tech team are abreast of the development in the tech industry, therefore, we provide state-of-the-art IT solutions that meet industry standard
        Our professionals are always available to recommend and give you the IT support you need to give your business an edge in the marketplace.
        <ul>
          <li>Digital marketing</li>
          <li>App and Web Development</li>
          
        </ul>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Col>
        </Row> 
      </Container>  
      </Container>  
    </div>
  )
}

export default Services