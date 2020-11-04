import React from 'react'
import Landlord from '../components/Landlord'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'

const Landlords = ({ landlords, updateLandlord, deleteLandlord, properties }) => {

  const generateLandlords = () => {

    const propertyValues = Object.values(properties)

    return (
      Object.keys(landlords).map(id => {
        return (
          <Landlord 
            key={id} 
            landlord={landlords[id]} 
            deleteLandlord={deleteLandlord} 
          />
        )
      })
    ) 
  }

  return (
    <div>
      <Container>
        {generateLandlords()}
      </Container>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    properties: state.properties
  }
}

export default connect(mapStateToProps)(Landlords)