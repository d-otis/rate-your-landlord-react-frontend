import React, { useState } from 'react'
import Landlords from '../components/landlords/Landlords'
import LandlordInput from '../components/landlords/LandlordInput'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const LandlordsContainer = ({ landlords }) => {

  const [ showLandlordInput, setShowLandlordInput ] = useState(false)

  const toggleLandlordInput = () => {
    setShowLandlordInput(!showLandlordInput)
  }
  
  return (
    <Container>
      {showLandlordInput || <Button variant="secondary" onClick={toggleLandlordInput} className="mb-3">Add a Landlord</Button>}
      {showLandlordInput && <LandlordInput toggleLandlordInput={toggleLandlordInput} />}
      <Landlords landlords={landlords} />
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    landlords: state.landlords
  }
}

export default connect(mapStateToProps)(LandlordsContainer)