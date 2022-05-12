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
import { armyImg } from "../assets/imageLinks";

const ArmyBackground = () => {

  return (
    <Container>
      <Row>
        <Col className='lg-8 mx-auto p-3 py-md-5'>
          <ReturnHomeLink />
          <NonProjectTitle title='IT Specialist, US Army Reserve' />
          <ProjectDescription 
            text={"I was in the US Army Reserve as an IT Specialist for about 3 years, until November of 2021."}
            />
          <ProjectImage image={armyImg} />
          <ProjectText 
            text={"This was the beginning of my career in tech that sparked my interest in learning all aspects of computing, networks, and technology."} 
            />
          <ContactMe />
        </Col>
      </Row>
    </Container>
  )
}

export default ArmyBackground