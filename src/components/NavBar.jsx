import React,{useState} from "react";
import logo from '../assets/logo.svg'
import {VscMenu} from 'react-icons/vsc'

export default function NavBar (){
    const [screenWidth,setScreenWidth]=useState(window.innerWidth);

    return(
    <nav className="flex items-center justify-between mb-8 w-full">
        <img 
            className="h-7"
            src={logo}
            alt="" 
        />

        {screenWidth < 641?
           
                <VscMenu className="w-[2rem] h-[2rem] font-extrabold"/>
            :

            <ul className="flex items-center gap-10 text-darkGrayishBlue">
                <li className="hover:text-softRed transition ease-in duration-150"><a href="">Home</a></li>
                <li className="hover:text-softRed transition ease-in duration-150"><a href="">New</a></li>
                <li className="hover:text-softRed transition ease-in duration-150"><a href="">Popular</a></li>
                <li className="hover:text-softRed transition ease-in duration-150"><a href="">trending</a></li>
                <li className="hover:text-softRed transition ease-in duration-150"><a href="">Categories</a></li>
            </ul>
        }
    </nav>    
    )
}