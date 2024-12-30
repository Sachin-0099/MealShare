import React from 'react'
<<<<<<< Updated upstream
import ContactUs from './components/ContactUs'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
    </Routes>
=======
import About from './Pages/About'

const App = () => {
  return (
    <div>
   
      <About/>
    </div>
>>>>>>> Stashed changes
  )
}

export default App
