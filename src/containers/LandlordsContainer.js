import React, { Component, useState } from 'react'
import Landlords from '../components/Landlords'
import LandlordInput from '../components/LandlordInput'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'

const LandlordsContainer = ({ landlords }) => {

  const [ showLandlordInput, setShowLandlordInput ] = useState(false)

  const toggleLandlordInput = () => {
    setShowLandlordInput(!showLandlordInput)
  }
  
  return (
    <Container>
      <LandlordInput />
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