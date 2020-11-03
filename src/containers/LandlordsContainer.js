import React, { Component } from 'react'
import Landlords from '../components/Landlords'
import LandlordInput from '../components/LandlordInput'
import { connect } from 'react-redux'

class LandlordsContainer extends Component {

  render() {

    const { landlords } = this.props
    
    return (
      <div>
        <LandlordInput />
        <Landlords landlords={landlords} />
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