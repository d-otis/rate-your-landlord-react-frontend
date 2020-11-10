import React from 'react'
import { connect } from 'react-redux'
import PropertiesList from '../components/properties/PropertiesList'
import { createProperty } from '../actions/properties.actions'
import { createLandlord } from '../actions/landlords.actions'
import Container from 'react-bootstrap/Container'
import { Route } from 'react-router-dom'
import Property from '../components/properties/Property'

const PropertiesContainer = ({ match, properties, createProperty, editProperty, deleteProperty, landlords, createLandlord }) => {

  return (
    <Container>
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

export default connect(mapStateToProps, { createProperty, createLandlord })(PropertiesContainer)