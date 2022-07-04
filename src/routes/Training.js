import React from 'react'
import Footer from '../components/footer/Footer'
import HeroImage from '../components/heroImage/HeroImage'
import Navbar from '../components/navbar/Navbar'
import TrainingFeed from '../components/training-feed/TrainingFeed'

const Training = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading="TRAINING" text="Choose the training that you are going to enjoy and which will suites your trip... Pre-Flight & In-Flight training."/>
        <TrainingFeed/>
        <Footer/>
    </div>
  )
}

export default Training