import React from 'react'
import PrizesUtil from '../../Components/utils/prizes'
import RulesUtil from '../../Components/utils/rules'
import SubmitUtil from '../../Components/utils/submit'
import eventsData from "../../JSON/events.json"

export default function Events() {
  return (
    <>
      <section className=" flex flex-col items-center gap-10 py-20">
        <div className=" mt-10 text-white p-2 rounded-xl md:text-4xl text-3xl font-bold">
          {eventsData[0].eventName}
        </div>
        <div className=" flex flex-col items-center w-[80vw] md:w-[900px] md:gap-0 gap-10  py-10">

          <div className="image-wrapper w-full min-h-[200px] flex items-center justify-center md:aspect-video rounded-xl bg-gray-50">
            <img className=" object-cover" src={eventsData[0].image} alt="" />
            image yaha pe daalna mst si
          </div>

          <div className="details-wrapper flex flex-col w-full p-5 md:p-8 rounded-xl text-white bg-[#333]">
            <p className=" text-xl md:text-2xl">
              {eventsData[0].eventName}
            </p>
            <div className='pt-5'>
              <p className="text-[#a0a0a0] ">SCHEDULE</p>
              <p className="text-xl md:text-2xl">
                {eventsData[0].eventDate}
              </p>
            </div>
            <div className='pt-5'>
              <p className="text-[#a0a0a0]">HAPPENING</p>
              <p className="text-xl md:text-2xl">offline</p>
            </div>
            <button className="py-3 mt-5 text-xl font-semibold rounded-xl bg-[#f00] transition hover:bg-[#e40000]">PARTICIPATE</button>
          </div>


          <div className="description-wrapper text-white text-xl md:py-16">
            {eventsData[0].description}
          </div>

        </div>

        <div className="text-white">
          <RulesUtil />
          <SubmitUtil />
          <PrizesUtil />
        </div>
      </section>
    </>
  )
}
