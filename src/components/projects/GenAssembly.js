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
import { genAssemblyImg } from "../assets/imageLinks";

const GenAssemblyBackground = () => {

  return (
    <Container>
      <Row>
        <Col className='lg-8 mx-auto p-3 py-md-5'>
          <ReturnHomeLink />
          <NonProjectTitle title='Student, General Assembly' />
          <ProjectDescription 
            text={"After years of being interested in exploring a career in software development, I finally took the chance and joined General Assembly."}
            />
          <ProjectImage image={genAssemblyImg} />
          <ProjectText 
            text={"While I use coding in my day to day work, it was never at the forefront of my day but it was always my favorite part of the day. I could get lost for hours"} 
            />
          <ContactMe />
        </Col>
      </Row>
    </Container>
  )
}

export default GenAssemblyBackground