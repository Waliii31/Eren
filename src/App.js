import React from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Sales from './Components/Sales'
import Price from './Components/Price'
import Rated from './Components/Rated'
import Featured from './Components/Featured'
import Theme from './Components/Theme'
import Blogs from './Components/Blogs'
import Stickers from './Components/Stickers'
import Subscribe from './Components/Subscribe'
import Contact from './Components/Contact'
import asset12 from './images/asset 12.jpeg'
import asset13 from './images/asset 13.jpeg'
import asset14 from  './images/asset 14.jpeg'
import asset15 from './images/asset 15.jpeg'


const Home = () => {
  const otherPageProducts = [
    {
      name: 'Sacrificial Chair Design',
      image: asset12,
      price: '$170.00',
    },
    {
      name: 'Sacrificial Chair Design',
      image: asset13,
      price: '$170.00',
    },
    {
      name: 'Sacrificial Chair Design',
      image: asset14,
      price: '$170.00',
    },
    {
      name: 'Sacrificial Chair Design',
      image: asset15,
      price: '$170.00',
    },
  ];
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Sales/>
      <Price/>
      <Rated/>
      <Featured
        heading="FEATURED PRODUCTS" 
        paragraph="Claritas est etiam processus dynamicus, qui sequitur."
        products={otherPageProducts}
      />
      <Theme/>
      <Blogs/>
      <Stickers/>
      <Subscribe/>
      <Contact/>
    </div>
  )
}

export default Home
