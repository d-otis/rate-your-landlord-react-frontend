import React from 'react'
import Landlord from './Landlord'
import { connect } from 'react-redux'

const Landlords = ({ landlords, updateLandlord, deleteLandlord, properties }) => {

  const generateLandlords = () => {

    const propertyValues = Object.values(properties)

    return (
      Object.keys(landlords).reverse().map(id => {
        const properties = propertyValues.filter(property => property.landlordId === id)
        return (
          <Landlord 
            key={id} 
            landlord={landlords[id]} 
            deleteLandlord={deleteLandlord}
            properties={properties}
          />
        )
      })
    ) 
  }

  return (
    <React.Fragment>
      {generateLandlords()}
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    properties: state.properties
  }
}

export default connect(mapStateToProps)(Landlords)