import React, { useState } from 'react'
import { deleteLandlord } from '../../actions/landlords.actions'
import { connect } from 'react-redux'
import LandlordEditForm from './LandlordEditForm'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function Landlord({ id, match, landlords, deleteLandlord, properties }) {

  const [ toggleEdit, setToggleEdit ] = useState(false)

  const landlord = id ? landlords[id] : landlords[match.params.landlordId]

  const { name, rating } = landlord

  const myProperties = Object.values(properties).filter(property => property.landlordId === landlord.id)

  const handleEditClick = () => {
    setToggleEdit(!toggleEdit)
  }

  const generateProperties = () => {
    return myProperties.map(property => {
      return (
        <Row className="my-4" key={property.id}>
          <Col sm={2}>
            <img src="/15-512.png" alt="" width="100%" />
          </Col>
          <Col sm={10}>
            <Link to={`/properties/${property.id}`}><p className="mt-4">{property.address}</p></Link>
          </Col>
        </Row>
      )
    })
  }

  const generatePropertyLink = property => {
    return <Link to={`/properties/${property.id}`}>{property.address}</Link>
  }

  return (
    <Container>
      <Row className="mb-3">
        <Col sm={4}>
          <img src="/user_placeholder.png" alt="" width="100%" className="rounded-pill" />
          {/*<Link to={`/landlords/${id}`}> <h2>{name}</h2></Link>*/}
        </Col>
        <Col sm={8} className="border rounded-lg bg-light p-2">
          <Container className="overflow-auto" style={{ 'maxHeight': '250px', 'overflowY': 'scroll' }}>
            {generateProperties()}
          </Container>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={4} className="pr-4">
          <Link to={`/landlords/${id}`}> <h2 className="text-right">{name}</h2></Link>
          <h3 className="text-right">Rating: {rating}</h3>
        </Col>
          {toggleEdit && <Col sm={4}><LandlordEditForm name={name} id={landlord.id} setToggleEdit={setToggleEdit} /></Col>}
        <Col>
          <Button className="mr-2" variant="outline-secondary" onClick={handleEditClick} >Edit Landlord</Button>
          <Button variant="outline-danger" onClick={() => deleteLandlord(landlord.id)}>Delete Landlord</Button>
        </Col>
      </Row>
      <hr />
    </Container>
  )
}

export default connect(null, { deleteLandlord })(Landlord)