import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

const FilterComponent = ({ setFilterSelection, filterSelection }) => {

  const handleChange = e => {
    setFilterSelection(Number(e.target.value))
  }

  return (
    <Col>
      <Form>
        <Form.Group>
        <Form.Label>Filter by rating:</Form.Label>
          <Form.Control as="select" name="" id="" onChange={handleChange} value={filterSelection}>
          <option value="0">--</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Stars</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </Col>
  )
}

export default FilterComponent