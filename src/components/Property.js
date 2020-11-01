import React, { useState } from 'react'

const Property = ({ match, properties, landlords }) => {

  let { propertyId } = match.params

  const [ showReviewInput, setShowReviewInput ] = useState(false)

  const property = properties.filter(property => property.id === propertyId)[0]
  
  const getLandlordName = id => {
    let idx = landlords.findIndex(landlord => landlord.id === id)
    return idx !== -1 ? landlords[idx].name : ""
  }

  const toggleShowReviewInput = () => setShowReviewInput(!showReviewInput)

  const generateReviewInput = () => {
    return (
      <h1>text area</h1>
    )
  }

  const generateProperty = () => {
   return (
    <React.Fragment>
       <h1>{property?.address || "Loading"}</h1>
       <ul>
         <li>hasImage: {property?.hasImage ? 'yes' : 'no'}</li>
         <li>Number of Reviews: {property?.reviews.length}</li>
         <li>Landlord: {getLandlordName(property?.landlordId)}</li>
       </ul>
       {showReviewInput && generateReviewInput()}
       <button onClick={toggleShowReviewInput}>Leave a Review</button>
       
     </React.Fragment>
    )
  }

  return (
    <div>
      {property && generateProperty()}
    </div>
  )
}

export default Property