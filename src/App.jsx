import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Body from './components/Body'
import './App.css'

function App() {
  const [screenWidth,setScreenWidth]=useState(window.innerWidth);
  

  return (
    <div className='md:bg-blue-300 lg:bg-green-400 font-Inter flex flex-col justify-center items-center p-5 sm:p-[5rem] pt-[2.2rem]'>
      <NavBar />
      <Body />
    </div>
  )
}

export default App
