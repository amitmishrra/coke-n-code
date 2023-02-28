import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { EventData } from "../../Components/EventData";
import Carousel from "./utils/carousel";
import PrizesUtil from "./utils/prizes";
import RulesUtil from "./utils/rules";
import SubmitUtil from "./utils/submit";

const Events = (name, time, place, href) => {
    const myEventRef = useRef();
    const [eventIsVisible, setEventIsVisible] = useState(false);
    const [showClass, setShowClass] = useState("hide")
    console.log("eventIsVisible", eventIsVisible)
    // console.log("showClass", showClass)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setEventIsVisible(entry.isIntersecting);
            })
        })
        if (myEventRef.current) observer.observe(myEventRef.current)

        return () => {
            if (myEventRef.current) observer.unobserve(myEventRef.current)
        }
    }, [myEventRef]);
    return (
        <>
            <section className="main carousel flex items-center justify-center pt-20 ">
                <Carousel />
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