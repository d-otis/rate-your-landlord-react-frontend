import React, { useState } from 'react'

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
  }

  return(
    <div>
      <form>
        <textarea name="" id="" cols="30" rows="5" onChange={handleContentChange} value={content}></textarea>
      <br />
      <label htmlFor="rating-range">Select a Rating</label>
      <br />
      <input type="range" min="1" max="5" id="raiting-range" onChange={handleRatingChange} /> {rating}
      <br />
      <input type="submit" value="Save Review" />
      </form>
    </div>
  )
}

export default ReviewInput