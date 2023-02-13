import { Facebook, FacebookOutlined, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import './style.css'

const Footer = () => {
    return (
        <>
            <footer className="footer flex flex-col items-center justify-center border-t-2 border-[#bbbbbb] md:border-0 smallText shadow-2xl">
                <div className="container max-w-[1200px] flex justify-between md:items-center flex-col-reverse md:flex-row px-5">
                    <div className="footer-logo py-32 md:py-10 ">
                        <img src="assets/logo2.png" className='w-[200px] md:w-[200px] ' alt="" />
                    </div>
                    <div className="footer-div flex flex-col">
                        <div className="footer-col">
                            <ul className='flex flex-col md:flex-row md:gap-5 '>
                                <li><a href="#">Contests</a></li>
                                <li><a href="#">Performances</a></li>
                                <li><a href="#">Tasks</a></li>
                                <li><a href="#">Program</a></li>
                                <li><a href="#">Upcoming Contests</a></li>
                                <li><a href="#">Participation </a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                        </div>
                        <div className="social-links flex gap-5 py-8">
                            <a href="#"> <Facebook fontSize='inherit'/> </a>
                            <a href="#"> <Twitter fontSize='inherit' /> </a>
                            <a href="#"> <Instagram fontSize='inherit' /> </a>
                            <a href="#"> <LinkedIn fontSize='inherit' /> </a>
                        </div>
                        <div className="footer-col terms-col">
                            <ul className="flex flex-wrap">
                                <li>@ skillance corp.</li>
                                <li><a href="#">Terms & conditions</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Services</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="row flex flex-wrap justify-between md:pb-5">
                        <div className="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">our services</a></li>
                                <li><a href="#">Our Program</a></li>
                                <li><a href="#">Your Tasks</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>PROGRAMMING TOOLS</h4>
                            <ul>
                                <li><a href="#">Your contests</a></li>
                                <li><a href="#">Your Performances</a></li>
                                <li><a href="#">Upcoming Contests</a></li>
                                <li><a href="#">Participation </a></li>
                                <li><a href="#">FAQS</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4> MORE </h4>
                            <ul>
                                <li><a href="#">work1</a></li>
                                <li><a href="#">work2</a></li>
                                <li><a href="#">work3</a></li>
                                <li><a href="#">work4</a></li>
                            </ul>
                        </div>
                        <div className="footer-col flex md:flex-col md:justify-start justify-between">
                            <h4>follow us</h4>
                            <div className="social-links flex md:flex-col justify-center gap-2">
                                <a href="#">
                                    <div className="flex items-center gap-3">
                                        <Facebook /><p className=" md:block hidden">Facebook</p>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="flex items-center gap-3">
                                        <Twitter /><p className=" md:block hidden">Twitter</p>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="flex items-center gap-3">
                                        <Instagram /><p className=" md:block hidden">Instagram</p>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="flex items-center gap-3">
                                        <LinkedIn /><p className=" md:block hidden">LinkedIn</p>
                                    </div>
                                </a>
                            </div>
                            

                        </div>
                    </div>
                    <hr></hr>
                    <br></br>

                    <div className="terms flex-col md:flex-row flex gap-4 items-center justify-center px-[30px]">
                        <a className="text-white"><p>
                            @2022 .All rights reserved
                        </p>
                        </a>
                        <a className="text-white"><p>
                            Terms & conditions
                        </p>
                        </a>
                        <a className="text-white"><p>
                            PRIVACY POLICY
                        </p>
                        </a>
                    </div> */}
                    {/* <div id="d1"> @2022 .All rights reserved</div> <br></br>
                    <div id="d1"> Terms & conditions</div><br></br>
                    <div id="d1"> PRIVACY POLICY</div> */}

                </div>
            </footer>
        </>
    )
}

export default Footer