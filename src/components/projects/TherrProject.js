import React from "react";
import { ProjectTitle, ProjectStack, ReturnHomeLink, ProjectDescription, ProjectText, ProjectCode, ProjectLinks, ProjectImage } from "../shared/ProjectComponents";
import ContactMe from "../pages/ContactMe";
// import styles from '../css/shared/Projects.module.css'
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


// import ContactMe from "../pages/ContactMe";

const TherrProject = () => {

  const tech = [
    'TypeScript',
    'Python'
  ]

  return (
    <Container>
      <Col className='lg-8 mx-auto p-3 py-md-5'>
      <ReturnHomeLink />
      <ProjectTitle title='Therr' />
      <ProjectStack items={tech} />
      <ProjectDescription 
        text={"I worked with the [Senior UX Designer] and [VP of Technology] at Therr to build a thing for Instagram that [does a thing that provides value]."}
        />
      <ProjectImage />
      <ProjectText 
        text={"I did some stuff that did a thing. It was hard. This is how I did it."} 
        />
      <ProjectCode />
      <ProjectLinks
        github={"google.com"}
        deployed={"google.com"}
        />
      <ContactMe />
      </Col>
    </Container>
  )
}

export default TherrProject
