import { useState } from 'react'

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100vh' }}>
      <ToggleMessage />
      <ToggleMessage />
      <ToggleMessage />

    </div>
  )
}
// The component whose state varible changes only that component re-renders
// Thats the reason i have repeat the <ToggleMessage /> component
function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);
  // When ever the state variable changes
  // The component using the state variable re-renders
  // The useState has two things in array [true,function()]
  // Re-rendering occurs when a user interface (UI) component is redrawn or updated to reflect changes in the underlying data or state.

  return (
    <div>
      <button onClick={() => {
        setIsVisible(!isVisible)
      }}>ToggleMessage</button>

      {isVisible && <p>This is conditional rendering</p>}
    </div>

  )

}



export default App
