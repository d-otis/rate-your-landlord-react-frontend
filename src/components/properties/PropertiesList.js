import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const PropertiesList = ({ properties, landlords }) => {



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



    </div>
  )
}

export default PropertiesList