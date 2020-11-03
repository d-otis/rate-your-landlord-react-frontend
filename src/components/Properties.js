import React from 'react'
import Property from './Property'
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom'

const Properties = ({ properties, landlords }) => {

  let { path } = useRouteMatch()

  const generatePropertiesList = () => {
    return Object.keys(properties).map(id=> <li key={id}><Link to={`/properties/${id}`}> {properties[id].address} </Link></li>)
  }

  return(
    <div>
    <h2>Property Links</h2>
      {generatePropertiesList()}
      <hr />
      <Switch>
        <Route path={`${path}/:propertyId`} render={routerProps => <Property {...routerProps} properties={properties} landlords={landlords} />} />
      </Switch>

    </div>
  )
}

export default Properties