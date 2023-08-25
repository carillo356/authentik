import React from 'react'
import '../../css/homehero.css'

function Hero() {
  return (
    <>
      <div className='hero-wrapper'>
        <div className='hero-text-welcome'>
          <span>Welcome to</span>
          <span>Authentik.</span> 
          <span>We help creative entrepreneurs build an honest brand & digital platform.</span>
        </div>
        <div className='hero-buttons'>
          <button className='start-btn'>START YOUR JOURNEY</button>
          <a className='learn-more-btn underline'>LEARN MORE &rarr;</a>
        </div>
      </div>    
    </>
  )
}

export default Hero