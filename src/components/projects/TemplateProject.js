import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row";

import { ProjectTitle, ProjectStack, ReturnHomeLink, ProjectDescription, ProjectText, ProjectCode, ProjectLinks, ProjectImage } from "../shared/ProjectComponents";
import ContactMe from "../pages/ContactMe";

const TemplateProject = () => {

  const tech = [
    'TypeScript',
    'Python'
  ]

  // to add code snippets, each index is a new line
  const code = [
    "text",
    "text",
    "text"
  ]

  return (
    <Container>
      <Row>
        <Col className='lg-8 mx-auto p-3 py-md-5'>
          <ReturnHomeLink />
          <ProjectTitle title='Template' />
          <ProjectStack items={tech} />
          <ProjectDescription 
            text={"I worked with the [Senior UX Designer] and [VP of Technology] at [Therr] to build a thing for [Instagram] that [does a thing that provides value]."}
            />
          <ProjectImage image={"https://i.imgur.com/XwAselJ.jpeg"} />
          <ProjectText 
            text={"I did some stuff that did a thing. It was hard. This is how I did it."} 
            />
          <ProjectCode 
            code={code.join('\n')}
          />
          <ProjectLinks
            deployed={"https://www.google.com"}
            github={"https://www.google.com"}
            />
          <ContactMe />
        </Col>
      </Row>
    </Container>
  )
}

export default TemplateProject
