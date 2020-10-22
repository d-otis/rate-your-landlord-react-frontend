import React from 'react'

function Landlord(props) {

  const { id } = props
  const { aggregate_rating: rating, name } = props.attributes
  const { properties: allProperties, reviews } = props.relationships
  // debugger
  // const properties = allProperties.filter(p => p)

  return (
    <div>
      <h2>{name}</h2>
      <h3>Rating: {rating}</h3>
      <ol>
        {allProperties.data.map((property, idx) => <li key={property.id}>Property ID : {property.id}</li>)}
      </ol>
      
    </div>
  )
}

export default Landlord