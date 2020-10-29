import React from 'react'

const Property = ({ address, hasImage, id, imageUrl, landlordId, reviews, landlords }) => {
  
  const getLandlordName = id => {
    // debugger
    let idx = landlords.findIndex(landlord => landlord.id === id)
    return idx !== -1 ? landlords[idx].name : ""
  }

  return (
    <div>
      <h1>{address}</h1>
      <ul>
        <li>hasImage: {hasImage ? 'yes' : 'no'}</li>
        <li>imageUrl: {imageUrl ? 'url here' : 'n/a'}</li>
        <li>landlord: {getLandlordName(landlordId)}</li>
        <li># of reviews: {reviews.length}</li>
        <button>Add a Review</button>
      </ul>
      <hr />
    </div>

  )
}

export default Property