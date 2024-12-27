import React from 'react'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import DonationStats from  './Components/DonationStats'
import GoalSection from './Components/GoalSection'
import CardSection from './Components/CardSection'
import DonateSection from './Components/DonateSection'
import Testimonials from './Components/Testimonials'

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <DonationStats />
      <GoalSection />
      <CardSection />
      <DonateSection />
      <Testimonials />
    </div>
  )
}

export default App
