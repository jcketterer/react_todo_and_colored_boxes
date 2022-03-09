import React, { useState } from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import './BoxList.css'

const BoxList = () => {
  const [boxes, setBoxes] = useState([])
  const add = boxObj => {
    setBoxes(boxes => [...boxes, boxObj])
  }

  const remove = id => {
    setBoxes(boxes => boxes.filter(box => box.id !== id))
  }

  const boxAttributes = boxes.map(box => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      handleRemove={remove}
      backgroundColor={box.backgroundColor}
    />
  ))

  return (
    <div className="BoxList">
      <NewBoxForm createBox={add} />
      <div className="BoxList-Box">{boxAttributes}</div>
    </div>
  )
}

export default BoxList
