import React from 'react'
import { shallow } from 'enzyme'

import { ChessStatus } from './ChessStatus'

it('renders without error', () => {
  expect(shallow(<ChessStatus />))
})
