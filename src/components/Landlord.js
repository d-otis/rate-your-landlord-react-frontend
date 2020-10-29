import React, { useState } from 'react'

function Landlord(props) {

  const [ toggleEdit, setToggleEdit ] = useState(false)

  const { id, 
          name, 
          properties, 
          reviews, 
          rating, 
          updateLandlord, 
          deleteLandlord } = props

  const handleEditClick = () => {
    setToggleEdit(!toggleEdit)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(`you've edited the ${name}`)
    setToggleEdit(false)
  }

  const renderEditForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={name}
        />
        <input 
          type="submit"
          value="Save"
        />
      </form>

    )
  }

  return (
    <div key={id}>
      <h2>{name}</h2>
      <button onClick={handleEditClick} >Edit Landlord</button>
      <br />
      {toggleEdit && renderEditForm()}
      <h3>Rating: {rating}</h3>
      <h3>Properties:</h3>

      {properties.length > 0 
        ? 
          <ol>
            {properties.map((property, idx) => <li key={property.id}>Property ID : {property.id}</li>)}
          </ol>
        : 'doesnt have properties'
      }

      <h3>Reviews:</h3>
      {reviews.length > 0 
        ?
          <ol>
            {reviews.map((review, idx) => <li key={review.id}>Review ID : {review.id}</li>)}
          </ol>
        : "doesn't have any reviews"
      }
     
      <hr />
    </div>
  )
}

export default Landlord