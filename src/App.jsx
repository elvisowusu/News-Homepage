import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Body from './components/Body'
import './App.css'

function App() {
  const [screenWidth,setScreenWidth]=useState(window.innerWidth);
  

  return (
    <div className='sm:bg-pink-300 font-Inter md:h-[100vh] flex flex-col justify-center items-center'>
      <NavBar screenWidth={screenWidth} setScreenWidth={setScreenWidth}/>
      <Body screenWidth={screenWidth} setScreenWidth={setScreenWidth}/>
    </div>
  )
}

export default App
