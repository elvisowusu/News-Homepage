import React from "react";
import logo from '../assets/logo.svg'

export default function NavBar (){
    return(
        <div className="text-6 bg-blue-700">
            <nav>
                <div>
                    <img src={logo} alt="" />
                </div>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">New</a></li>
                    <li><a href="">Popular</a></li>
                    <li><a href="">trending</a></li>
                    <li><a href="">Categories</a></li>
                </ul>
            </nav>
        </div>
    )
}