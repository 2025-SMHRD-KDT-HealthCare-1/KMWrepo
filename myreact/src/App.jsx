import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Login from './component/Login'
import Join from './component/Join'
import Home from './component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path ='/Login' element ={<Login></Login>}></Route>
      <Route path ='/Join'  element ={<Join></Join>}></Route>
      <Route path = '/' element ={<Home></Home>}></Route>
    </Routes>
    </>
  )
}

export default App
