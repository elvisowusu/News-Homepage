import React,{useEffect, useState} from "react";
import logo from '../assets/logo.svg'
import {VscMenu} from 'react-icons/vsc'
import {AiOutlineClose} from 'react-icons/ai'
import AOS from "aos";
import "aos/dist/aos.css";

export default function NavBar (){
    const [screenWidth,setScreenWidth]=useState(window.innerWidth);
    const [toggle,setToggle] = useState(false);

    const handleClicked=()=>{
        setToggle(!toggle);
    }

    useEffect(()=>{
        AOS.init();
        const handleResize =()=>{
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize',handleResize);
        return ()=>{
            window.removeEventListener('resize',handleResize);
        }
        
    })
    return(
    <nav className="relative flex items-center justify-between mb-8 w-full">
        <img 
            className="h-7"
            src={logo}
            alt="logo"
        />

        {screenWidth < 641?
                    <>{toggle?
                        <AiOutlineClose 
                            className={`z-20 w-[2rem] h-[2rem] fixed right-5`}
                            onClick={handleClicked}
                        />
                        :
                        <VscMenu 
                            className={` z-20 w-[2rem] h-[2rem]`}
                            onClick={handleClicked}
                        />
                    }  
                    </>
            :

            <ul className="flex items-center gap-10 text-darkGrayishBlue">
                <li className="hover:text-softRed transition ease-in duration-150"><a href="">Home</a></li>
                <li className="hover:text-softRed transition ease-in duration-150"><a href="">New</a></li>
                <li className="hover:text-softRed transition ease-in duration-150"><a href="">Popular</a></li>
                <li className="hover:text-softRed transition ease-in duration-150"><a href="">trending</a></li>
                <li className="hover:text-softRed transition ease-in duration-150"><a href="">Categories</a></li>
            </ul>
        }

        {toggle?

        <div data-aos='fade-left' className="fixed bg-offWhite h-[188vh] flex justify-start items-center pl-8 w-[18rem] -right-5 z-10 shadow-2xl shadow-slate-700">
            <ul className=" text-veryDarkBlue mt-[27rem] font-semibold text-lg">
                <li className="hover:text-softRed transition ease-in duration-150"><a href="">Home</a></li>
                <li className="hover:text-softRed transition ease-in duration-150 mt-[1.2rem]"><a href="">New</a></li>
                <li className="hover:text-softRed transition ease-in duration-150 mt-[1.2rem]"><a href="">Popular</a></li>
                <li className="hover:text-softRed transition ease-in duration-150 mt-[1.2rem]"><a href="">trending</a></li>
                <li className="hover:text-softRed transition ease-in duration-150 mt-[1.2rem]"><a href="">Categories</a></li>
            </ul> 
        </div>
        :''
        }
    </nav>    
    )
}