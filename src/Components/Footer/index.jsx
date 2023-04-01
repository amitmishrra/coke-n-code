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

                            <a href="https://www.facebook.com/profile.php?id=100091230918150" target="_blank"> <Facebook fontSize='inherit'/> </a>
                            <a href="#" target="_blank">  </a>
                            <a href="https://www.instagram.com/gigacode17/" target="_blank"> <Instagram fontSize='inherit' /> </a>
                            <a href="https://www.linkedin.com/company/gigacode/" target="_blank"> <LinkedIn fontSize='inherit' /> </a>

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
                </div>
            </footer>
        </>
    )
}

export default Footer