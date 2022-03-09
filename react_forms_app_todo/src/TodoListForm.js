import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

const TodoListForm = ({ createTodo }) => {
  const [task, setTask] = useState('')

  const handleChange = e => {
    setTask(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    createTodo({ task, id: uuid() })
    setTask('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task: </label>
        <input id="task" name="task" type="text" onChange={handleChange} value={task} />
        <button>Add Todo!</button>
      </form>
    </div>
  )
}

export default TodoListForm
