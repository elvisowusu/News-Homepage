import React from "react";
import logo from '../assets/logo.svg'

export default function NavBar (){
    return(
    <nav className="flex items-center justify-between w-[150vh] mb-12">
        <img src={logo} alt="" />

        <ul className="flex items-center gap-10 text-darkGrayishBlue">
            <li className="hover:text-softRed transition ease-in duration-150"><a href="">Home</a></li>
            <li className="hover:text-softRed transition ease-in duration-150"><a href="">New</a></li>
            <li className="hover:text-softRed transition ease-in duration-150"><a href="">Popular</a></li>
            <li className="hover:text-softRed transition ease-in duration-150"><a href="">trending</a></li>
            <li className="hover:text-softRed transition ease-in duration-150"><a href="">Categories</a></li>
        </ul>
    </nav>    
    )
}