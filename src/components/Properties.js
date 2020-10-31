import React from 'react'
import Property from './Property'
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom'

const Properties = ({ properties, landlords }) => {

  let { path } = useRouteMatch()

  const generatePropertiesList = () => {
    // return properties.map(property => <Property key={property.id} {...property} landlords={landlords} />)
    return properties.map(property => <li key={property.id}><Link to={`/properties/${property.id}`} > {property.address} </Link></li>)
  }

  return(
    <div>
      {generatePropertiesList()}

      <Switch>
        <Route path={`${path}/:propertyId`} render={routerProps => <Property {...routerProps} properties={properties} landlords={landlords} />} />
      </Switch>
    </div>
  )
}

export default Properties