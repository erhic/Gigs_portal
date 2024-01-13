import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Outlet />
    </>

  )
}

export default App
