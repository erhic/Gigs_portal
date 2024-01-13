import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>Navigation</nav>
      <h1 className='text-secondary'>ready to go</h1>
      <footer>Footer</footer>
    </>
  )
}

export default App
