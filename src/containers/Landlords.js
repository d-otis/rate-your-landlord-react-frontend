import React, { Component } from 'react'
import Landlord from '../components/Landlord'

class Landlords extends Component {

  render() {

    const landlords = this.props.landlords
    // debugger

    return (
      <div>
        <h1>Landlords Index</h1>
        {landlords.map(landlord => <Landlord key={landlord.id} {...landlord} />)}
      </div>
      
    )
  }
}

export default Landlords