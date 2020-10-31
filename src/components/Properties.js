import React from 'react'
import Property from './Property'
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom'

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