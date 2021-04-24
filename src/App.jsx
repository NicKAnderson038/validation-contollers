import React, { useState } from 'react'
import Rules from './components/Rules'
import logo from './logo.svg'
import './App.css'

function App() {
  const [bool, setBool] = useState(true)
  const [count, setCount] = useState(0)
  const rules = {
    firstComponent: [() => bool || 'Required values'],
    secondComponent: [
      () => bool || 'Required values',
      () => count > 1 || 'To small',
      () => count < 10 || 'To Large',
    ],
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="flex">
            <p>
              <button onClick={() => setBool(!bool)}>
                Bool is: {bool ? 'True' : 'False'}
              </button>
            </p>
            <p>
              <button onClick={() => setCount(count + 1)}>
                Adding Count: {count}
              </button>
            </p>
            <p>
              <button onClick={() => setCount(count - 1)}>
                Subtracting Count: {count}
              </button>
            </p>
          </div>
          <div className="contents">
            <Rules rules={rules.firstComponent}>First Component</Rules>
            <Rules rules={rules?.secondComponent}>Second Component</Rules>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
