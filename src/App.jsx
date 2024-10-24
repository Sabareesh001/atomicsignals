import { useState } from 'react'
import { BrowserRouter as BRouter } from 'react-router-dom'
import Router from './router';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BRouter>
      <Router/>
    </BRouter>
  )
}

export default App
