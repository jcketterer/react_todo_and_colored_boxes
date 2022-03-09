import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import TodoListForm from './TodoListForm'

it('should render without breaking', () => {
  render(<TodoListForm />)
})

it('matches snap', () => {
  const { asFragment } = render(<TodoListForm />)
  expect(asFragment()).toMatchSnapshot()
})

it('should run the create function', () => {
  const create = jest.fn()
  render(<TodoListForm createTodo={create} />)
  const createBtn = screen.getByText('Add Todo!')

  fireEvent.click(createBtn)
  expect(create).toHaveBeenCalled()
})
