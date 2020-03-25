import React from 'react'

import ReactDOM from 'react-dom'
import Test from './components/test/Test.js'

const App = () => {
  return <div> TestComponent: <Test /></div>
}

ReactDOM.render(<App />, document.querySelector('#root'))
