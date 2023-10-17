import React from "react";
import logo from '../assets/logo.svg'

export default function NavBar (){
    return(
    <nav className="flex items-center justify-between">
        <img src={logo} alt="" />

        <ul className="flex items-center gap-2">
            <li><a href="">Home</a></li>
            <li><a href="">New</a></li>
            <li><a href="">Popular</a></li>
            <li><a href="">trending</a></li>
            <li><a href="">Categories</a></li>
        </ul>
    </nav>    
    )
}