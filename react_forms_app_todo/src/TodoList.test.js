import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import TodoList from './TodoList'

const addTodo = (task = 'write all the tests') => {
  const input = screen.getByLabelText('Task:')
  fireEvent.change(input, { target: { value: task } })
  const submitBtn = screen.getByText('Add Todo!')
  fireEvent.click(submitBtn)
}

it('should render without breaking', () => {
  render(<TodoList />)
})

it('matches snap', () => {
  const { asFragment } = render(<TodoList />)
  expect(asFragment()).toMatchSnapshot()
})

it('should add a todo', () => {
  render(<TodoList />)
  addTodo()
  expect(screen.getByLabelText('Task:')).toHaveValue('')
  expect(screen.getByText('write all the tests')).toBeInTheDocument()
  expect(screen.getByText('Edit')).toBeInTheDocument()
  expect(screen.getByText('Remove')).toBeInTheDocument()
})

it('should edit a todo', () => {
  render(<TodoList />)
  addTodo()

  fireEvent.click(screen.getByText('Edit'))
  const input = screen.getByDisplayValue('write all the tests')
  fireEvent.change(input, { target: { value: 'sleep!' } })
  fireEvent.click(screen.getByText('Update!'))

  expect(screen.getByText('sleep!')).toBeInTheDocument()
  expect(screen.queryByText('write all the tests')).not.toBeInTheDocument()
})

it('should delete a todo', () => {
  render(<TodoList />)
  addTodo()

  fireEvent.click(screen.getByText('Remove'))
  expect(screen.queryByText('write all the tests')).not.toBeInTheDocument()
})
