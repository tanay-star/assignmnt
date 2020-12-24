import React from 'react'
import './Element.css'
//importing components
import Rectangle from '../Rectangle/Rectangle'

const Element = ({ bgColor }) => {
  return (
    <div className="element">
      <Rectangle bgColor={bgColor} />
    </div>
  )
}

export default Element
