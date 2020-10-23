import React from 'react'

function Landlord(props) {

  const { id, name, properties, reviews, rating } = props

  return (
    <div key={id}>
      <h2>{name}</h2>
      <h3>Rating: {rating}</h3>
      <h3>Properties:</h3>
      <ol>
        {properties.map((property, idx) => <li key={property.id}>Property ID : {property.id}</li>)}
      </ol>
      <h3>Properties:</h3>
      <ol>
        {reviews.map((review, idx) => <li key={review.id}>Review ID : {review.id}</li>)}
      </ol>
      <hr />
    </div>
  )
}

export default Landlord