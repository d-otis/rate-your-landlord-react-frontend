import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import PropertyInput from '../components/properties/PropertyInput'
import PropertiesList from '../components/properties/PropertiesList'
import { createProperty } from '../actions/properties.actions'
import { fetchReviews } from '../actions/reviews.actions'
import { createLandlord } from '../actions/landlords.actions'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom'
import Property from '../components/properties/Property'

const PropertiesContainer = ({ properties, createProperty, editProperty, deleteProperty, landlords, createLandlord }) => {

  let { path } = useRouteMatch()
  
  const [ showPropertyInput, setShowPropertyInput ] = useState(false)

  const handleClick = () => {
    toggleShowPropertyInput()
  }

  const toggleShowPropertyInput = () => {
    setShowPropertyInput(!showPropertyInput)
  }

  return (
    <React.Fragment>

      <Container>
        {showPropertyInput 
          &&        
        <PropertyInput 
          createProperty={createProperty} 
          landlords={landlords} 
          createLandlord={createLandlord}
          toggleShowPropertyInput={this.toggleShowPropertyInput}
        />}
        {showPropertyInput || <Button variant="secondary" onClick={handleClick}>Add Property</Button>}
        <PropertiesList 
          properties={properties} 
          editProperty={editProperty} 
          deleteProperty={deleteProperty} 
          landlords={landlords} 
        />
      </Container>

      <Switch>
        <Route 
          path={`${path}/:propertyId`} 
          render={routerProps => <Property {...routerProps} properties={properties} landlords={landlords} />} 
        />
      </Switch>

    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    properties: state.properties,
    landlords: state.landlords
  }
}

export default connect(mapStateToProps, { createProperty, createLandlord, fetchReviews })(PropertiesContainer)