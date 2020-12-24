import React from 'react'
import './Button.css'

const Button = ({ handleClick }) => {
  return (
    <button className="button" onClick={handleClick}>
      Press
    </button>
  )
}

export default Button
