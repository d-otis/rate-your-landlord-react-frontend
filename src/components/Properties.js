import React from 'react'
import Property from './Property'

const Properties = props => {

  const { properties } = props

  const generateProperties = () => {
    return properties.map(property => <Property key={property.id} {...property} />)
  }

  return(
    <div>
      <h1>Properties Index</h1>
      {generateProperties()}
    </div>

  )
}

export default Properties