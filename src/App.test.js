import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('App render', () => {
  const component = render(<App />)
  expect(component.container.firstChild).toHaveAttribute('id', 'App')
})
