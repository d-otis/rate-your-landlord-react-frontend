import React, { useState } from 'react';

const LandlordInput = (props) => {

  const [name, setName] = useState('')

  const { createLandlord } = props

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
    <div>
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

export default LandlordInput