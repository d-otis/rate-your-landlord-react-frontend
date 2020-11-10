import React from 'react'
import Container from 'react-bootstrap/Container'
import Review from './Review'
import { connect } from 'react-redux'

const ReviewsList = ({ properties, property, reviews }) => {

  const propertyReviewIds = property.reviews.map(review => review.id) || properties

  return(
    <Container className="mt-5">
      {propertyReviewIds.map(id => <Review key={id} review={reviews[id]} />)}
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews,
    properties: state.properties
  }
}

export default connect(mapStateToProps)(ReviewsList)