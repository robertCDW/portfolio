import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row";

import { 
  NonProjectTitle,
  ReturnHomeLink,
  ProjectDescription,
  ProjectText,
  ProjectImage
} from "../shared/ProjectComponents";
import ContactMe from "../pages/ContactMe";
import { cdwImg } from "../assets/imageLinks";

const ArmyBackground = () => {

  return (
    <Container>
      <Row>
        <Col className='lg-8 mx-auto p-3 py-md-5'>
          <ReturnHomeLink />
          <NonProjectTitle title='Network Engineer, CDW' />
          <ProjectDescription 
            text={"With a focus on building and deploying networks and servers, I've picked up several scripting languages over the years such as Ansible and Python."}
            />
          <ProjectImage image={cdwImg} />
          <ProjectText 
            text={"When I joined CDW, the design and deployment of customer servers was a very manual process. When given the chance, I joined the optional Virtualization Team that discussed and practiced automation of CDW/customer assets."} 
            />
          <ProjectText 
            text={"Myself and the team developed tools to automate processes such as documentation creation and add common configurations to servers, improving time to deployment and reducing the likelihood of human error."} 
            />
          <ProjectText 
            text={"Python with the Requests library was our primary tool for automating Meraki deployments and Ansible was the primary tool for Cisco deployments."} 
            />
          <ContactMe />
        </Col>
      </Row>
    </Container>
  )
}

export default ArmyBackground