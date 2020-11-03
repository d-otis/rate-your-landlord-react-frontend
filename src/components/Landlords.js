import React from 'react'
import Landlord from '../components/Landlord'

const Landlords = ({ landlords, updateLandlord, deleteLandlord }) => {

  const generateLandlords = () => {
    return Object.keys(landlords).map(id => <Landlord key={id} landlord={landlords[id]} deleteLandlord={deleteLandlord} />)
  }

  return (
    <div>
      <h1>Landlords Index</h1>
      <hr />
      {generateLandlords()}
    </div>
  )
}

export default Landlords