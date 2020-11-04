import React, { useState } from 'react'
import { deleteLandlord } from '../actions/landlords.actions'
import { connect } from 'react-redux'
import LandlordEditForm from './LandlordEditForm'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function Landlord({ landlord, deleteLandlord, properties }) {

  const [ toggleEdit, setToggleEdit ] = useState(false)

  const { id, 
          name,
          reviews, 
          rating } = landlord

  const handleEditClick = () => {
    setToggleEdit(!toggleEdit)
  }

  const generatePropertyLink = property => {
    return <Link to={`/properties/${property.id}`}>{property.address}</Link>
  }


  return (
    <div>

      <Row >
        <Col sm={4} className="border text-center py-4">
          <h2>{name}</h2>
          <h3>{rating}</h3>
          {toggleEdit && <LandlordEditForm name={name} id={id} setToggleEdit={setToggleEdit} />}
        </Col>
        <Col sm={8} className="border py-4">
          <ul>
            {properties.map(property => <li key={property.id}>{generatePropertyLink(property)}</li>)}
          </ul>
          <Button className="mr-2" variant="outline-secondary" onClick={handleEditClick} >Edit Landlord</Button>
          <Button variant="outline-danger" onClick={() => deleteLandlord(id)}>Delete Landlord</Button>
        </Col>
      </Row>
    </div>
  )
}

export default connect(null, { deleteLandlord })(Landlord)