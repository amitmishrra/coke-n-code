import React from "react";
import eventsData from "../../../JSON/events.json"
import PrizesUtil from "../utils/prizes";
import RulesUtil from "../utils/rules";
import SubmitUtil from "../utils/submit";

const SingularEvent = () => {
    return (
        <>
            <section className=" flex flex-col items-center gap-10 pt-20">
                <div className=" mt-10 bg-white p-2 rounded-xl text-3xl">
                    {eventsData[0].eventName}
                </div>
                <div className="flex gap-5 bg-white p-1 rounded-lg text-2xl cursor-pointer">
                    <div className=" p-1 bg-[#ff3f3f] text-white rounded">
                        overview
                    </div>
                    <div className="p-1 hover:bg-[#ff3f3f38] text-[#ff3f3f] rounded">
                        rules
                    </div>
                    <div className="p-1 hover:bg-[#ff3f3f38] text-[#ff3f3f] rounded">
                        how to
                    </div>
                    <div className="p-1 hover:bg-[#ff3f3f38] text-[#ff3f3f] rounded">
                        prizes
                    </div>
                </div>

                <div className=" flex flex-col items-center w-full bg-blue-400 text-white py-10">
                    <div className="flex flex-col w-[80vw] bg-[#333]">
                        <p className="text-3xl">
                            {eventsData[0].eventName}
                        </p>
                        <p className="text-3xl">
                            <p className="text-[#a0a0a0]">schedule</p>
                            {eventsData[0].eventDate}
                        </p>
                        {/* <p className="text-3xl">
                            {eventsData[0].description}
                        </p> */}
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

export default SingularEvent