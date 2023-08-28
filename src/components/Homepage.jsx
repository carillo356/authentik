import React from 'react'
import HomeHero from "./homepage/HomeHero"
import HomeStart from './homepage/HomeStart'
import HomeFramework from './homepage/HomeFramework'
import HomeFooter from './homepage/HomeFooter'

function Homepage() {
  return (
    <div className='animation'>
      <HomeHero />
      <HomeStart />
      <HomeFramework />
      <HomeFooter />
    </div>
  )
}

export default Homepage