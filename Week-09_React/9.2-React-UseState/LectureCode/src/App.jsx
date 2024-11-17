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
      <div>
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

  useEffect(() => {
    setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    console.log("Mounted once");

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
