import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row";

import { ProjectTitle, ProjectStack, ReturnHomeLink, ProjectDescription, ProjectText, ProjectCode, ProjectLinks, ProjectImage } from "../shared/ProjectComponents";
import ContactMe from "../pages/ContactMe";

const DayPlannerProject = () => {

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
          <ProjectTitle title='Daily Prioritization Scheduler' />
          <ProjectStack items={tech} />
          <ProjectDescription 
            text={"My biggest productivity struggle is deciding what to do next and figuring out what resources I need to get started. My goal with this project was to create a tool that creates time blocks, prioritizes tasks, cuts down on the time between tasks, and makes sure that nothings gets neglected throughout the day."}
            />
          <ProjectImage image={'images/therr-app.webp'} />
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

export default DayPlannerProject
