import React from 'react'
import ReviewsList from '../components/reviews/ReviewsList'
import { connect } from 'react-redux'

const ReviewsContainer = ({ properties }) => {
  return (
    <div>
      <ReviewsList properties={properties} isPropertyShow={false} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    properties: state.properties,
    reviews: state.reviews
  }
}

export default connect(mapStateToProps)(ReviewsContainer)