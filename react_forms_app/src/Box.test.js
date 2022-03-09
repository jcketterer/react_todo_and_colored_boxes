import React from 'react'
import { render } from '@testing-library/react'
import Box from './Box'

it('should render without breaking', () => {
  render(<Box />)
})

it('matches snap', () => {
  const { asFragment } = render(<Box />)
  expect(asFragment()).toMatchSnapshot()
})
