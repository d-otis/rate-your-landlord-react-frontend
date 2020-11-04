import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Review from './Review'
import { connect } from 'react-redux'

const ReviewsList = ({ property, reviews }) => {

  const propertyReviewIds = property.reviews.map(review => review.id)


  return(
    <Container className="mt-5">
      {propertyReviewIds.map(id => <Review key={id} review={reviews[id]} />)}
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

export default connect(mapStateToProps)(ReviewsList)