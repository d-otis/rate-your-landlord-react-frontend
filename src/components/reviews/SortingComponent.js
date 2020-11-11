import React from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const SortingComponent = ({ sortBy, setSortBy }) => {

  const handleChange = e => {
    setSortBy(e.target.value)
  }

  return (
    <Col>
      <Form>
        <Form.Label>Sort by:</Form.Label>
        <Form.Group>
          <fieldset>
            <div key='inline-radio'>
              <Form.Check type='radio' name="group" inline label="Chronological" id="none" onChange={handleChange} value="none"/>
              <Form.Check type='radio' name="group" inline label="Descending" id="desc" onChange={handleChange} value="desc" />
              <Form.Check type='radio' name="group" inline label="Ascending" id="asc" onChange={handleChange} value="asc" />
            </div>
          </fieldset>
        </Form.Group>

      </Form>
    </Col>
  )
}

export default SortingComponent