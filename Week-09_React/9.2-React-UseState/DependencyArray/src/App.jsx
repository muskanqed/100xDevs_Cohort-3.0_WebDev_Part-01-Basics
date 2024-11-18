import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

// useEffect, dependency Array and cleanup
function App() {

    const [count, setCount] = useState(0);
    const [count2, setcount2] = useState(0);

    function increase() {
        setCount(count => count + 1);
    }

    function decrease() {
        setcount2(count2 => count2 - 1);
    }

    return (
        <>
            <Counter count={count} count2={count2}></Counter>
            <button onClick={increase}>Increase Count</button>
            <button onClick={decrease}>decrease Count</button>

        </>
    )
}

function Counter(props) {

    useEffect(function () {
        console.log("Mounts");

        return function () {
            console.log("unmounts");
        }
    }, [])

    // useEffect is more generic it s not only used for react lifecycle
    useEffect(function () {
        console.log("when state changes run this");

        // when count increase clear the previous logic 
        return function () {
            console.log("cleanup");
        }
    }, [props.count])

    return <div>
        Counter1 {props.count}
        <br></br>
        Counter2 {props.count2}
    </div>
}

export default App
