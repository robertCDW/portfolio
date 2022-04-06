import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row";

import { ProjectTitle, ProjectStack, ReturnHomeLink, ProjectDescription, ProjectText, ProjectCode, ProjectLinks, ProjectImage } from "../shared/ProjectComponents";
import ContactMe from "../pages/ContactMe";

const TemplateProject = () => {

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
          <ProjectTitle title='Jira Clone' />
          <ProjectStack items={tech} />
          <ProjectDescription 
            text={"I worked with a friend who's a Senior Developer at a large financial organization because I wanted to learn how she approaches structuring React apps and understanding modern development best practices."}
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

export default TemplateProject
