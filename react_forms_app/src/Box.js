import React from 'react'
import './Box.css'

const Box = ({ id, handleRemove, width = 5, height = 5, backgroundColor = 'black' }) => {
  const remove = () => handleRemove(id)
  return (
    <div>
      <div
        className="Box"
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor,
        }}
      />
      <button onClick={remove}>Remove your box!</button>
    </div>
  )
}

export default Box
