import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('Test component', () => {
  it('should render "Test component"', () => {
    const component = shallow(<App />)
    expect(component.text()).toEqual('Hello world')
  })
})
