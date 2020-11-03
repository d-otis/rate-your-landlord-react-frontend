import React, { useState } from 'react'
import ReviewInput from './ReviewInput'

const Property = ({ match, properties, landlords }) => {

  let { propertyId } = match.params

  const [ showReviewInput, setShowReviewInput ] = useState(false)

  const property = properties[propertyId]
  
  const getLandlordName = id => {
    const landlord = landlords[id]
    return landlord?.name
  }

  const toggleShowReviewInput = () => setShowReviewInput(!showReviewInput)

  const generateProperty = () => {
   return (
    <React.Fragment>
       <h1>{property.address || "Loading"}</h1>
       <ul>
         <li>hasImage: {property.hasImage ? 'yes' : 'no'}</li>
         <li>Number of Reviews: {property.reviews.length}</li>
         <li>Average Rating: {property.rating} </li>
         <li>Landlord: {getLandlordName(property.landlordId)}</li>
       </ul>
       {showReviewInput && <ReviewInput propertyId={propertyId} setShowReviewInput={setShowReviewInput} />}
       
       {showReviewInput || <button onClick={toggleShowReviewInput}>Leave a Review</button>}
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