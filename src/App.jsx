import React from 'react'
import ContactUs from './components/ContactUs'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login'
<<<<<<< Updated upstream
import Services from './pages/Services'
import About from './pages/About'
=======
import Footer from './components/Footer'

>>>>>>> Stashed changes

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/Login' element={<Login/>}/>
<<<<<<< Updated upstream
      <Route path='/About' element={<About/>}/>

      <Route path='/Services' element={<Services/>}/>
=======
      <Route path='/Footer' element={<Footer/>}/>
>>>>>>> Stashed changes
    </Routes>
  )
}

export default App
