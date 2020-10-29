import React, { useState } from 'react'

const PropertyInput = props => {
  // needs to have select box of landlords
  // input for address
  // BONUS: allow for creation of landlord (which will need to be passed in as props from container)

  // postObj = {
  //   address: '1234 Main St ETC',
  //   landlordId: 1385919387127983
  // }

  const { createProperty, landlords } = props

  const [ address, setAddress ] = useState('')
  const [ landlordId, setLandlordId ] = useState('choose')

  const handleAddressChange = e => {
    setAddress(e.target.value)
  }

  const handleLandlordChange = e => {
    setLandlordId(e.target.value)
  }

  const generateLandlordSelect = () => {
    return landlords.map(landlord => <option value={landlord.id}>{landlord.name}</option>)
  }

  return(
    <div>
      <h1>Add a Property</h1>
      <form>
        <label htmlFor="address">Address: </label>
        <br />
        <input 
          type="text"
          name="address"
          id="address"
          placeholder="type address here"
          value={address}
          onChange={handleAddressChange}
        />
        <br />
        <label htmlFor="landlord">Choose a Landlord: </label>
        <br />
        <select name="" id="landlord" onChange={handleLandlordChange}>
          <option value="">Select:</option>
            {generateLandlordSelect()}
          <option value="new">Create a New Landlord</option>
        </select>
        <br />
        <small>[Photo Upload!]</small>
        <br />
        <input type="submit" value="Create Property" />
      </form>
    </div>
  )
}

export default PropertyInput