import React from 'react'
import ContactUs from './components/ContactUs'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
  )
}

export default App
