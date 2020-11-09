import React, { useState } from 'react'
import { updateLandlord } from '../../actions/landlords.actions'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const LandlordEditForm = ({ name: landlordName, setToggleEdit, updateLandlord, id }) => {

  const [ name, setName ] = useState(landlordName)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(`you've edited the ${name}`)
    updateLandlord(id, name)
    setToggleEdit(false)
  }

  return (
    <Form inline onSubmit={handleSubmit} className="">
    <Form.Group>
      <Form.Control 
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        name="name"
      />
    </Form.Group>
      <Button variant="secondary" type="submit">Save</Button>
    </Form>
  )
}

export default connect(null, { updateLandlord })(LandlordEditForm)