import React, { Component } from 'react'
import Landlords from '../components/Landlords'
import LandlordInput from '../components/LandlordInput'
import { connect } from 'react-redux'

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

const mapStateToProps = (state) => {
  return {
    landlords: state.landlords
  }
}

export default connect(mapStateToProps)(LandlordsContainer)