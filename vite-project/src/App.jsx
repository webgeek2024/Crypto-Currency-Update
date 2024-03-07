import { useState } from 'react'
import Blog from './Components/Blog'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Blog/>
    </>
  )
}

export default App
