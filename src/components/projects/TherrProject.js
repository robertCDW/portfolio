import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row";

import { ProjectTitle, ProjectStack, ReturnHomeLink, ProjectDescription, ProjectText, ProjectLinks, ProjectImage } from "../shared/ProjectComponents";
import ContactMe from "../pages/ContactMe";
import { animateScroll as scroll } from 'react-scroll'

const TemplateProject = () => {

  useEffect(() => {
    scroll.scrollToTop({ duration: 0 })    
  }, [])

  const tech = [
    'TypeScript',
    'React',
    'Redux',
    'Knex',
    'PostgresQL'
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
          <ProjectImage image={"https://user-images.githubusercontent.com/71351016/162082449-a7264ea6-5f49-4520-b9b0-1582ffaed4cb.jpg"} />
          <ProjectText 
            text={"Moving from small, personal apps to a full fledged, professional app was a steep learning curve. There was so much more complexity and I spent the first weeks just staring at the code and troubleshooting minor bugs."} 
            />
          <ProjectText 
            text={"In addition to the increased complexity, the app was in TypeScript and General Assembly had only taught us basic React with JavaScript. Additionally, they were using Redux, microservices, and a number of other more advanced concepts that I hadn't been exposed to during the boot camp."} 
            />
          <ProjectText 
            text={"Overall, it's been a great learning experience because it's given me direction to my continued education beyond what was provided in the GA course."} 
            />
          <ProjectLinks
            deployed={"https://therr.com/"}
            />
          <ContactMe />
        </Col>
      </Row>
    </Container>
  )
}

export default TemplateProject
