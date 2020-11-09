import React from 'react'
import Landlord from './Landlord'
import { connect } from 'react-redux'

const LandlordsList = ({ landlords, updateLandlord, deleteLandlord, properties }) => {

  const generateLandlordsList = () => {

    return (
      Object.keys(landlords).map(id => {
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
      {generateLandlordsList()}
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    properties: state.properties
  }
}

export default connect(mapStateToProps)(LandlordsList)