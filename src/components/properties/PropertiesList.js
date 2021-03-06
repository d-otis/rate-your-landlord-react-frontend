import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PropertyInput from './PropertyInput'
import { createProperty } from '../../actions/properties.actions'
import { createLandlord } from '../../actions/landlords.actions'
import Spinner from '../spinner/Spinner'
import ReactImageAppear from 'react-image-appear'

const PropertiesList = ({ properties, landlords, createProperty, createLandlord }) => {

  const loading = properties.loading

  const [ showPropertyInput, setShowPropertyInput ] = useState(false)

  const handleClick = () => {
    toggleShowPropertyInput()
  }

  const toggleShowPropertyInput = () => {
    setShowPropertyInput(!showPropertyInput)
  }

  const reviewButton = property => {
    // Conditional button text below
    const buttonText = property.reviews.length === 0 ? 'Leave a Review' : "Read the Reviews"
    return <Link to={`/properties/${property.id}`}><Button variant="secondary">{buttonText}</Button></Link>
  }

  const generatePropertiesList = () => {
    const propertyKeys = Object.keys(properties).filter(el => el !== 'loading')
    return propertyKeys.map(id=> {
      const landlord = landlords[properties[id].landlordId]
      return (
        <Card key={id} className="my-4">
          <Card.Header as="h3"> {properties[id].address} </Card.Header>
          <Card.Body>
          <Container>
            <Row>
              <Col sm={4}>
                <ReactImageAppear 
                  src={properties[id].imageUrl || '/15-512.png'} 
                  loading="/spinner2.gif" 
                  className="w-100" 
                  animation="blurIn" 
                  easing="ease-out"
                />
              </Col>
              <Col>            
                <Link to={`landlords/${landlord?.id}`}><Card.Title>Landlord: {landlord?.name}</Card.Title></Link>
                <Card.Text as="h6">Landlord Rating: {landlord?.rating}</Card.Text>
                <Card.Text as="h6">Property Rating: {properties[id].rating}</Card.Text>
                <Card.Text>This property has {properties[id].reviews.length} reviews.</Card.Text>
                {reviewButton(properties[id])}
              </Col>
            </Row>
          </Container>

          </Card.Body>
        </Card>
      )
    })
  }

  return(

    <Container>
      <Row>
        <Col>
          {showPropertyInput 
            &&        
          <PropertyInput 
            createProperty={createProperty} 
            landlords={landlords} 
            createLandlord={createLandlord}
            toggleShowPropertyInput={toggleShowPropertyInput}
          />}
          {/* Only show button while Input form is absent/false */}
          {showPropertyInput || <Button variant="secondary" onClick={handleClick}>Add Property</Button>}
        </Col>
      </Row>
      <Row>
        <Col sm={{span: 10, offset: 1}}>
          {loading ? <Spinner /> : generatePropertiesList()}
        </Col>
      </Row>
    </Container>

  )
}


export default connect(null, { createProperty, createLandlord })(PropertiesList)