import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row";

import { 
  ProjectTitle, 
  ProjectStack, 
  ReturnHomeLink, 
  ProjectDescription, 
  ProjectText, 
  ProjectLinks, 
  ProjectImage 
} from "../shared/ProjectComponents";
import ContactMe from "../pages/ContactMe";
import { mapEscapeImg } from "../assets/imageLinks";
import { animateScroll as scroll } from 'react-scroll'

const MapEscapeProject = () => {

  const tech = [
    'React',
    'Styled Components'
  ]

  useEffect(() => {
    scroll.scrollToTop({ duration: 0 })    
  }, [])

  return (
    <Container>
      <Row>
        <Col className='lg-8 mx-auto p-3 py-md-5'>
          <ReturnHomeLink />
          <ProjectTitle title='Map Escape' />
          <ProjectStack items={tech} />
          <ProjectDescription 
            text={"I created an app that uses Depth First Search to populate the board and make intelligent decisions on where to go next, as the user interacts with and changes the board layout. The state is updated dynamically to always find the optimal path to the exit, and then displays it to the user as a count of the distance from an edge."}
            />
          <ProjectImage image={mapEscapeImg} />
          <ProjectText 
            text={"The biggest hurdle I faced with this project was using synchronous vs asynchronous state. If I interacted with state normally through the setState style hooks, I would get inconsistent results because it wasn't always using the latest state."} 
            />
          <ProjectText 
            text={"This was also the first project where I started using state variables in CSS with Styled Components. This allowed me to interact with the user through colors and images using the board display."} 
            />
          <ProjectText 
            text={"Future plans: I'd like to create more levels, add new modes, and possibly increase the difficulty of the current mode by adding things like unfenceable tiles and multiple birds."} 
            />
          <ProjectLinks
            deployed={"https://robscalesdev.github.io/map-escape/"}
            github={"https://github.com/robscalesdev/map-escape"}
            />
          <ContactMe />
        </Col>
      </Row>
    </Container>
  )
}

export default MapEscapeProject
