import React, { Component } from 'react'
import Landlord from '../components/Landlord'
import LandlordInput from '../components/LandlordInput'

class Landlords extends Component {

  render() {

    const landlords = this.props.landlords
    // debugger

    return (
      <div>
        <LandlordInput />
        <h1>Landlords Index</h1>
        {landlords.map(landlord => <Landlord key={landlord.id} {...landlord} />)}
      </div>
      
    )
  }
}

export default Landlords