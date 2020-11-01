import React, { useState } from 'react'

const ReviewInput = ({ propertyId }) => {

  const [ content, setContent ] = useState('')

  const handleContentChange = e => {
    setContent(e.target.value)
  }

  return(
    <div>
      <form action="">
        <textarea name="" id="" cols="30" rows="5" onChange={handleContentChange} value={content}></textarea>
      <br />

      <input type="radio" name="rating" value="5" id="five" />
      <label htmlFor="five">5 Stars</label>
      <br />
      <input type="radio" name="rating" value="4" id="four" />
      <label htmlFor="four">4 Stars</label>
      <br />
      <input type="radio" name="rating" value="3" id="three" />
      <label htmlFor="three">3 Stars</label>
      <br />
      <input type="radio" name="rating" value="2" id="two" />
      <label htmlFor="two">2 Stars</label>
      <br />
      <input type="radio" name="rating" value="1" id="one" />
      <label htmlFor="one">1 Stars</label>
      <br />

      <input type="submit" value="Save Review" />
      </form>
    </div>
  )
}

export default ReviewInput