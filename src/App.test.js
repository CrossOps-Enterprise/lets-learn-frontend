import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

it('should render App component without crashing', () => {
  const component = shallow(<App />)
  expect(component).toMatchSnapshot()
})

it('App component should have the text Hello World', () => {
  const component = shallow(<App />)
  expect(component.text()).toEqual('Hello World')
})
