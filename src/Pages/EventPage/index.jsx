import { display } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { json } from "react-router-dom";
import { EventData } from "../../Components/EventData";
import eventsData from "../../JSON/events.json"
import Carousel from "./utils/carousel";
import PrizesUtil from "./utils/prizes";
import RulesUtil from "./utils/rules";
import SubmitUtil from "./utils/submit";
import "./style.css"

const Events = () => {

    const [show, setShow] = useState(null)

    return (
        <>
            <section className="main carousel flex items-center justify-center pt-20 ">
                <Carousel />
            </section>

            <section className="EventsSec flex flex-col pt-20 px-5 text-white">
                <p className="relative text-2xl">
                    Events
                    <span className=" absolute bottom-0 left-0 w-[9%] h-1 bg-[#f00]"></span>
                </p>
                <ul>
                    {
                        eventsData.map((item) => {
                            return (
                                <li style={{ display: `flex` }} className=" event-container-neu flex my-5 rounded-xl bg-[#c90000] h-min">
                                    <div className="w-3/5 p-3 rounded-l-xl flex flex-col justify-between ">
                                        <div className="">
                                            <p className="events-title text-2xl">
                                                {item.eventName}
                                            </p>
                                            <p className="events-title text-xl">
                                                {item.eventDate}
                                            </p>
                                        </div>
                                        <div className=" my-1 flex items-center justify-between gap-5">
                                            <button
                                                className="registerButton py-1 px-2 "
                                                style={item.eventDate == "Coming Soon" ? { display: "none" } : null} >
                                                {item.eventDate == "Ongoing" || item.eventDate != "Coming Soon" ? "Register" : null}
                                            </button>

                                            <button className="registerButton py-1 px-2">
                                                {item.eventDate != "Ongoing" || item.eventDate == "Coming Soon" ? "Notify me" : null}
                                            </button>
                                        </div>
                                    </div>
                                    <div className=" flex items-center justify-center w-2/5 p-3 rounded-r-xl aspect-square ">
                                        {/* <span className=" w-full object-cover rounded-xl block aspect-square bg-[#000]"></span> */}
                                        <img src={item.image} alt="" className=" imgObj w-full h-full object-cover rounded-xl block aspect-square" />
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>


                {/* <button onClick={() => { show == "flex" ? setShow("none") : setShow("flex") }} className="">
                    {show == "flex" ? `show less ` : "show more"}
                </button> */}
            </section>

            <section className="others flex flex-col items-center text-white py-[300px] md:py-[300px] ">
                <RulesUtil />
                <SubmitUtil />
                <PrizesUtil />
                {/* {
                    EventData.map((item) => {
                        return (
                            <>
                                <div
                                    data-aos="fade-right"
                                    data-aos-delay="50"
                                    data-aos-duration="500"
                                    // data-aos-once="false"
                                    data-aos-anchor-placement="center-bottom"
                                    className="flex flex-col rounded-lg w-[70%] bg-[#131313]">
                                    <div className="relative rounded-t-lg h-[25px] bg-[#0a0a0a]">
                                        <div className=" absolute right-[20px] top-[8px] flex">
                                            <button className=" md:text-xl p-1 md:px-4 hover:bg-[#383838] bg-black ">Notify me</button>
                                            <button className=" md:text-xl p-1 md:px-4 hover:bg-[#383838] bg-[#ff0000] ">Participate</button>
                                        </div>
                                    </div>
                                    <div className=" flex flex-col justify-center gap-3 p-5">
                                        <p className="eventName text-2xl md:text-4xl">
                                            {item.name}
                                        </p>
                                        <p className="eventTime text-xl">
                                            {item.time}
                                        </p>
                                        <p className="eventPlace">
                                            {item.place}
                                        </p>
                                    </div>
                                </div>
                                <span
                                    data-aos="fade-down"
                                    data-aos-delay="50"
                                    data-aos-duration="500"
                                    // data-aos-once="false"
                                    data-aos-anchor-placement="center-bottom"
                                    className=" bar-under-event relative block h-[300px] w-[2px] -ml-[45%] bg-[#ff0000] ">
                                </span>
                            </>
                        )
                    })
                } */}
            </section>
        </>
    )
}

export default Events