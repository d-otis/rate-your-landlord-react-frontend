import React, { useState } from 'react'

const LandlordEditForm = (props) => {

  const [ name, setName ] = useState(props.name)
  const { setToggleEdit, updateLandlord, id } = props

  const handleSubmit = e => {
    e.preventDefault()
    console.log(`you've edited the ${name}`)
    setToggleEdit(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        name="name"
      />
      <input 
        type="submit"
        value="Save"
      />
    </form>

  )

}

export default LandlordEditForm