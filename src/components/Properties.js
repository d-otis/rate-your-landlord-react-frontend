import React from 'react'
import Property from './Property'

const Properties = ({ properties, landlords }) => {

  const generateProperties = () => {
    return properties.map(property => <Property key={property.id} {...property} landlords={landlords} />)
  }

  return(
    <div>
      <h1>Properties Index</h1>
      {generateProperties()}
    </div>

  )
}

export default Properties