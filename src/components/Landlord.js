import React from 'react'

function Landlord(props) {

  const { id, name, properties, reviews } = props

  return (
    <div>
      <h2>{name}</h2>
      <h3>Rating: XXX</h3>
      <h3>Properties:</h3>
      <ol>
        {properties.map((property, idx) => <li key={property.id}>Property ID : {property.id}</li>)}
      </ol>
      <hr />
    </div>
  )
}

export default Landlord