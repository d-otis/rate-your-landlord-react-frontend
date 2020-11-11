import React from 'react'
import Form from 'react-bootstrap/Form'

const FilterComponent = ({ setFilterSelection }) => {

  const handleChange = e => {
    setFilterSelection(e.target.value)
  }

  return (
    <Form>
    <Form.Group>
    <Form.Label>Choose a rating:</Form.Label>
      <Form.Control as="select" name="" id="" onChange={handleChange}>
        <option value="5">5 Stars</option>
        <option value="4">4 Stars</option>
        <option value="3">3 Stars</option>
        <option value="2">2 Stars</option>
        <option value="1">1 Stars</option>
      </Form.Control>
    </Form.Group>

    </Form>
  )
}

export default FilterComponent