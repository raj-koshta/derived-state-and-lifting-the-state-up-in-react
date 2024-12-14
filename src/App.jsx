import React from 'react'
import './App.css'
import DerivedState from './DerivedState'
import LiftingState from './LiftingState'

function App() {

  return (
    <>
      <h1>Derived State + Lifting state Up</h1>
      <div className='aligh'>
        <DerivedState />
        <hr />
        <LiftingState />
      </div>
      <p className="read-the-docs">
        Thanks for Watching
      </p>
    </>
  )
}

export default App
