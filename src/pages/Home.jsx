import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import DonationStats from  '../components/DonationStats'
import GoalSection from '../components/GoalSection'
import CardSection from '../components/CardSection'
import DonateSection from '../components/DonateSection'
import Testimonials from '../components/Testimonials'


const Home = () => {
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

export default Home