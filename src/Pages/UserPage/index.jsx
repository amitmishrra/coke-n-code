import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import WestIcon from '@mui/icons-material/West';
import { NavLink } from 'react-router-dom';

// login-container max-width smallText

const UserPage = () => {

    const userData = JSON.parse(localStorage.getItem("user"));
    const LogOut = () => {
        localStorage.setItem("loggedIn", "false");
        setTimeout(() => {
            window.location.href = "/";
        }, 1000);
    }

    return (
        <section className="max-width smallText py-12 w-full flex flex-col md:flex-row items-center md:items-start gap-8 ">
            <div className="md:sticky md:top-24 left-0 flex flex-col justify-around gap-10 max-w-min md:h-[80vh] w-[85vw] min-w-[85vw] md:min-w-0 bg-[#151515] text-white box-border rounded-lg text-[15px] mt-12 py-10 md:px-5 px-3">

                <div className='flex flex-col items-center gap-4 smallText '>
                    <AccountCircleIcon sx={{ fontSize: "10rem" }} />
                    {/* <img src="" className="block h-[8rem] aspect-square object-cover rounded-[50%] " alt="" /> */}
                    {/* <p className='text-sm text-[#f00]'> <NavLink to={"/#"} >edit profile</NavLink></p> */}
                </div>

                <div className="flex flex-col justify-center items-center w-[100%]">
                    <ul className=' text-xl '>
                        <li className=' capitalize'>
                            {userData[0].fullName}
                        </li>
                        <li className='text-lg text-[#cecece]'>
                            {userData[0].username}
                        </li>
                        <li className='text-lg text-[#cecece]'>
                            {userData[0].email}
                        </li>
                        {/* <li>change password</li> */}
                    </ul>

                    <div className='flex flex-col items-center mt-8 gap-1'>
                        <p className='text-sm text-[#f00]'> <NavLink to={"/change-password"} >settings</NavLink></p>
                        <button className='loginButton bg-black' onClick={LogOut} >logout</button>
                    </div>
                </div>
            </div>
            <div className=" md:mt-12 flex flex-col min-w-[66%]  text-white box-border md:px-0 px-3 overflow-x-scroll">
                <div className="">
                    <p className="text-xl  text-white">Active Hackthons</p>
                    <div className="flex flex-col items-center justify-center w-full py-4">
                        <div className="flex items-center gap-5 overflow-x-scroll w-[85vw] md:w-full md:min-w-0 min-w-[85vw] ">
                            <span className=" h-[20vh] md:h-[180px] w-min aspect-video bg-blue-500"></span>
                            <span className=" h-[20vh] md:h-[180px] w-min aspect-video bg-blue-500"></span>
                            <span className=" h-[20vh] md:h-[180px] w-min aspect-video bg-blue-500"></span>
                            <span className=" h-[20vh] md:h-[180px] w-min aspect-video bg-blue-500"></span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <p className="text-xl ">Notifications</p>
                    <div className="flex flex-col items-center justify-center w-full py-4">
                        <div className="flex items-center gap-5 overflow-x-scroll w-[85vw] md:w-full md:min-w-0 min-w-[85vw] ">
                            <span className=" h-[12vh] md:h-[130px] w-min aspect-[4/3] bg-blue-500"></span>
                            <span className=" h-[12vh] md:h-[130px] w-min aspect-[4/3] bg-blue-500"></span>
                            <span className=" h-[12vh] md:h-[130px] w-min aspect-[4/3] bg-blue-500"></span>
                            <span className=" h-[12vh] md:h-[130px] w-min aspect-[4/3] bg-blue-500"></span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <p className="text-xl ">Past Hackthons</p>
                    <div className="flex flex-col items-center justify-center w-full py-4">
                        <div className="flex items-center gap-5 overflow-x-auto w-[85vw] md:w-full md:min-w-0 min-w-[85vw] ">
                            <span className=" h-[18vh] md:h-[150px] w-min aspect-video bg-blue-500"></span>
                            <span className=" h-[18vh] md:h-[150px] w-min aspect-video bg-blue-500"></span>
                            <span className=" h-[18vh] md:h-[150px] w-min aspect-video bg-blue-500"></span>
                            <span className=" h-[18vh] md:h-[150px] w-min aspect-video bg-blue-500"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserPage
