import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const Home = () => {

  const imgOverlayCss = {
    background: 'rgba( 0 ,0, 0, 0.25 )'
  }

  const cardTitleCss = {
    marginTop: '27%'
  }

  return(
    <Container className="mb-5">
      <Row className="mb-4">
        <Col sm={6}>
          <Card className="text-white bg-dark">
            <Card.Img src="https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80" />
            <Card.ImgOverlay style={imgOverlayCss}>
              <Card.Title as="h1" className="text-center" style={cardTitleCss}>Browse Properties</Card.Title>
              <Link to="/properties" className="stretched-link"></Link>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col sm={6}>
        <Card className="text-white bg-dark">
          <Card.Img src="https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
          <Card.ImgOverlay style={imgOverlayCss}>
            <Card.Title as="h1" className="text-center" style={cardTitleCss}>Read Reviews</Card.Title>
            <Link to="/reviews" className="stretched-link"></Link>
          </Card.ImgOverlay>
        </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={{span: 6, offset: 3}}>
          <Card className="text-white bg-dark">
            <Card.Img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1866&q=80"/>
            <Card.ImgOverlay style={imgOverlayCss}>
              <Card.Title as="h1" className="text-center" style={cardTitleCss}>Browse Landlords</Card.Title>
              <Link to="/landlords" className="stretched-link"></Link>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Home