import React from 'react'
import Landlord from '../components/Landlord'

const Landlords = ({ landlords, updateLandlord, deleteLandlord }) => {

  render() {

    const landlords = this.props.landlords
    const { updateLandlord, deleteLandlord } = this.props

    return (
      <div>
        <h1>Landlords Index</h1>
        {landlords.map(landlord => <Landlord 
                                      key={landlord.id} 
                                      {...landlord} 
                                      updateLandlord={updateLandlord}
                                      deleteLandlord={deleteLandlord}
                                    />)}
      </div>
      
    )
  }
}

export default Landlords