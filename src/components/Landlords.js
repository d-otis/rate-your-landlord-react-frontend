import React from 'react'
import Landlord from '../components/Landlord'
import Container from 'react-bootstrap/Container'

const Landlords = ({ landlords, updateLandlord, deleteLandlord }) => {

  const generateLandlords = () => {
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

export default Landlords