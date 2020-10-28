import React from 'react'

function Landlord(props) {

  const { id, name, properties, reviews, rating } = props

  return (
    <div key={id}>
      <h2>{name}</h2>
      <h3>Rating: {rating}</h3>
      <h3>Properties:</h3>

      {properties.length > 0 
        ? 
          <ol>
            {properties.map((property, idx) => <li key={property.id}>Property ID : {property.id}</li>)}
          </ol>
        : 'doesnt have properties'
      }

      <h3>Reviews:</h3>
      {reviews.length > 0 
        ?
          <ol>
            {reviews.map((review, idx) => <li key={review.id}>Review ID : {review.id}</li>)}
          </ol>
        : "doesn't have any reviews"
      }
     
      <hr />
    </div>
  )
}

export default Landlord