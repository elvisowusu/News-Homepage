import React,{useState} from "react";
import logo from '../assets/logo.svg'
import {VscMenu} from 'react-icons/vsc'
import {AiOutlineClose} from 'react-icons/ai'

export default function NavBar (){
    const [screenWidth,setScreenWidth]=useState(window.innerWidth);
    const [toggle,setToggle] = useState(false);

    const handleClicked=()=>{
        setToggle(!toggle);
    }

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
                            className={`z-20 w-[2rem] h-[2rem]`}
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

        <div className="absolute bg-offWhite h-[174vh] flex justify-start items-center pl-5 w-[16rem] -right-5 z-10">
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