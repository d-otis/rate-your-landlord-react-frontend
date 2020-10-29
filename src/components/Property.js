import React from 'react'

const Property = ({ address, hasImage, id, imageUrl, landlordId, reviews }) => {
  return (
    <div>
      <h1>A Property</h1>
      <p>{address}</p>
    </div>

  )
}

export default Property