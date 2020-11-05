import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropertyInput from '../components/properties/PropertyInput'
import Properties from '../components/properties/Properties'
import { fetchProperties, createProperty } from '../actions/properties.actions'
import { fetchReviews } from '../actions/reviews.actions'
import { createLandlord } from '../actions/landlords.actions'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

class PropertiesContainer extends Component {

  state = {
    showPropertyInput: false
  }

  componentDidMount() {
    this.props.fetchReviews()
  }

  handleClick = () => {
    this.toggleShowPropertyInput()
  }

  toggleShowPropertyInput = () => {
    this.setState({showPropertyInput: !this.state.showPropertyInput})
  }

  render() {

    const { properties, createProperty, editProperty, deleteProperty, landlords, createLandlord } = this.props

    return (
      <div>
        <PropertyInput 
          createProperty={createProperty} 
          landlords={landlords} 
          createLandlord={createLandlord} 
        />
        <Properties 
          properties={properties} 
          editProperty={editProperty} 
          deleteProperty={deleteProperty} 
          landlords={landlords} 
        />
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