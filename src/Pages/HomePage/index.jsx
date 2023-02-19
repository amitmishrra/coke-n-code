import React from 'react'
import Countdown from '../../Components/CountDown'
import './style.css'
import eventsData from '../../JSON/events.json'
export default function Home() {
  return (
    <div className=' up'>
      <div className="homeTopSec h-[100vh]">
        <div className="homeherosec flex flex-col max-width justify-center items-center h-[100vh] md:h-[65vh] pt-24 md:pt-36">
          <div className='py-16 text-center gagalin text-white text-[40px] md:text-[75px]'>
           
              frontend blast
          
          </div>

          <Countdown />

          <div className="buttons">
            <button className='homePage-button'>Know more</button>
            <button className='homePage-button'>notify me</button>
          </div>
        </div>
      </div>


      <div className="commingSoomSec max-width h-[75vh] flex flex-col justify-center items-center">
        <div className='gagalin text-center my-10 text-[35px] md:text-[45px]'>
          Upcoming Events
        </div>

        <div className="events flex justify-betweemn items-center w-[90%]">
          {eventsData.map((event) => {
            return (
              <div className="nextbox">
                <div className="name gagalin text-[30px] coke">
                  {event.eventName}
                </div>
                <div className="des text-justify">
                 {event.description}
                </div>
                <div className="comingSoon">
                  {event.eventDate}
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}
