import React from 'react'
import NavBar from '../components/HomeComponents/NavBar'
import HeroSection from '../components/HomeComponents/HeroSection'
import DonationStats from  '../components/HomeComponents/DonationStats'
import GoalSection from '../components/HomeComponents/GoalSection'
import CardSection from '../components/HomeComponents/CardSection'
import DonateSection from '../components/HomeComponents/DonateSection'
import Testimonials from '../components/HomeComponents/Testimonials'


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