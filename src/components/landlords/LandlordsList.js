import React, { useState } from 'react'
import Landlord from './Landlord'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import LandlordInput from './LandlordInput'
import Spinner from '../spinner/Spinner'

const LandlordsList = ({ landlords, updateLandlord, deleteLandlord, properties }) => {

  const loading = landlords.loading

  const [ showLandlordInput, setShowLandlordInput ] = useState(false)

  const toggleLandlordInput = () => {
    setShowLandlordInput(!showLandlordInput)
  }

  const generateLandlordsList = () => {
    const landlordsKeys = Object.keys(landlords).filter(el => el !== 'loading')
    return (
      landlordsKeys.map(id => {
        return (
          <Landlord 
            key={id} 
            id={id}
            landlords={landlords}
            properties={properties}
          />
        )
      })
    ) 
  }

  return (
    <React.Fragment>
      {showLandlordInput || <Button variant="secondary" onClick={toggleLandlordInput} className="mb-3">Add a Landlord</Button>}
      {showLandlordInput && <LandlordInput toggleLandlordInput={toggleLandlordInput} />}
     
      {loading ? <Spinner /> : generateLandlordsList()}
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    properties: state.properties
  }
}

export default connect(mapStateToProps)(LandlordsList)