import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { fetchProperties } from '../../actions/properties.actions'

const PropertyInput = ({ createProperty, landlords, createLandlord, fetchProperties, toggleShowPropertyInput }) => {

  const [ address, setAddress ] = useState('')
  const [ landlordId, setLandlordId ] = useState('choose')
  const [ showNewLandlordInput, setShowNewLandlordInput ] = useState(false)
  const [ landlordName, setLandlordName ] = useState('')
  const [ imageUrl, setImageUrl ] = useState('')

  const handleAddressChange = e => {
    setAddress(e.target.value)
  }

  const handleLandlordNameChange = e => {
    setLandlordName(e.target.value)
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

  const handleImageUrlChange = e => {
    setImageUrl(e.target.value)
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
      createLandlord({name: landlordName, properties_attributes: [{address: address, image_url: imageUrl}]})
    } else {
      createProperty({address: address, landlordId: landlordId, imageUrl: imageUrl})
    }

    // below should happen no matter what
    setAddress('')
    setLandlordId('choose')
    setShowNewLandlordInput(false)
    toggleShowPropertyInput()
  }

  const renderLandlordInput = () => {
    return(
      <React.Fragment>
      <Form.Group>
        <Form.Label>Add a new Landlord</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter landlord's name" 
          onChange={handleLandlordNameChange} 
          value={landlordName}
        />
      </Form.Group>
      </React.Fragment>
    )
  }

  return(
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Address: </Form.Label>
          <Form.Control 
            type="text"
            name="address"
            id="address"
            placeholder="type address here"
            value={address}
            onChange={handleAddressChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Choose a Landlord: </Form.Label>
          <Form.Control as="select" name="" id="landlord" onChange={handleLandlordChange} value={landlordId} >
            <option value="choose">Select:</option>
              {generateLandlordSelect()}
            <option value="new">Create a New Landlord</option>
          </Form.Control>
        </Form.Group>
        {showNewLandlordInput && renderLandlordInput()}
        <Form.Group>
          <Form.Label>Image URL:</Form.Label>
          <Form.Control 
            type="text"
            name="imageUrl"
            id="image"
            placeholder="Paste an image link here"
            onChange={handleImageUrlChange}
            value={imageUrl}
          />
        </Form.Group>
        <br />
        <Button variant="secondary" type="submit">Create Property</Button>
        <Button variant="secondary" className="ml-2" onClick={toggleShowPropertyInput}>Cancel</Button>
      </Form>
  )
}

export default connect(null, { fetchProperties })(PropertyInput)