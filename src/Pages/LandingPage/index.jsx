import React from 'react'
import "./style.css"
export default function LandingPage() {
    return (
        <>
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

        <div className="codeSection max-width flex flex-col md:flex-row justify-around md:justify-between items-center h-[75vh]">
            <div className="leftSide w-[90%] md:w-[50%] flex-col flex justify-center p-4">
                    <div className="gagalin text-[38px] md:text-[80px] text-white">
                       <div className="coke"> Code</div>
                    </div>

                    <div className='smallText text-white text-justify '>
                        Welcome to an innovative and dynamic online hackathon event, where creativity and coding collide! Get ready to challenge yourself with exciting coding tasks and experience the thrill of coding in a unique and inspiring environment. Join us and let's code together.
                    </div>
            </div>

            <div className="right w-[90%] md:w-[50%] flex-col flex justify-center items-center">
                <img className='w-[90%] rounded-[10px] shadow-2xl codeImage' src="/assets/LandingPageImages/code.jpeg" alt="" />
            </div>
        </div>


        <div className="competeSection max-width flex flex-col md:flex-row-reverse justify-around md:justify-between items-center h-[75vh]">
            <div className="leftSide w-[90%] md:w-[50%] flex-col flex justify-center p-4">
                    <div className="gagalin text-[38px] md:text-[80px] text-white text-right">
                       <div className="coke">Compete</div>
                    </div>

                    <div className='smallText text-white text-justify '>
                        Build your project using any language and framework of your choice.
                        ojfgojd si dfg dfgios io godf gkds igdfg s ig sdfgh ihg sdg h gh sd
                        Build your project using any language and framework of your choice. ojfgojd si dfg dfgios io godf gkds igdfg s ig sdfgh ihg sdg h gh sd
                    </div>
            </div>

            <div className="right w-[90%] md:w-[50%] flex-col flex justify-center items-center">
                <img className='w-[90%] rounded-[10px] shadow-2xl codeImage' src="/assets/LandingPageImages/compete.png" alt="" />
            </div>
        </div>

        <div className="codeSection max-width flex flex-col md:flex-row justify-around md:justify-between items-center h-[75vh]">
            <div className="leftSide w-[90%] md:w-[50%] flex-col flex justify-center p-4">
                    <div className="gagalin text-[38px] md:text-[80px] text-white">
                       <div className="coke">Win</div>
                    </div>

                    <div className='smallText text-white text-justify '>
                        Build your project using any language and framework of your choice.
                        ojfgojd si dfg dfgios io godf gkds igdfg s ig sdfgh ihg sdg h gh sd
                        Build your project using any language and framework of your choice. ojfgojd si dfg dfgios io godf gkds igdfg s ig sdfgh ihg sdg h gh sd
                    </div>
            </div>

            <div className="right w-[90%] md:w-[50%] flex-col flex justify-center items-center">
                <img className='w-[60%]' src="/assets/LandingPageImages/win.gif" alt="" />
            </div>
        </div>

        </>
        
    )
}
