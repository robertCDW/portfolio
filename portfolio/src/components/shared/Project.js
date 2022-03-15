import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import styles from '../css/shared/Project.module.css'
// import newimg from '../../images/therr-app.webp'

const Project = ({ image, title, description, projectLink, inProgress }) => {

  if (inProgress) {
    title = `In progress: ${title}`
  }

  return (
    <div style={{ margin: '2rem' }}>
      <Card>
        <Card.Body>
          <Container>
            <Row className='align-items-center'>
              <Col xs='2'>
                <img className={styles.image} src={image} alt={title} />
              </Col>
              <Col>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Link to={`/project/${projectLink}`}>
                  <Button variant='success'>Case Study &rarr;</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  )
}


export default Project
