import React from 'react'
import { useState } from 'react';
import Booktable from '../component/Booktable'
import Navbar from '../component/Navbar'
import { useLocation } from 'react-router-dom';


function Booktablepage({books,deleteBook}) {

  
  const location=useLocation();
  console.log(location);
 
  
  
  return (
    <div className='w-full flex items-center justify-center flex-col'>
      <Navbar/>
      <Booktable books={books} deleteBook={deleteBook}  />

    </div>
  )
}

export default Booktablepage
