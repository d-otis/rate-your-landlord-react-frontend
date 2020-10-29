import React from 'react'

const Property = ({ address, hasImage, id, imageUrl, landlordId, reviews, landlords }) => {
  
  const getLandlordName = id => {
    // debugger
    let idx = landlords.findIndex(landlord => landlord.id === id)
    return idx !== -1 ? landlords[idx].name : ""
  }

  return (
    <div>
      <h1>A Property</h1>
      <p>{address}</p>
    </div>

  )
}

export default Property