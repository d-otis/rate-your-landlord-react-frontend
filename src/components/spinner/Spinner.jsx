import React from 'react'
import "./Spinner.scss"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Spinner = () => {
  return(
    <Container className="text-center">
      <Row>
        <Col>
          <img src="/spinner.gif" alt="Loading Spinner Graphic" />
          <h3>Loading</h3>
        </Col>
      </Row>
    </Container>
  )
}

export default Spinner