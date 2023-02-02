import React from 'react'
import "./style.css"
export default function LandingPage() {
    return (
        <div className='topSec h-[100vh] pt-44 md:pt-36'>
            <div className="heroSec max-width flex flex-col justify-around items-center h-[55vh]">
                <div className="gagalin text-[38px] md:text-[80px] text-white text-center"><span className='heading-line '>CODE</span> • <span className='heading-line'>COMPETE</span> • <span className='heading-line'>WIN</span>
                </div>

                <div className="text-[20px] md:text-[24px] text-white text-center w-[70%] md:w-[50%] m-auto smallText">
                    Build cool and crazy <span className="coke">projects</span>, compete with geeky minds as <span className="coke">you</span>, win a <span className='coke'>coke</span> and more.
                </div>

                <div className='smallText'>
                    <button data-text="Awesome" class="button">
                        <span class="actual-text">&nbsp;EXPLORE&nbsp;</span>
                        <span class="hover-text" aria-hidden="true">&nbsp;EXPLORE&nbsp;</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
