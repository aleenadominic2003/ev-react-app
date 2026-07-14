import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/add' element={<Add/>} />


        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
