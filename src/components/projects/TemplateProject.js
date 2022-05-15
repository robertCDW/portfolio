import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row";

import { 
  ProjectTitle,
  ProjectStack,
  ReturnHomeLink,
  ProjectDescription,
  ProjectText,
  ProjectCode,
  ProjectLinks,
  ProjectImage
} from "../shared/ProjectComponents";
import ContactMe from "../pages/ContactMe";
import { animateScroll as scroll } from 'react-scroll'

const TemplateProject = () => {

  useEffect(() => {
    scroll.scrollToTop({ duration: 0 })    
  }, [])

  const tech = [
    'TypeScript',
    'Python'
  ]

  // to add code snippets, each index is a new line
  const code = [
    "<p>text</p>",
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
          <ProjectImage image={'https://user-images.githubusercontent.com/71351016/162082449-a7264ea6-5f49-4520-b9b0-1582ffaed4cb.jpg'} />
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
