import React from 'react'
import { render } from '@testing-library/react'
import NewBoxForm from './NewBoxForm'

it('should render without breaking', () => {
  render(<NewBoxForm />)
})

it('matches snap', () => {
  const { asFragment } = render(<NewBoxForm />)
  expect(asFragment()).toMatchSnapshot()
})
