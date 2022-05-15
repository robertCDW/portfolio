import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row";

import { ProjectTitle, ProjectStack, ReturnHomeLink, ProjectDescription, ProjectText, ProjectCode, ProjectLinks, ProjectImage } from "../shared/ProjectComponents";
import ContactMe from "../pages/ContactMe";
import { animateScroll as scroll } from 'react-scroll'

const DayPlannerProject = () => {

  useEffect(() => {
    scroll.scrollToTop({ duration: 0 })    
  }, [])

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
            text={"My biggest productivity struggle is deciding what to do next and figuring out what resources I need to get started. My goal with this project was to make a tool that creates time blocks, prioritizes tasks, cuts down on the time between tasks, and ensuring nothing gets neglected throughout the day."}
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

export default DayPlannerProject
