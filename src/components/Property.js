import React, { useState } from 'react'
import ReviewInput from './ReviewInput'

const Property = ({ match, properties, landlords }) => {

  let { propertyId } = match.params

  const [ showReviewInput, setShowReviewInput ] = useState(false)

  const property = properties.filter(property => property.id === propertyId)[0]
  
  const getLandlordName = id => {
    let idx = landlords.findIndex(landlord => landlord.id === id)
    return idx !== -1 ? landlords[idx].name : ""
  }

  const toggleShowReviewInput = () => setShowReviewInput(!showReviewInput)

  const generateProperty = () => {
   return (
    <React.Fragment>
       <h1>{property?.address || "Loading"}</h1>
       <ul>
         <li>hasImage: {property?.hasImage ? 'yes' : 'no'}</li>
         <li>Number of Reviews: {property?.reviews.length}</li>
         <li>Landlord: {getLandlordName(property?.landlordId)}</li>
       </ul>
       {showReviewInput && <ReviewInput propertyId={propertyId} />}
       
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