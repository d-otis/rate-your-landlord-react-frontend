import React, { useState } from 'react'

const ReviewInput = ({ propertyId }) => {

  const [ content, setContent ] = useState('')

  const handleContentChange = e => {
    setContent(e.target.value)
  }

  return(
    <div>
      <form action="">
        <textarea name="" id="" cols="30" rows="10" onChange={handleContentChange} value={content}></textarea>
      <br />
      <input type="submit" value="Save Review" />
      </form>
    </div>
  )
}

export default ReviewInput