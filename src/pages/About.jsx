import React from 'react'
import Work from '../components/AboutComponents/Work'
import PeopleSection from '../components/AboutComponents/PeopleSection'
import AboutUs from '../components/AboutComponents/AboutUs'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <AboutUs/>
      <Work/>
  <PeopleSection/>
  <Footer/>
    </div>
  )
}

export default About
