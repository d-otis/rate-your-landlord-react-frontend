import React, { useState } from 'react'
import { deleteLandlord } from '../actions/landlords.actions'
import { connect } from 'react-redux'
import LandlordEditForm from './LandlordEditForm'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Landlord({ landlord, deleteLandlord, properties }) {

  const [ toggleEdit, setToggleEdit ] = useState(false)

  const { id, 
          name,
          reviews, 
          rating } = landlord

  const handleEditClick = () => {
    setToggleEdit(!toggleEdit)
  }

  const generatePropertyLink = propertyId => {
    return <Link to={`/properties/${propertyId}`}>{propertyId}</Link>
  }


  return (
    <div>

      <Row>
        <Col sm={4} className="border text-center">
          <h2>{name}</h2>
          <h3>{rating}</h3>
        </Col>
        <Col sm={8} className="border">
          <ul>
            {properties.map(property => <li key={property.id}>{property.address}</li>)}
          </ul>
        </Col>
      </Row>


      <h2>{name} <button onClick={() => deleteLandlord(id)}>X</button></h2>
      <button onClick={handleEditClick} >Edit Landlord</button>
      <br />
      {toggleEdit && <LandlordEditForm name={name} id={id} setToggleEdit={setToggleEdit} />}
      <h3>Rating: {rating}</h3>
      <h3>Properties:</h3>

      {properties?.length > 0 
        ? 
          <ol>
            {properties.map((property, idx) => <li key={property.id}>Property ID : {generatePropertyLink(property.id)}</li>)}
          </ol>
        : 'doesnt have properties'
      }

      <h3>Reviews:</h3>
      {reviews?.length > 0 
        ?
          <ol>
            {reviews.map((review, idx) => <li key={review.id}>Review ID : {review.id}</li>)}
          </ol>
        : "doesn't have any reviews"
      }
     
      <hr />
    </div>
  )
}

export default connect(null, { deleteLandlord })(Landlord)