import React, { useState } from 'react'
import LandlordEditForm from './LandlordEditForm'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Spinner from '../spinner/Spinner'

function Landlord({ id, match, landlords, properties }) {

  const loading = landlords.loading

  const [ toggleEdit, setToggleEdit ] = useState(false)

  const landlord = id ? landlords[id] : landlords[match.params.landlordId]


  const handleEditClick = () => {
    setToggleEdit(!toggleEdit)
  }

  const generateProperties = () => {

    const myProperties = Object.values(properties).filter(property => property.landlordId === landlord.id)

    return myProperties.map(property => {
      return (
        <Row className="my-4" key={property.id}>
          <Col sm={2}>
            <img src={property.imageUrl || '/15-512.png'} alt="" width="100%" />
          </Col>
          <Col sm={10}>
            {generatePropertyLink(property)}
          </Col>
        </Row>
      )
    })
  }

  const generatePropertyLink = property => {
    return <Link to={`/properties/${property.id}`}><p className="mt-4">{property.address}</p></Link>
  }

  const generateLandlord = () => {
    const { name, rating } = landlord

    return (
      <Container>
        <Row className="mb-3">
          <Col sm={4}>
            <img src={landlord.imageUrl || "/user_placeholder.png"} alt="" width="100%" className="rounded-circle" />
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
            <Link to={`/landlords/${landlord.id}`}> <h2 className="text-right">{name}</h2></Link>
            <h3 className="text-right">Rating: {rating}</h3>
          </Col>
            {toggleEdit && <Col sm={4}><LandlordEditForm name={name} id={landlord.id} setToggleEdit={setToggleEdit} /></Col>}
          <Col>
            <Button className="mr-2" variant={`outline-${toggleEdit ? 'danger' : 'secondary'}`} onClick={handleEditClick} >{toggleEdit ? 'Cancel' : 'Edit Landlord'}</Button>
          </Col>
        </Row>
      <hr />
    </Container>
    )
  }

  return (
    loading ? <Spinner /> : generateLandlord()
  )
}

export default Landlord