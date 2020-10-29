import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropertyInput from '../components/PropertyInput'
import Properties from '../components/Properties'
import { createProperty } from '../actions/properties.actions'

class PropertiesContainer extends Component {
  render() {

    const { properties, createProperty, editProperty, deleteProperty, landlords } = this.props

    return (
      <div>
        <PropertyInput createProperty={createProperty} landlords={landlords} />
        <Properties properties={properties} editProperty={editProperty} deleteProperty={deleteProperty} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    properties: state.properties,
    landlords: state.landlords
  }
}

export default connect(mapStateToProps, { createProperty })(PropertiesContainer)