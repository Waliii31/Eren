import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Sales from '../Components/Sales'
import Price from '../Components/Price'
import Rated from '../Components/Rated'
import Featured from '../Components/Featured'
import Theme from '../Components/Theme'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Sales/>
      <Price/>
      <Rated/>
      <Featured/>
      <Theme/>
    </div>
  )
}

export default Home
