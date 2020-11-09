import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const PropertiesList = ({ properties, landlords }) => {

  const reviewButton = property => {
    const buttonText = property.reviews.length === 0 ? 'Leave a Review' : "Read the Reviews"
    return <Link to={`/properties/${property.id}`}><Button variant="secondary">{buttonText}</Button></Link>
  }

  const generatePropertiesList = () => {
    return Object.keys(properties).map(id=> {
      const landlord = landlords[properties[id].landlordId]
      return (
        <Card key={id} className="my-4">
          <Card.Header as="h3"> {properties[id].address} </Card.Header>
          <Card.Body>
            <Card.Title>Landlord: {landlord?.name}</Card.Title>
            <Card.Text>This property has {properties[id].reviews.length} reviews.</Card.Text>
            {reviewButton(properties[id])}
          </Card.Body>
        </Card>
      )
    })
  }

  return(
    <div>
      {generatePropertiesList()}
    </div>
  )
}

export default PropertiesList