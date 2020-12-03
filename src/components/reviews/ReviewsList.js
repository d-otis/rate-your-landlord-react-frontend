import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Review from './Review'
import { connect } from 'react-redux'
import FilterComponent from './FilterComponent'
import SortingComponent from './SortingComponent'
import Spinner from '../spinner/Spinner'

const ReviewsList = ({ property, reviews, isPropertyShow, loading }) => {
  // debugger
  const propertyReviewIds = property?.reviews.map(review => review.id) || Object.keys(reviews).filter(el => el !== 'loading')

  const [ filterSelection, setFilterSelection ] = useState(0)
  const [ sortBy, setSortBy ] = useState('none')

  const filterReviewIds = () => {
    if (sortBy === 'none') {
      return filterSelection === 0 ? propertyReviewIds : propertyReviewIds.filter(id => reviews[id].rating === filterSelection)
    } else {
      console.log('Please sort by: ', sortBy)
      // property
      return propertyReviewIds
      // return reviewIds ordered by:
    }
  }

  return(
    <Container className="mt-5">

      <Row>
        {isPropertyShow || <FilterComponent setFilterSelection={setFilterSelection} filterSelection={filterSelection} />}
        {null && <SortingComponent sortBy={sortBy} setSortBy={setSortBy}  />}
      </Row>

      {loading ? <Spinner/> : filterReviewIds().map(id => <Review key={id} review={reviews[id]} isPropertyShow={isPropertyShow} />)}

    </Container>
  )
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews,
    loading: state.reviews.loading
  }
}

export default connect(mapStateToProps)(ReviewsList)