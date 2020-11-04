import React, { Component } from 'react'
import Landlords from '../components/Landlords'
import LandlordInput from '../components/LandlordInput'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'

class LandlordsContainer extends Component {

  render() {

    const { landlords } = this.props
    
    return (
      <Container>
        <LandlordInput />
        <Landlords landlords={landlords} />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    landlords: state.landlords
  }
}

export default connect(mapStateToProps)(LandlordsContainer)