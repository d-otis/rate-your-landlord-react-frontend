import React from 'react'
import Container from 'react-bootstrap/Container'
import Review from './Review'
import { connect } from 'react-redux'

const ReviewsList = ({ property, reviews, isPropertyShow }) => {

  const propertyReviewIds = property.reviews.map(review => review.id) || properties

  return(
    <Container className="mt-5">
      {propertyReviewIds.map(id => <Review key={id} review={reviews[id]} isPropertyShow={isPropertyShow} />)}
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

export default connect(mapStateToProps)(ReviewsList)