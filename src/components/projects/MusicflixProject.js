import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row";

import { ProjectTitle, ProjectStack, ReturnHomeLink, ProjectDescription, ProjectText, ProjectCode, ProjectLinks, ProjectImage } from "../shared/ProjectComponents";
import ContactMe from "../pages/ContactMe";

const MusicflixProject = () => {

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
          <ProjectTitle title='Netflix Clone' />
          <ProjectStack items={tech} />
          <ProjectDescription 
            text={"I worked with two teammates in my General Assembly bootcamp to build a Netflix-inspired app that lets users watch videos by genre and with an attached message board on each video that requires users to sign in to comment but not to see other users' the messages."}
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
            github={"https://github.com/MusicFlix/project-frontend"}
            backend={"https://github.com/MusicFlix/project3-backend"}
            />
          <ContactMe />
        </Col>
      </Row>
    </Container>
  )
}

export default MusicflixProject
