import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row";

import { ProjectTitle, ProjectStack, ReturnHomeLink, ProjectDescription, ProjectText, ProjectCode, ProjectLinks, ProjectImage } from "../shared/ProjectComponents";
import ContactMe from "../pages/ContactMe";

const SpeedReadProject = () => {

  const tech = [
    'React',
    'MongoDB',
    'Express.js',
    'Node'
  ]

  // to add code snippets, each index is a new line
  const code = [
    "<p>text</p>",
    "<p>text</p>",
    "<p>text</p>"
  ]

  return (
    <Container>
      <Row>
        <Col className='lg-8 mx-auto p-3 py-md-5'>
          <ReturnHomeLink />
          <ProjectTitle title='Speed Reading' />
          <ProjectStack items={tech} />
          <ProjectDescription 
            text={"I've always thought it was a neat trick being able to read fast, but most of the speed reading apps lack sufficient free content. I created an app that takes stories from Reddit subreddits that are designed around writing, creating a near endless amount of content."}
            />
          <ProjectImage image={'images/therr-app.webp'} />
          <ProjectText 
            text={"This was my first experience working heavily with external APIs, so I had to learn how to go through a company's API documentation to access the data that I wanted and then convert it into the format I needed."} 
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

export default SpeedReadProject
