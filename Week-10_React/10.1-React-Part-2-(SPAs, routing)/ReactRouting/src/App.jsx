import { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"

function App() {
  return (
    <>
      {/* This is bad way and fetchs the html all over again */}
      {/* <a href="/">Allen</a>
    | <a href="/class-11">Class-11</a>
    | <a href="/class-12">Class-12</a> */}
      <BrowserRouter>
        <Link to="/">Allen</Link>
        <br />
        <Link to="/class-11">Class-11</Link>
        <br />
        <Link to="/class-12">Class-12</Link>

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/class-11' element={<Class11Program />} />
          <Route path='/class-12' element={<Class12Program />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function ErrorPage() {
  return (
    <div>
      <h1>Sorry page not found</h1>
    </div>
  )
}

function LandingPage() {
  return <div>
    Welcom Allen
  </div>
}

function Class11Program() {
  return <div>
    Class-11 Program
  </div>
}

function Class12Program() {
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => {
      navigate("/")
    }, 5000)
  }, [])

  return <div>
    Class-12 Program
  </div>
}

export default App
