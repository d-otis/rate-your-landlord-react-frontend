import React, { Component } from 'react'
import Landlords from '../components/Landlords'
import LandlordInput from '../components/LandlordInput'
import { connect } from 'react-redux'
import { createLandlord, 
         updateLandlord, 
         deleteLandlord } from '../actions/landlords.actions'

class LandlordsContainer extends Component {

  render() {

    const { landlords, createLandlord, updateLandlord, deleteLandlord } = this.props

    return (
      <div>
        <LandlordInput 
          createLandlord={createLandlord}
        />
        <Landlords 
          landlords={landlords} 
          updateLandlord={updateLandlord}
          deleteLandlord={deleteLandlord}  
        />
      </div>
    )
  }
}

export default connect(null, { createLandlord, updateLandlord, deleteLandlord })(LandlordsContainer)