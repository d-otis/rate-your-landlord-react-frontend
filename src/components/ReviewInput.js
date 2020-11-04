import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createReview } from '../actions/reviews.actions'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const ReviewInput = ({ propertyId, createReview, setShowReviewInput, toggleShowReviewInput }) => {

  const [ content, setContent ] = useState('')
  const [ rating, setRating ] = useState(5)

  const handleContentChange = e => {
    setContent(e.target.value)
  }

  const handleRatingChange = e => {
    setRating(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    createReview({
      content: content,
      rating: rating,
      property_id: propertyId 
    })
    // unmounts this entire component
    setShowReviewInput(false)
  }

  return(
    <Container>
    <Row>
      <Col sm={12}>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="review-form-group">
          <Form.Label>Please leave a review</Form.Label>
          <Form.Control as="textarea" onChange={handleContentChange} value={content} />
        </Form.Group>
        <Form.Group controlId="rating-range-input">
          <Form.Label>Select a Rating: {rating}</Form.Label>
          <Form.Control type="range" min="1" max="5" onChange={handleRatingChange} value={rating}/>
        </Form.Group>
        <Button variant="secondary" type="submit"> Save Review </Button>
        <Button variant="secondary ml-3" onClick={toggleShowReviewInput}> Cancel </Button>
        </Form>
      </Col>
    </Row>

    </Container>
  )
}

export default connect(null, { createReview })(ReviewInput)