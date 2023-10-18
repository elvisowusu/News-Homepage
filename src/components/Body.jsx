import React, { useEffect, useState } from "react";
import desktopImg from '../assets/image-web-3-desktop.jpg'
import mobileImg from '../assets/image-web-3-mobile.jpg'
import gamingImg from '../assets/image-gaming-growth.jpg'
import retroImg from '../assets/image-retro-pcs.jpg'
import laptopImg from '../assets/image-top-laptops.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Body (){
    const [screenWidth,setScreenWidth]=useState(window.innerWidth);
    useEffect(()=>{
        AOS.init();
        const handleResize =()=>{
            setScreenWidth(window.innerWidth);
        }
        // Attaching the event listener for window resize
        window.addEventListener('resize',handleResize);

        //clean up the event listener when the component unmounts 
        return ()=>{
            window.removeEventListener('resize',handleResize);
        } 
    },[])// empty dependency runs the effect only once on mount and cleans up on unmount

    return(
        <div className="md:w-[132vh]">
            <section className="mb-[4.5rem] md:flex">
                
                <div className="flex flex-col items-center">
                    
                    <img 
                        className={`w-full sm:h-[20rem] md:h-auto`}
                        src={screenWidth < 640?mobileImg: desktopImg} alt="" 
                    />

                    <div className="md:flex md:justify-between md:items-center mt-7 md:mt-5">
                        
                        <h1 className="font-extrabold text-veryDarkBlue text-[2.8rem] sm:text-[3.3rem] md:text-[2.8rem] leading-[2.7rem] sm:leading-[3.8rem] md:leading-[2.7rem]">
                            The Bright Future of Web 3.0?
                        </h1>
                        
                        <div className="mt-4">
                            <p className="text-darkGrayishBlue text-[0.95rem] sm:text-[1.1rem] md:text-[0.95rem] leading-[1.6rem]">
                                We dive into the next evolution of the web that 
                                claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                            </p>
                            <button className="bg-softRed hover:bg-veryDarkBlue text-offWhite text-xs font-bold w-[11.5rem] py-[1.2rem] mt-6 tracking-[0.4rem]">
                                READ MORE
                            </button>
                        </div>
                    </div>
                </div>

                
                <div className="bg-veryDarkBlue mt-[4rem] md:mt-0 p-4 font-semibold ml-[1.2rem] md:w-[62rem]">
                    <h1 className="text-softOrange text-[2rem] font-semibold mb-6">New</h1>
                    <div className="mb-7">
                        <h3 className="text-offWhite transition ease-in duration-150 hover:text-softOrange cursor-pointer text-[1.36rem] mb-1">Hydrogen VS Electric Cars</h3>
                        <p className="text-darkGrayishBlue font-medium leading-[1.8rem]">
                            Will hydrogen-fueled cars ever catch up to EVs?
                        </p>
                    </div>
                    <hr className="border-none h-[0.01rem] bg-grayishBlue mb-7"/>
                    <div className="mb-7">
                        <h3 className="text-offWhite transition ease-in duration-150 hover:text-softOrange cursor-pointer  text-[1.36rem] mb-1">The Downsides of AI Artistry</h3>
                        <p className="text-darkGrayishBlue font-medium leading-[1.8rem]">
                            What are the possible adverse effects of on-demand AI image generation?
                        </p>
                    </div>
                    <hr className="border-none h-[0.01rem] bg-grayishBlue mb-7"/>
                    <div className="mb-2">
                        <h3 className="text-offWhite transition ease-in duration-150 hover:text-softOrange cursor-pointer text-[1.36rem] mb-1 ">Is VC Funding Drying Up?</h3>
                        <p className="text-darkGrayishBlue font-medium leading-[1.8rem]">
                            Private funding by VC firms is down 50% YOY. We take a look at what that means.
                        </p>
                    </div>
                </div>

            </section>

            <section>
                <div data-aos='fade-up' data-aos-duration='900' className="flex mb-[3rem]">
                    <img src={retroImg} alt="" width={105}/>
                    <div className="ml-6">
                        <h1 className="text-grayishBlue font-bold text-[2rem] ">01</h1>
                        <h3 className="font-extrabold text-veryDarkBlue hover:text-softRed text-[1.1rem] mb-2">Reviving Retro PCs</h3>
                        <p className="text-darkGrayishBlue text-[0.92rem] leading-6">What happens when old PCs are given moderm upgrades?</p>
                    </div>
                </div>

                <div data-aos='fade-up' data-aos-duration='900' className="flex mb-[3rem]">
                    <img src={laptopImg} alt="" width={105}/>
                    <div className="ml-6">
                        <h1 className="text-grayishBlue font-bold text-[2rem]">02</h1>
                        <h3 className="font-extrabold text-veryDarkBlue hover:text-softRed text-[1.1rem] mb-2">Top 10 Laptops of 2022</h3>
                        <p className="text-darkGrayishBlue text-[0.92rem] leading-6">Our best picks for various needs and budgets.</p>
                    </div>
                </div>

                <div data-aos='fade-up' data-aos-duration='900' className="flex mb-[3rem]">
                    <img src={gamingImg} alt="" width={105}/>
                    <div className="ml-6">
                        <h1 className="text-grayishBlue font-bold text-[2rem]">03</h1>
                        <h3 className="font-extrabold text-veryDarkBlue hover:text-softRed text-[1.1rem] mb-2">The Growth of Gaming</h3>
                        <p className="text-darkGrayishBlue text-[0.92rem] ">How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}