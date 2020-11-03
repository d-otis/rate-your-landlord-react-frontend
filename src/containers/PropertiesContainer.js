import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropertyInput from '../components/PropertyInput'
import Properties from '../components/Properties'
import { fetchProperties, createProperty } from '../actions/properties.actions'
import { fetchReviews } from '../actions/reviews.actions'
import { createLandlord } from '../actions/landlords.actions'

class PropertiesContainer extends Component {

  componentDidMount() {
    this.props.fetchProperties()
    this.props.fetchReviews()
  }

  render() {

    const { properties, createProperty, editProperty, deleteProperty, landlords, createLandlord } = this.props

    return (
      <div>
        <PropertyInput createProperty={createProperty} landlords={landlords} createLandlord={createLandlord} />
        <Properties properties={properties} editProperty={editProperty} deleteProperty={deleteProperty} landlords={landlords} />
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

export default connect(mapStateToProps, { fetchProperties, createProperty, createLandlord, fetchReviews })(PropertiesContainer)