import React, { useState } from 'react'
import LandlordsList from '../components/landlords/LandlordsList'
import LandlordInput from '../components/landlords/LandlordInput'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Route } from 'react-router-dom'
import Landlord from '../components/landlords/Landlord'

const LandlordsContainer = ({ match, landlords, properties }) => {

  const [ showLandlordInput, setShowLandlordInput ] = useState(false)

  const toggleLandlordInput = () => {
    setShowLandlordInput(!showLandlordInput)
  }
  
  return (
    <Container>
      {showLandlordInput || <Button variant="secondary" onClick={toggleLandlordInput} className="mb-3">Add a Landlord</Button>}
      {showLandlordInput && <LandlordInput toggleLandlordInput={toggleLandlordInput} />}
      
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