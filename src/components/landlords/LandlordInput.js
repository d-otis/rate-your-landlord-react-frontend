import React, { useState } from 'react';
import { createLandlord } from '../../actions/landlords.actions'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const LandlordInput = ({ createLandlord, toggleLandlordInput }) => {

  const [name, setName] = useState('')

  const handleChange = e => {
    setName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    createLandlord({name: name})
    toggleLandlordInput()
    setName('')
  }

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group>
        <Form.Label htmlFor="landlord-name">Create a Landlord</Form.Label>
        <br />
        <Form.Control
          type="text"
          placeholder="Landlord Name"
          id="landlord-name"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button variant="secondary" type="submit">Create Landlord</Button>
      <Button onClick={toggleLandlordInput} className="ml-3" variant="secondary">Cancel</Button>
    </Form>
  )
}

export default connect(null, { createLandlord })(LandlordInput)