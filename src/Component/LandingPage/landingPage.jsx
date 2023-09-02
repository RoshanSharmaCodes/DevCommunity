import React from 'react'
import "./landingPage.css"

const LandingPage = () => {
  return (
    <div className='landingContainer'>
        <div className='landingMain'>
            <img className='landingCoding' alt="codingGuy" src="assets/images/codingGuy.svg" />
            <img className='landingWave' alt="wave" src='assets/images/wave.svg'/>
        </div>
    </div>
  )
}

export default LandingPage;