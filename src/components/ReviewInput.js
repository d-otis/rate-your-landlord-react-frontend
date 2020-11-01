import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createReview } from '../actions/reviews.actions'

const ReviewInput = ({ propertyId }) => {

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
    // handle if a rating hasn't been selected
    debugger
    // need to send {} 
    // with keys: content, rating, landlord_id
    createReview({
      content: content,
      rating: rating,
      property_id: propertyId 
    })
    // AFTER SUBMIT:
    // close review component (via boolean prop passed down from parent)
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <textarea name="" id="" cols="30" rows="5" onChange={handleContentChange} value={content}></textarea>
      <br />
      <label htmlFor="rating-range">Select a Rating</label>
      <br />
      <input type="range" min="1" max="5" id="rating-range" onChange={handleRatingChange} /> {rating}
      <br />
      <input type="submit" value="Save Review" />
      </form>
    </div>
  )
}

export default connect(null, { createReview })(ReviewInput)