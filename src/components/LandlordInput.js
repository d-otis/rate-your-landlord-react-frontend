import React, { useState } from 'react';
import { createLandlord } from '../actions/landlords.actions'
import { connect } from 'react-redux'

const LandlordInput = (props) => {

  const [name, setName] = useState('')

  const handleChange = e => {
    setName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("here's the name", name)
    props.createLandlord(name)
    setName('')
  }

  return (
    <div>
      <h1>LandlordInput</h1>
      <form onSubmit={handleSubmit} >
      <label htmlFor="landlord-name">Create a Landlord</label>
      <br />
      <input
        type="text"
        placeholder="Landlord Name"
        id="landlord-name"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <br />
      <input 
        type="submit"
      />
      </form>
    </div>

  )
}

export default connect(null, { createLandlord })(LandlordInput)