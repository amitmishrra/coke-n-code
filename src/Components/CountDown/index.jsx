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
                        <div>Starts in</div>
                        <div id="timer" className=' w-[65%] md:w-[100%] m-auto'>
                            <div id="days" className='text-[135px] md:text-[150px] md:m-8'>{days} <span className='countdownSpan text-[25px] md:text-[35px]'>Days</span> </div>
                            <div id="hours" className='text-[85px] m-[10px] md:text-[150px] md:m-8'>{hours}<span className='countdownSpan text-[25px] md:text-[35px]'>Hours</span></div>
                            <div id="minutes" className='text-[85px] mr-[10px] md:text-[150px] md:m-8'>{minutes}<span className='countdownSpan text-[25px] md:text-[35px]'>Minutes</span></div>
                            <div id="seconds" className='text-[135px] md:text-[150px] md:m-8'>{parseInt(seconds)}<span className='countdownSpan text-[25px] md:text-[35px]'>Seconds</span></div>
                        </div>
                    </div> : <div className='mt-16'>
                        {showLoading ? <span className='loading'>Loading...</span> : <div />}
                    </div>
            }
        </>
    )
}

export default Countdown;
