import React from 'react'

const Property = ({ match, properties, landlords }) => {

  let { propertyId } = match.params

  const property = properties.filter(property => property.id === propertyId)[0]
  
  const getLandlordName = id => {
    let idx = landlords.findIndex(landlord => landlord.id === id)
    return idx !== -1 ? landlords[idx].name : ""
  }

  return (
    <div>
      <h1>{property?.address || "Loading"}</h1>
      <ul>
        <li>hasImage: {property?.hasImage ? 'yes' : 'no'}</li>
        <li>Number of Reviews: {property?.reviews.length}</li>
        <li>Landlord: {getLandlordName(property?.landlordId)}</li>
      </ul>
      <button>Leave a Review</button>
    </div>
  )
}

export default Property