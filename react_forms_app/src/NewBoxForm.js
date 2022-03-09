import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './NewBoxForm.css'

const NewBoxForm = ({ createBox }) => {
  const INIT_STATE = {
    height: '',
    width: '',
    backgroundColor: '',
  }
  const [formData, setFormData] = useState(INIT_STATE)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }))
  }

  const handleInput = e => {
    e.preventDefault()
    createBox({ ...formData, id: uuid() })
    setFormData({ height: '', width: '', backgroundColor: '' })
  }

  return (
    <div className="NewBoxForm">
      <form onSubmit={handleInput}>
        <div className="NewBoxFormInput">
          <label htmlFor="height">Height: </label>
          <input
            onChange={handleChange}
            type="text"
            name="height"
            value={formData.height}
            id="height"
          />
        </div>
        <div className="NewBoxFormInput">
          <label htmlFor="width">Width: </label>
          <input
            onChange={handleChange}
            type="text"
            name="width"
            value={formData.width}
            id="width"
          />
        </div>
        <div className="NewBoxFormInput">
          <label htmlFor="backgroundColor">Background Color: </label>
          <input
            onChange={handleChange}
            type="text"
            name="backgroundColor"
            value={formData.backgroundColor}
            id="backgroundColor"
          />
        </div>
        <button id="newBoxButton">Add your Box!</button>
      </form>
    </div>
  )
}

export default NewBoxForm
