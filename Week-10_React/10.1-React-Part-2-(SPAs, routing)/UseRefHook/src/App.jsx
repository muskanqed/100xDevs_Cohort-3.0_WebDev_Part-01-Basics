import { useState } from 'react'
import './App.css'
import { useRef } from 'react';

// Clock with start and stop button
function App() {
  const [clock, setClock] = useState(0);
  // const [timer, setTimer] = useState(); // this will re-render to avoid unnecessary re-render we need to use useRef which will create a reference to the value
  const timer = useRef();

  const startClock = () => {
    const value = setInterval(() => {
      setClock(c => c + 1);
    }, 1000)
    timer.current = (value);
  }

  function stopClock() {
    clearInterval(timer.current);
    console.log(timer.current) // this will return 41 or any number which is id for the interval that is unique and is return by setInterval function
  }

  return (
    <>
      <h1>Timer: {clock}</h1>
      <button onClick={startClock}>startTime</button>
      <button onClick={stopClock}>stopTime</button>

    </>
  )
}

export default App
