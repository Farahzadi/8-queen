import React from 'react'
import { shallow } from 'enzyme'
import { Chess } from './Chess'

it('renders without crashing', () => {
  shallow(<Chess />)
})
