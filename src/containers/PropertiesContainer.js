import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropertyInput from '../components/PropertyInput'
import Properties from '../components/Properties'
import { createProperty } from '../actions/properties.actions'

class PropertiesContainer extends Component {
  render() {
    return (
      <h1>PropertiesContainer</h1>
    )
  }
}

export default connect(null, { createProperty })(PropertiesContainer)