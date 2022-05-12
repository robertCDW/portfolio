import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row";

import { ProjectTitle, ProjectStack, ReturnHomeLink, ProjectDescription, ProjectText, ProjectLinks, ProjectImage } from "../shared/ProjectComponents";
import ContactMe from "../pages/ContactMe";
import { speedReaderImg } from "../assets/imageLinks";

const SpeedReadProject = () => {

  const tech = [
    'React',
    'RedditAPI',
    'MongoDB',
    'Express.js',
    'Node'
  ]

  return (
    <Container>
      <Row>
        <Col className='lg-8 mx-auto p-3 py-md-5'>
          <ReturnHomeLink />
          <ProjectTitle title='Speed Reading' />
          <ProjectStack items={tech} />
          <ProjectDescription 
            text={"I've always thought it was a neat trick to read fast, but most of the speed reading apps lack sufficient free content so I created an app that uses Reddit public APIs to take content from subreddits where users submit stories, creating a near endless amount of material."}
            />
          <ProjectImage image={speedReaderImg} />
          <ProjectText 
            text={"This was my first experience working heavily with external APIs, so I had to learn how to go through a company's API documentation to access the data that I wanted and then convert it into the format I needed."} 
            />
          <ProjectText 
            text={"This was a fun project because it forced me to learn more about state and promises, plus it's an intuitive way to train difficult to acquire but useful skills."} 
            />
          <ProjectText 
            text={"Future plans: I'd like to give users the ability to add their own subreddits, as well as move back and forth between responses to a prompt. Currently only the first prompt can be accessed."} 
            />
          <ProjectLinks
            deployed={"https://robscalesdev.github.io/speedreader/"}
            github={"https://github.com/robscalesdev/speedreader"}
            />
          <ContactMe />
        </Col>
      </Row>
    </Container>
  )
}

export default SpeedReadProject
