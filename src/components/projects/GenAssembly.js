import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row";

import { 
  NonProjectTitle,
  ReturnHomeLink,
  ProjectDescription,
  ProjectText,
  ProjectImage
} from "../shared/ProjectComponents";
import ContactMe from "../pages/ContactMe";
import { genAssemblyImg } from "../assets/imageLinks";
import { animateScroll as scroll } from 'react-scroll'

const GenAssemblyBackground = () => {

  useEffect(() => {
    scroll.scrollToTop({ duration: 0 })    
  }, [])

  return (
    <Container>
      <Row>
        <Col className='lg-8 mx-auto p-3 py-md-5'>
          <ReturnHomeLink />
          <NonProjectTitle title='Student, General Assembly' />
          <ProjectDescription 
            text={"After years of being interested in exploring a career in software development, I finally took the chance and joined General Assembly."}
            />
          <ProjectImage image={genAssemblyImg} />
          <ProjectText 
            text={"Network engineering has slowly been transitioning towards a programming focused NetOps, and while I use coding in my day to day work as a network engineer, it was never at the forefront of my day but it was always my favorite part of the day and I could get lost for hours. So I finally joined a bootcamp to pursue my passion for development."} 
            />
          <ProjectText 
            text={"So far, it's been an amazing decision."}
          />
          <ContactMe />
        </Col>
      </Row>
    </Container>
  )
}

export default GenAssemblyBackground