import React from 'react'

function UserInput(props) {
  return (
    <div>
      <span>Name</span><input type='text' name="name" onChange={(event) => props.handleInputChange(event.target)} />
      <span>   Message</span><input type='text' name="message" onChange={(event) => props.handleInputChange(event.target)} />
      <input type='submit' value="Send Message" onClick={(event) => props.handleClick(event)} />
    </div>
  )
}

export default UserInput;