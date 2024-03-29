import React,{useEffect, useState,useRef} from "react";
import logo from '../assets/logo.svg'
import {VscMenu} from 'react-icons/vsc'
import {AiOutlineClose} from 'react-icons/ai'
import AOS from "aos";
import "aos/dist/aos.css";

export default function NavBar (){
    const [screenWidth,setScreenWidth]=useState(window.innerWidth);
    const [toggle,setToggle] = useState(false);
    const menuRef = useRef();

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
        
    },[]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                // Click occurred outside the menu, close the menu
                setToggle(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return(
    <nav className="relative flex items-center justify-between mb-8 xl:mb-11 w-full md:w-[110vh] lg:w-[146vh] xl:w-[150vh]">
        {
            screenWidth<640?
        <div onClick={handleClicked} className="bg-white opacity-30 hover:opacity-40 fixed left-0 top-0 w-full h-[4rem]">
        
        </div>
        :''
        }
        <img 
            className="h-7 xl:h-9 fixed sm:relative z-50 cursor-pointer"
            src={logo}
            alt="logo"
        />

        {screenWidth < 640?
                    <>{toggle?
                        <AiOutlineClose 
                            className={`z-20 w-[2rem] h-[2rem] fixed right-5 cursor-pointer`}
                            onClick={handleClicked}
                        />
                        :
                        <VscMenu 
                            className={` z-20 w-[2rem] h-[2rem] fixed sm:relative right-5 cursor-pointer`}
                            onClick={handleClicked}
                        />
                    }  
                    </>
            :

            <ul className="flex items-center gap-5 md:gap-9  text-darkGrayishBlue">
                <li className="hover:text-softRed transition ease-in duration-150"><a href="">Home</a></li>
                <li className="hover:text-softRed transition ease-in duration-150"><a href="">New</a></li>
                <li className="hover:text-softRed transition ease-in duration-150"><a href="">Popular</a></li>
                <li className="hover:text-softRed transition ease-in duration-150"><a href="">trending</a></li>
                <li className="hover:text-softRed transition ease-in duration-150"><a href="">Categories</a></li>
            </ul>
        }

        {toggle?
        <>
        <div className="fixed left-0 top-0 w-full h-[188vh] bg-black opacity-40">

        </div>
        <div ref={menuRef} data-aos='fade-left' className="fixed bg-offWhite h-[188vh] flex justify-start items-center pl-6 w-[16rem] -right-5 z-10">
            <ul className=" text-veryDarkBlue mt-[27rem] font-semibold text-lg">
                <li className="hover:text-softRed transition ease-in duration-150"><a href="">Home</a></li>
                <li className="hover:text-softRed transition ease-in duration-150 mt-[1.2rem]"><a href="">New</a></li>
                <li className="hover:text-softRed transition ease-in duration-150 mt-[1.2rem]"><a href="">Popular</a></li>
                <li className="hover:text-softRed transition ease-in duration-150 mt-[1.2rem]"><a href="">trending</a></li>
                <li className="hover:text-softRed transition ease-in duration-150 mt-[1.2rem]"><a href="">Categories</a></li>
            </ul> 
        </div>
        </>
        :''
        }
    </nav>    
    )
}