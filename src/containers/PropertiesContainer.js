import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropertyInput from '../components/PropertyInput'
import Properties from '../components/Properties'
import { createProperty } from '../actions/properties.actions'

class PropertiesContainer extends Component {
  render() {

    const { properties, createProperty, editProperty, deleteProperty } = this.props

    return (
      <div>
        <PropertyInput createProperty={createProperty} />
        <Properties properties={properties} editProperty={editProperty} deleteProperty={deleteProperty} />
      </div>
    )
  }
}

export default connect(null, { createProperty })(PropertiesContainer)