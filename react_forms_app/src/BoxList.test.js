import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import BoxList from './BoxList'

const addBox = (height = 2, width = 2, color = 'peachpuff') => {
  const heightInput = screen.getByLabelText('Height:')
  const widthInput = screen.getByLabelText('Width:')
  const backgroundInput = screen.getByLabelText('Background Color:')

  fireEvent.change(backgroundInput, { target: { value: color } })
  fireEvent.change(widthInput, { target: { value: width } })
  fireEvent.change(heightInput, { target: { value: height } })

  const btn = screen.getByText('Add your Box!')

  fireEvent.click(btn)
}

it('should render without breaking', () => {
  render(<BoxList />)
})

it('matches snap', () => {
  const { asFragment } = render(<BoxList />)
  expect(asFragment()).toMatchSnapshot()
})

it('should add a box', () => {
  const boxList = render(<BoxList />)

  expect(boxList.queryByText('Remove your box!')).not.toBeInTheDocument()

  addBox(boxList)

  const remove = boxList.queryByText('Remove your box!')
  expect(remove).toBeInTheDocument()
  expect(boxList.getAllByDisplayValue('')).toHaveLength(3)
})

it('should be able to remove a box', () => {
  const boxList = render(<BoxList />)
  addBox(boxList)

  const remove = boxList.queryByText('Remove your box!')

  fireEvent.click(remove)
  expect(remove).not.toBeInTheDocument
})
