import React from 'react'

import Navbar from "./../components/navbar/Navbar"
import Footer from "./../components/footer/Footer"
import HeroImage from '../components/heroImage/HeroImage'
import Cards from '../components/cards/Cards'

function Pricing() {
  return (
    <div>
      <Navbar/>
      <HeroImage heading="PRICING" text="Choose your trip."/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Pricing