import React, { useState } from 'react'

const Todo = ({ task = 'Default Todo', id = 1, remove, update }) => {
  const [editTodo, setEditTodo] = useState(task)
  const [isEditing, setIsEditing] = useState(false)

  const switchEdit = () => {
    setIsEditing(edit => !edit)
  }

  const handleChange = e => {
    setEditTodo(e.target.value)
  }

  const handleDelete = () => remove(id)

  const handleUpdate = e => {
    e.preventDefault()
    update(id, editTodo)
    setIsEditing(false)
  }

  let JSX = (
    <div>
      <li>{task}</li>
      <button onClick={switchEdit}>Edit</button>
      <button onClick={handleDelete}>Remove</button>
    </div>
  )

  if (isEditing) {
    JSX = (
      <div>
        <form onSubmit={handleUpdate}>
          <input type="text" value={editTodo} onChange={handleChange} />
          <button>Update!</button>
        </form>
      </div>
    )
  }
  return JSX
}

export default Todo
