import React from 'react'
import { shallow } from 'enzyme'
import { ChessBoard } from './ChessBoard'

it('renders without crashing', () => {
  shallow(<ChessBoard />)
})
