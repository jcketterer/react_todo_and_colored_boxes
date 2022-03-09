import React, { useState } from 'react'
import Todo from './Todo'
import TodoListForm from './TodoListForm'

const TodoList = () => {
  const [todos, setTodos] = useState([])

  const createTodo = newTodo => {
    setTodos(todos => [...todos, newTodo])
  }

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos =>
      todos.map(todo => (todo.id === id ? { ...todo, task: updatedTodo } : todo))
    )
  }

  const remove = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }

  const todoAttributes = todos.map(todo => (
    <Todo remove={remove} key={todo.id} id={todo.id} task={todo.task} update={updateTodo} />
  ))

  return (
    <div>
      <TodoListForm createTodo={createTodo} />
      <ul>{todoAttributes}</ul>
    </div>
  )
}

export default TodoList
