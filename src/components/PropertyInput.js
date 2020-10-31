import React, { useState } from 'react'

const PropertyInput = props => {
  // needs to have select box of landlords
  // input for address
  // BONUS: allow for creation of landlord (which will need to be passed in as props from container)

  // postObj = {
  //   address: '1234 Main St ETC',
  //   landlordId: 1385919387127983
  // }

  const { createProperty, landlords, createLandlord, fetchProperties } = props

  const [ address, setAddress ] = useState('')
  const [ landlordId, setLandlordId ] = useState('choose')
  const [ showNewLandlordInput, setShowNewLandlordInput ] = useState(false)

  const handleAddressChange = e => {
    setAddress(e.target.value)
  }

  const handleLandlordChange = e => {
    if (e.target.value !== "new") {
      setShowNewLandlordInput(false)
      setLandlordId(e.target.value)
    } else {
      setShowNewLandlordInput(true)
      setLandlordId(e.target.value)
    }
  }

  const generateLandlordSelect = () => {
    return landlords.map(landlord => <option key={landlord.id} value={landlord.id}>{landlord.name}</option>)
  }

  const handleSubmit = e => {
    // validations for address and selecting a landlord
    // should always happen
    e.preventDefault()

    // make this a proper validation
    if (landlordId === 'choose') alert('you must select a landlord or create a new one')
    console.log(`you've submitted Property at ${address} owned by ${landlordId}`)
    // use some conditionals for if we've created a new landlord so
    // so we can pass off that info to the createLandlord() dispatch action
    // in this situation we'll have to create the landlord FIRST
    // then the property: so we can use that newly created landlords's ID
    // createProperty({address: address, landlordId: landlordId})

    if (showNewLandlordInput) {
      // nested attrs for creating new landlord
    } else {
      createProperty({address: address, landlordId: landlordId})
    }

    // below should happen no matter what
    setAddress('')
    setLandlordId('choose')
    setShowNewLandlordInput(false)
  }

  const renderLandlordInput = () => {
    return(
      <React.Fragment>
        <br />
        <label htmlFor="landlord-name">Add a new Landlord</label>
        <br />
        <input type="text" placeholder="Enter landlord's name" />
      </React.Fragment>
    )
  }

  return(
    <div>
      <h1>Add a Property</h1>
      <form onSubmit={handleSubmit}>
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
        <select name="" id="landlord" onChange={handleLandlordChange} value={landlordId} >
          <option value="choose">Select:</option>
            {generateLandlordSelect()}
          <option value="new">Create a New Landlord</option>
        </select>
        {showNewLandlordInput && renderLandlordInput()}
        <br />
        <small>[Photo Upload!]</small>
        <br />
        <input type="submit" value="Create Property" />
      </form>
    </div>
  )
}

export default PropertyInput