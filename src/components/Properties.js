import React from 'react'
import Property from './Property'

const Properties = ({ properties, landlords }) => {

  const generateProperties = () => {
    return properties.map(property => <Property key={property.id} {...property} landlords={landlords} />)
  }

  return(
    <div>
      {generateProperties()}
    </div>

  )
}

export default Properties