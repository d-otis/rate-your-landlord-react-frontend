import React from 'react'
import Property from './Property'
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const PropertiesList = ({ properties, landlords }) => {

  let { path } = useRouteMatch()

  const generatePropertiesList = () => {
    return Object.keys(properties).map(id=> 
      <Card key={id} className="my-4">
      <Card.Header as="h3"> {properties[id].address} </Card.Header>
      <Card.Body>
        <Card.Title>Landlord: Mr Bojangles</Card.Title>
        <Card.Text>This property has {properties[id].reviews.length} reviews.</Card.Text>
        <Link to={`/properties/${id}`}><Button variant="secondary">Read the reviews</Button></Link>
      </Card.Body>
        
      </Card>
    )
  }

  return(
    <div>
      {generatePropertiesList()}

      <Switch>
        <Route 
          path={`${path}/:propertyId`} 
          render={routerProps => <Property {...routerProps} properties={properties} landlords={landlords} />} 
        />
      </Switch>

    </div>
  )
}

export default PropertiesList