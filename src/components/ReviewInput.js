import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createReview } from '../actions/reviews.actions'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ReviewInput = ({ propertyId, createReview, setShowReviewInput }) => {

  const [ content, setContent ] = useState('')
  const [ rating, setRating ] = useState(5)
  const [ hasErrors, setHasErrors ] = useState(false)

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
        <form onSubmit={handleSubmit}>
          <textarea name="" id="" cols="30" rows="5" onChange={handleContentChange} value={content}></textarea>
        <br />
        <label htmlFor="rating-range">Select a Rating</label>
        <br />
        <input type="range" min="1" max="5" id="rating-range" onChange={handleRatingChange} /> {rating}
        <br />
        <Button variant="secondary" type="submit"> Save Review </Button>
        </form>
      </Col>
    </Row>

    </Container>
  )
}

export default connect(null, { createReview })(ReviewInput)