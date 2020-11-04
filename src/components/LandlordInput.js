import React, { useState } from 'react';
import { createLandlord } from '../actions/landlords.actions'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const LandlordInput = ({ createLandlord }) => {

  const [name, setName] = useState('')

  const handleChange = e => {
    setName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("here's the name", name)
    createLandlord({name: name})
    setName('')
  }

  return (
    <Form onSubmit={handleSubmit} >
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
        />
      </Form.Group>
      <Button type="submit">Create Landlord</Button>
    </Form>
  )
}

export default connect(null, { createLandlord })(LandlordInput)