import React from "react";
import desktopImg from '../assets/image-web-3-desktop.jpg'
import mobileImg from '../assets/image-web-3-mobile.jpg'
import gamingImg from '../assets/image-gaming-growth.jpg'
import retroImg from '../assets/image-retro-pcs.jpg'
import laptopImg from '../assets/image-top-laptops.jpg'

export default function Body (){


    return(
        <div className="w-[150vh]">
            <section className="flex">
                {/* {leftside} */}
                <div>
                    {/* {top} */}
                    <img src={desktopImg} alt="" height={100} width={200}/>

                    {/* {bottom} */}
                    <div className="flex justify-evenly">
                        {/* {leftside} */}
                        <h1>The Bright Future of Web 3.0?</h1>
                        
                        {/* {rightside} */}
                        <div>
                            <p>We dive into the next evolution of the web that 
                             claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                            </p>
                            <button>
                                READ MORE
                            </button>
                        </div>
                    </div>
                </div>

                {/* {rightSide} */}
                <div className="bg-veryDarkBlue">
                    <h1 className="text">New</h1>
                    <div>
                        <h3>Hydrogen VS Electric Cars</h3>
                        <p>
                            Will hydrogen-fueled cars ever catch up to EVs?
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h3>The Downsides of AI Artistry</h3>
                        <p>
                            What are the possible adverse effects of on-demand AI image generation?
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h3>Is VC Funding Drying Up?</h3>
                        <p>
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