import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropertyInput from '../components/properties/PropertyInput'
import PropertiesList from '../components/properties/PropertiesList'
import { createProperty } from '../actions/properties.actions'
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
      <Container>
        {this.state.showPropertyInput 
          &&        
        <PropertyInput 
          createProperty={createProperty} 
          landlords={landlords} 
          createLandlord={createLandlord}
          toggleShowPropertyInput={this.toggleShowPropertyInput}
        />}
        {this.state.showPropertyInput || <Button variant="secondary" onClick={this.handleClick}>Add Property</Button>}
        <PropertiesList 
          properties={properties} 
          editProperty={editProperty} 
          deleteProperty={deleteProperty} 
          landlords={landlords} 
        />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    properties: state.properties,
    landlords: state.landlords
  }
}

export default connect(mapStateToProps, { createProperty, createLandlord, fetchReviews })(PropertiesContainer)