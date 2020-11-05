import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropertyInput from '../components/properties/PropertyInput'
import PropertiesList from '../components/properties/PropertiesList'
import { createProperty } from '../actions/properties.actions'
import { fetchReviews } from '../actions/reviews.actions'
import { createLandlord } from '../actions/landlords.actions'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Route } from 'react-router-dom'
import Property from '../components/properties/Property'

const PropertiesContainer = ({ match, properties, createProperty, editProperty, deleteProperty, landlords, createLandlord }) => {

  const [ showPropertyInput, setShowPropertyInput ] = useState(false)

  const handleClick = () => {
    toggleShowPropertyInput()
  }

  const toggleShowPropertyInput = () => {
    setShowPropertyInput(!showPropertyInput)
  }

  return (
    <Container>
      {showPropertyInput 
        &&        
      <PropertyInput 
        createProperty={createProperty} 
        landlords={landlords} 
        createLandlord={createLandlord}
        toggleShowPropertyInput={toggleShowPropertyInput}
      />}
      {showPropertyInput || <Button variant="secondary" onClick={handleClick}>Add Property</Button>}
      <Route 
        path={`${match.path}/:propertyId`} 
        render={routerProps => <Property {...routerProps} properties={properties} landlords={landlords} />} 
      />
      <Route 
        exact 
        path={match.url} render={routerProps => <PropertiesList {...routerProps} properties={properties} editProperty={editProperty} deleteProperty={deleteProperty} landlords={landlords}  />}
      />
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    properties: state.properties,
    landlords: state.landlords
  }
}

export default connect(mapStateToProps, { createProperty, createLandlord, fetchReviews })(PropertiesContainer)