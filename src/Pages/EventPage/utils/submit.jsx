export default function SubmitUtil() {
    return (
        <div className="flex flex-col items-center px-10 pb-[10rem] w-full">
            <p
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-anchor-placement="center-bottom"
                className="text-3xl md:text-5xl pb-[8rem]">
                How To Submit ?
            </p>
            <div className=" w-full flex items-center justify-center">
                <span
                    data-aos="fade-down"
                    data-aos-anchor-placement="center-bottom"
                    className="block border-l-2 py-20 border-[#ff0000]">
                    <ul className="flex flex-col gap-[6rem] -ml-5 ">
                        <li
                            data-aos="fade-right"
                            data-aos-delay="100"
                            data-aos-duration="500"
                            data-aos-anchor-placement="center-bottom"
                            className="rounded-lg h-[10rem] w-[80vw] md:w-[700px] bg-[#cecece]"></li>
                        <li
                            data-aos="fade-right"
                            data-aos-delay="200"
                            data-aos-duration="500"
                            data-aos-anchor-placement="center-bottom"
                            className="rounded-lg h-[10rem] w-[80vw] md:w-[700px] bg-[#cecece]"></li>
                        <li
                            data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-duration="500"
                            data-aos-anchor-placement="center-bottom"
                            className="rounded-lg h-[10rem] w-[80vw] md:w-[700px] bg-[#cecece]"></li>
                    </ul>
                </span>
            </div>
        </div>
    )
}