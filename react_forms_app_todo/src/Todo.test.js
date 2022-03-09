import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Todo from './Todo'

it('should render without breaking', () => {
  render(<Todo />)
})

it('matches snap', () => {
  const { asFragment } = render(<Todo />)
  expect(asFragment()).toMatchSnapshot()
})

it('should match snapshot when edited', () => {
  const { asFragment, getByText } = render(<Todo />)
  const editButton = getByText('Edit')
  fireEvent.click(editButton)
  expect(asFragment()).toMatchSnapshot()
})

it('should run the udpate function of form submit', () => {
  const update = jest.fn()
  const { getByText } = render(<Todo update={update} />)
  const edit = getByText('Edit')
  fireEvent.click(edit)
  const updateBtn = getByText('Update!')
  fireEvent.click(updateBtn)
  expect(update).toHaveBeenCalled()
})

it('should run the delete function on delete button click', () => {
  const remove = jest.fn()
  const { getByText } = render(<Todo remove={remove} />)
  const deleteBtn = getByText('Remove')
  fireEvent.click(deleteBtn)
  expect(remove).toHaveBeenCalled()
})
