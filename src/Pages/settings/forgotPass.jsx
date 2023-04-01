import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import OtpPopUp from './otpPopUp';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Forgot() {

    const [email, setEmail] = useState("");
    const [valid, setvalid] = useState("");
    const [msg, setMsg] = useState("");
    const [open, setOpen] = useState("");
    const [buttonClicked, setButtonClicked] = useState("");

    const showPopUp = () => {
        console.log("showing popup");
        return (<div><OtpPopUp /></div>);
    }
    const handleClick = () => {
        setButtonClicked(true);
        if (!email.includes("@" && ".")) {
            setvalid(false);
            setMsg("Invalid email");
            setOpen(true);
            setButtonClicked(false);
        }
        else {
            setvalid(true);
            setButtonClicked(true);
            showPopUp(true)
        }
    }

    const handleClose = () => {
        setOpen(false);
    };

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    return (
        <div className="login-container max-width pt-12 flex flex-col justify-around smallText ">

            <div className="w-[270px] md:w-[300px] my-12 md:my-4 m-auto">
                <img src="assets\logo2.png" className='w-[270px] md:w-[300px] ' alt="" />
            </div>

            <div className="ctr w-[90%] md:w-[45%] m-auto bg-[#151515]  box-border rounded-lg text-[15px] mt-12 py-4">
                {/* <div className='text-white text-[23px] text-center smallText'>Welcome back <span className="coke">Geek </span>!</div> */}
                <div className='flex justify-center smallText '>
                    <span className="flex items-center justify-center h-[7rem] border-2 rounded-[50%] border-[#2c2c2c] aspect-square">
                        <span className="flex flex-col items-center justify-center mb-1 h-16 aspect-square">
                            <span className="semiCircle block h-2/5 w-2/3 rounded-t-[3rem] border-2 border-b-0 border-[#2c2c2c] "></span>
                            <span className="square block h-3/5 w-full rounded-[10px] border-2 border-[#2c2c2c] "></span>
                        </span>
                    </span>

                </div>

                <div className="flex flex-col justify-center items-center w-[100%]">
                    <input className='inputs w-[75%] md:w-[65%] shadow-md placeholder:text-[12px]' required placeholder='Email address, Phone number or Username' type="mail" onChange={e => (setEmail(e.target.value))} />
                </div>

                <div className="flex flex-col justify-center items-center w-[100%]">

                    {/* <CircularProgress sx={{ color: "red", width: "30px", margin: "11.2px" }} /> : */}

                    <div>
                        <button className='loginButton  shadow-md' onClick={handleClick} >Send otp</button>
                    </div>

                    {
                        valid ?
                            showPopUp() : null
                    }
                </div>
                <div className="flex justify-center items-center w-[100%] text-white mt-[20px]">
                    <NavLink to="#" className="text-[#ff0000] ml-2"> can't reset your password?</NavLink>
                </div>
            </div>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={"error"} sx={{ width: '100%' }}>
                    {msg}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Forgot
