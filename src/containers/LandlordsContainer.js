import React from 'react'
import LandlordsList from '../components/landlords/LandlordsList'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import { Route } from 'react-router-dom'
import Landlord from '../components/landlords/Landlord'

const LandlordsContainer = ({ match, landlords, properties }) => {
  
  return (
    <Container>
      <Route 
        path={`${match.path}/:landlordId`} 
        render={routerProps => <Landlord {...routerProps} landlords={landlords} properties={properties} />}
      />

      <Route 
        exact path={match.url} render={routerProps => <LandlordsList {...routerProps} landlords={landlords} properties={properties} />}
      />
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    landlords: state.landlords,
    properties: state.properties
  }
}

export default connect(mapStateToProps)(LandlordsContainer)