import React from 'react'

function App() {
  const [count, setCount] = React.useState(0);

  function onClickHandler() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={onClickHandler}>Counter {count}</button>
    </div>
  )
}
export default App