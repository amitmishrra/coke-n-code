import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { NavLink } from 'react-router-dom';

const UserPage = () => {

    const LogOut = () => {
        localStorage.setItem("loggedIn", "false");
        setTimeout(() => {
            window.location.href = "/";
        }, 1000);
    }

    return (
        <div className="login-container max-width pt-12 flex flex-col justify-around smallText ">

            <div className="w-[270px] md:w-[300px] my-12 md:my-4 m-auto">
                <img src="assets\logo2.png" className='w-[270px] md:w-[300px] ' alt="" />
            </div>

            <div className="ctr flex flex-col gap-8 w-[90%] md:max-w-[35%] m-auto bg-[#151515] text-white box-border rounded-lg text-[15px] mt-12 py-8">
                {/* <div className='text-white text-[23px] text-center smallText'>Welcome back <span className="coke">Geek </span>!</div> */}
                <div className='flex flex-col items-center gap-4 smallText '>
                    <AccountCircleIcon sx={{ fontSize: "10rem" }} />
                    {/* <img src="" className="block h-[8rem] aspect-square object-cover rounded-[50%] " alt="" /> */}
                    <p className='text-sm text-[#f00]'> <NavLink to={"/#"} >edit profile</NavLink></p>
                </div>

                <div className="flex flex-col justify-center items-center w-[100%]">
                    <ul className=' text-xl '>
                        <li>
                            Name
                        </li>
                        <li className='text-lg text-[#cecece]'>
                            Username
                        </li>
                        <li className='text-lg text-[#cecece]'>
                            Email
                        </li>
                        {/* <li>change password</li> */}
                    </ul>
                    
                    <div className='flex flex-col items-center mt-8 gap-1'>
                        <p className='text-sm text-[#f00]'> <NavLink to={"/change-password"} >change password</NavLink></p>
                        <button className='loginButton bg-black' onClick={LogOut} >logout</button>
                    </div>
                </div>
                {/* <div className="flex justify-center items-center w-[100%] text-white mt-[20px]">
                    <NavLink to="#" className="text-[#ff0000] ml-2"> can't reset your password?</NavLink>
                </div> */}
            </div>

            {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={"error"} sx={{ width: '100%' }}>
            {msg}
        </Alert>
    </Snackbar> */}
        </div>
    )
}

export default UserPage
