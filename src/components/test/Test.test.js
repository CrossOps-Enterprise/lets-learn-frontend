import React from 'react'
import { shallow } from 'enzyme'
import Test from './Test.js'

describe('Test component', () => {
  it('should render "Test component"', () => {
    const component = shallow(<Test />)
    expect(component.text()).toEqual('Test component')
  })
})
