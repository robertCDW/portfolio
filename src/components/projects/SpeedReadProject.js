import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row";

import { ProjectTitle, ProjectStack, ReturnHomeLink, ProjectDescription, ProjectText, ProjectLinks, ProjectImage } from "../shared/ProjectComponents";
import ContactMe from "../pages/ContactMe";
import { speedReaderImg } from "../assets/imageLinks";
import { animateScroll as scroll } from 'react-scroll'

const SpeedReadProject = () => {

  useEffect(() => {
    scroll.scrollToTop({ duration: 0 })    
  }, [])

  const tech = [
    'React',
    'RedditAPI'
  ]

  return (
    <Container>
      <Row>
        <Col className='lg-8 mx-auto p-3 py-md-5'>
          <ReturnHomeLink />
          <ProjectTitle title='Speed Reading' />
          <ProjectStack items={tech} />
          <ProjectDescription 
            text={"I've always thought it was a neat trick to read fast, but most speed reading apps lack sufficient content so I created an app that uses Reddit public APIs to take content from subreddits where users submit stories, creating a near endless amount of material."}
            />
          <ProjectImage image={speedReaderImg} />
          <ProjectText 
            text={"This was my first experience working heavily with external APIs to get json and display it on a page, so I had to learn how to go through a company's API documentation to access the data that I wanted and then convert it into the format I needed. It helped that I have experience with network APIs, but we typically just display that data to the command line or write it to a file rather than processing it to display dynamically on a webpage."} 
            />
          <ProjectText 
            text={"This was a fun project because it forced me to learn more about state and promises, plus the output was a functional app with an intuitive way to train difficult to acquire but useful skills of reading quickly."} 
            />
          <ProjectText 
            text={"Future plans: I'd like to give users the ability to add their own subreddits, as well as move back and forth between responses to a prompt. Currently only the first prompt can be accessed. The current issue is that the data returned from Reddit isn't always consitent, some subreddits have pinned comments or only make sense as a string of comments."} 
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
