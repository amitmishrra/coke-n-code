import React from 'react'
import { useState } from 'react';
import "./Style.css";

const Countdown = () => {


    var countDownDate = new Date("Feb 15, 2023 15:37:25").getTime();

    var showLoading = false;

    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);

    return (
        <>
            {
                days ?
                    <div className='countdownBody'>
                        <div className='text-white smallText'>Starts in</div>
                        <div id="timer" className='w-[100%] p-5 m-auto  mt-5 shadow-2xl rounded-2xl'>
                            <div className='inline-block'>
                                <div id="days" className='gagalin text-[80px] m-[10px] inline-block text-white'>{days} :</div><span className='smallText countdownSpan text-[25px] md:text-[35px] text-left text-red-600'>Days</span> </div>
                            <div className='inline-block'>
                                <div id="hours" className='gagalin text-[80px] m-[10px] inline-block text-white'>{hours} :</div><span className='smallText countdownSpan text-[25px] md:text-[35px] text-left text-red-600'>Hours</span></div>
                            <div className='inline-block'>
                                <div id="minutes" className='gagalin text-[80px] m-[10px] inline-block text-white'>{minutes} <span>:</span></div><span className='smallText countdownSpan text-[25px] md:text-[35px] text-left text-red-600'>Minutes</span></div>
                            <div className='inline-block'>
                                <div id="seconds" className='gagalin text-[80px] m-[10px] inline-block text-white'>{parseInt(seconds)}</div><span className='smallText countdownSpan text-[25px] md:text-[35px] text-left text-red-600'>Seconds</span></div>
                        </div>
                    </div> : <div className='mt-16'>
                        {showLoading ? <span className='loading'>Loading...</span> : <div />}
                    </div>
            }
        </>
    )
}

export default Countdown;


// md:text-[150px]
// md:m-8
// md:w-[100%] 