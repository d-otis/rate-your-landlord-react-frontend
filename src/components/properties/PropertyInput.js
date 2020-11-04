import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const PropertyInput = props => {

  const { createProperty, landlords, createLandlord, fetchProperties } = props

  const [ address, setAddress ] = useState('')
  const [ landlordId, setLandlordId ] = useState('choose')
  const [ showNewLandlordInput, setShowNewLandlordInput ] = useState(false)
  const [ landlordName, setLandlordName ] = useState('')

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
    return Object.keys(landlords).map(id => <option value={landlords[id].id} key={id}>{landlords[id].name}</option>)
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
      createLandlord({name: landlordName, properties_attributes: [{address: address}]})
      // figure out how to make below work:
      // right now it's not updating--probably due to async business
      fetchProperties()
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
        <input 
          type="text" 
          placeholder="Enter landlord's name" 
          onChange={handleLandlordNameChange} 
          value={landlordName}
        />
      </React.Fragment>
    )
  }

  const handleLandlordNameChange = e => {
    setLandlordName(e.target.value)
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
      <hr />
      </form>
    </div>
  )
}

export default PropertyInput