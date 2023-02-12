import React from 'react'
import Countdown from '../../Components/CountDown'
import './style.css'
export default function Home() {
  return (
    <div className='max-width up'>
      <div className='pt-16 text-center'>
        <h1 className='gagalin text-white h1'>
          frontend blast
        </h1>
      </div>

    <Countdown/>

    <div className="buttons">
      <button className='homePage-button'>Know more</button>
      <button className='homePage-button'>notify</button>
    </div>
    </div>
  )
}
