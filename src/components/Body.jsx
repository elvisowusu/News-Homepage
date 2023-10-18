import React, { useState } from "react";
import desktopImg from '../assets/image-web-3-desktop.jpg'
import mobileImg from '../assets/image-web-3-mobile.jpg'
import gamingImg from '../assets/image-gaming-growth.jpg'
import retroImg from '../assets/image-retro-pcs.jpg'
import laptopImg from '../assets/image-top-laptops.jpg'

export default function Body (){
    const [screenWidth,setScreenWidth]=useState(window.innerWidth);

    return(
        <div className="xl:w-[150vh]">
            <section className="sm:flex">
                
                <div className="flex flex-col items-center">
                    
                    <img 
                        className="w-full" 
                        src={screenWidth < 641?mobileImg: desktopImg} alt="" 
                    />

                    <div className="sm:flex sm:justify-evenly mt-6">
                        
                        <h1 className="font-extrabold text-veryDarkBlue text-[2.8rem] leading-[2.7rem]">
                            The Bright Future of Web 3.0?
                        </h1>
                        
                        <div className="mt-4">
                            <p className="text-darkGrayishBlue text-[1rem] leading-[1.6rem]">
                                We dive into the next evolution of the web that 
                                claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                            </p>
                            <button className="bg-softRed text-offWhite text-xs font-bold w-[10.5rem] py-[0.7rem] mt-5 tracking-[0.2rem]">
                                READ MORE
                            </button>
                        </div>
                    </div>
                </div>

                
                <div className="bg-veryDarkBlue mt-[4rem]">
                    <h1 className="text-softOrange">New</h1>
                    <div>
                        <h3 className="text-white">Hydrogen VS Electric Cars</h3>
                        <p className="text-grayishBlue">
                            Will hydrogen-fueled cars ever catch up to EVs?
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h3 className="text-white">The Downsides of AI Artistry</h3>
                        <p className="text-darkGrayishBlue">
                            What are the possible adverse effects of on-demand AI image generation?
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h3 className="text-white">Is VC Funding Drying Up?</h3>
                        <p className="text-darkGrayishBlue">
                            Private funding by VC firms is down 50% YOY. We take a look at what that means.
                        </p>
                    </div>
                </div>

            </section>

            <section>
                <div>
                    <img src={laptopImg} alt="" />
                    <div></div>
                </div>
                <div></div>
                <div></div>
            </section>
        </div>
    )
}