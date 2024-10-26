import React from 'react'
import Signup from '../component/Signup'
import Navbar from '../component/Navbar'

function Signuppage() {
  return (
    <div className='w-full h-full flex items-center justify-center flex-col'>
      <Navbar/>
      <Signup/>
    </div>
  )
}

export default Signuppage
