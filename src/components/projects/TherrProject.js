import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row";

import { ProjectTitle, ProjectStack, ReturnHomeLink, ProjectDescription, ProjectText, ProjectCode, ProjectLinks, ProjectImage } from "../shared/ProjectComponents";
import ContactMe from "../pages/ContactMe";

const TemplateProject = () => {

  const tech = [
    'TypeScript',
    'React',
    'Redux',
    'Knex',
    'PostgresQL'
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
          <ProjectTitle title='Therr' />
          <ProjectStack items={tech} />
          <ProjectDescription 
            text={"I worked with the founder/lead engineer at Therr to build a desktop browser app that allowed users to interact with the data they previously could only access through the mobile app."}
            />
          <ProjectImage image={'images/therr-app.webp'} />
          <ProjectText 
            text={"Moving from small, personal apps to a full fledged, professional app was a steep learning curve. There was so much more complexity and I spent the first weeks just staring at the code and troubleshooting minor bugs."} 
            />
          <ProjectText 
            text={"In addition to the increased complexity, the app was in TypeScript and General Assembly had only taught us JavaScript. Additionally, they were using Redux, microservices, and a number of other more advanced concepts that I hadn't been exposed to during the boot camp."} 
            />
          <ProjectCode 
            code={code.join('\n')}
          />
          <ProjectText 
            text={""} 
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
