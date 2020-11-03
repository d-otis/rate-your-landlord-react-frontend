import React, { Component } from 'react'
import Landlords from '../components/Landlords'
import LandlordInput from '../components/LandlordInput'
import { connect } from 'react-redux'
import { fetchLandlords } from '../actions/landlords.actions'

class LandlordsContainer extends Component {

  componentDidMount() {
    this.props.fetchLandlords()
  }

  render() {

    const { landlords, fetchLandlords } = this.props
    
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

export default connect(mapStateToProps, { fetchLandlords })(LandlordsContainer)