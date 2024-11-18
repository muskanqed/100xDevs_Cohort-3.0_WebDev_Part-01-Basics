import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // Condition rendering: if true then render else dont render
  const [counterVisible, setCounterVisible] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setCounterVisible(c => !c)
    }, 5000)
  }, [])

  return (
    <>
      {/* The below logic doesnt unmounts it just hides it so the clock continues that is the clock below */}
      {/* <div style={{ visibility: counterVisible ? "visible" : "hidden" }}>
        <Counter></Counter>
      </div> */}
      <div>
        {/* This logic surely unmounts it */}
        {counterVisible && <Counter></Counter>}
      </div>
    </>
  );
}

// Mounting, Re-rendering and unmounting
function Counter() {
  const [count, setCount] = useState(0);

  // Check this log
  console.log("Re-rendering");


  // useEffect hooks ensures that our element is hooked once when it mounts and does change even if re-rendering happens
  // We wanted to guard our setInterval using useEffect
  useEffect(() => {
    const clock = setInterval(() => {
      console.log("Mounted once");
      setCount(count => count + 1)
    }, 1000)

    console.log("Only Once");


    return function () {
      console.log("Unmounts");
      clearInterval(clock);
    }
  }, [])

  // function increaseCount() {
  //   setCount(count + 1);
  // }


  return (
    <div>
      <h1>{count}</h1>
      {/* <button onClick={increaseCount}>Increase Count</button> */}
    </div>
  );
}

export default App;
