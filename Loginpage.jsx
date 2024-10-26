import React from 'react'
import Login from '../component/Login'
import Navbar from '../component/Navbar'

function Loginpage() {
  return (
   <div className='w-full h-full flex items-center justify-center flex-col'>
      <Navbar/>
      <Login/>
    </div>
  )
}

export default Loginpage
