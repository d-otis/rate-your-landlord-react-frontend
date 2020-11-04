import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Review = ({ review }) => {



  return(
      <Row className="bg-light rounded-lg pt-3 border mb-3"> {/*Review Outer Row*/}
        <Col> {/*Review Inner Column*/}
          <Container className="inner-review-container"> {/*Review Inner Container*/}
            <Row> {/*Review Inner Row*/}
              <Col sm={2} className="review-rating text-center mt-3"> {/*Review Rating Column*/}
                <h1><span className="bg-secondary text-white p-2 rounded-lg">{review?.rating}</span></h1>
              </Col> {/*Review Rating Column*/}
              <Col sm={10} className="review-content"> {/*Review Content Column*/}
                <p>{review?.content}</p>
              </Col> {/*Review Content Column*/}
            </Row> {/*Review Inner Row*/}
          </Container> {/*Review Inner Container*/}
        </Col> {/*Review Inner Column*/}
       {/*Review Outer Row*/}
      </Row> 
  )
}

export default Review