
import { useState } from 'react'
import './App.css'

function App() {
  // const [bulbOn, setBulbOn] = useState(true);
  // if i declare this here then i need to pass it down to various other component like below
  return (
    <>
      <LightBulb />
      {/* <LightBulb bulbOn = {bulbOn} setBulbOn = {setBulbOn}/> */}
      {/* Here if you see the LightBulb component is not even use the state varibles */}
      {/* This is how we introduce prop drilling */}
    </>
  )
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true);
  // Now if i declare this in App component the above start we can get into the concept of prop drilling
  // Then i need to pass the same to LightBulb and this is how prop drilling is introduced which is not good
  // We use Context API to resolve this problem

  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState setBulbOn={setBulbOn} />
    </div>
  )
}

function BulbState({ bulbOn }) {
  return <div>
    {bulbOn ? "Bulb On" : "Bulb Off"}
  </div>
}

function ToggleBulbState({ setBulbOn }) {
  function toggle() {
    setBulbOn(currentState => !currentState)
  }
  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}

export default App
