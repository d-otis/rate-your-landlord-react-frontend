import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Review from './Review'
import { connect } from 'react-redux'
import FilterComponent from './FilterComponent'

const ReviewsList = ({ property, reviews, isPropertyShow }) => {

  const propertyReviewIds = property?.reviews.map(review => review.id) || Object.keys(reviews)

  const [ filterSelection, setFilterSelection ] = useState(null)

  return(
    <Container className="mt-5">
    <FilterComponent setFilterSelection={setFilterSelection} />
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