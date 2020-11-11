import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Review from './Review'
import { connect } from 'react-redux'
import FilterComponent from './FilterComponent'
import SortingComponent from './SortingComponent'

const ReviewsList = ({ property, reviews, isPropertyShow }) => {
  // debugger
  const propertyReviewIds = property?.reviews.map(review => review.id) || Object.keys(reviews)

  const [ filterSelection, setFilterSelection ] = useState(0)
  const [ sortBy, setSortBy ] = useState('none')

  const filterReviewIds = () => {
    return filterSelection === 0 ? propertyReviewIds : propertyReviewIds.filter(id => reviews[id].rating === filterSelection)
  }

  return(
    <Container className="mt-5">

      <Row>
        {isPropertyShow || <FilterComponent setFilterSelection={setFilterSelection} filterSelection={filterSelection} />}

        <SortingComponent sortBy={sortBy} setSortBy={setSortBy}  />
      </Row>

      {filterReviewIds().map(id => <Review key={id} review={reviews[id]} isPropertyShow={isPropertyShow} />)}

    </Container>
  )
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

export default connect(mapStateToProps)(ReviewsList)