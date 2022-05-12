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
import { utImg } from "../assets/imageLinks";

const UtProject = () => {

  return (
    <Container>
      <Row>
        <Col className='lg-8 mx-auto p-3 py-md-5'>
          <ReturnHomeLink />
          <NonProjectTitle title='Bachelors HDFS, University of Texas at Austin' />
          <ProjectDescription 
            text={"I graduated from the University of Texas at Austin with a Bachelors degree in Human Development."}
            />
          <ProjectImage image={utImg} />
          <ProjectText 
            text={"Some of the best years of my life that culminated in a Bachelors degree."} 
            />
          <ContactMe />
        </Col>
      </Row>
    </Container>
  )
}

export default UtProject
