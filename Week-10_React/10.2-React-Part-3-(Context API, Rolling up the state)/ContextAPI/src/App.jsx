import { useContext } from "react";
import { Children } from "react";
import { useState } from "react";
import { createContext } from "react"


const BulbContext = createContext();

function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true);

  return <BulbContext.Provider value={{
    bulbOn: bulbOn,
    setBulbOn: setBulbOn
  }}>
    {children}
  </BulbContext.Provider>

}

function App() {

  return (
    <div>
      <LightBulb />
    </div>
  )
}

function LightBulb() {

  return (
    <>
      <BulbProvider>
        <BulbState />
        <Swtich />
      </BulbProvider>

    </>
  )
}

function BulbState() {
  const { bulbOn } = useContext(BulbContext);
  return (
    <h1>BulbOn {bulbOn ? "On" : "Off"}</h1>
  )
}

function Swtich() {
  const { setBulbOn } = useContext(BulbContext);

  function toggle() {
    setBulbOn((current) => !current);

  }

  return <button onClick={toggle}>Swtich</button>

}

export default App
