import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Books({addbooks}) {
  const navigate= useNavigate();
  const[title,setTitle]=useState('');
  const[author,setAuthor]=useState('');
  const[genre,setGenre]=useState('');
  const[year,setYear]=useState('');

  const submit1=(event)=>{
    event.preventDefault();
    const newBook = { title, author, genre, year };
    addbooks(newBook);
    // setTitle(title);
    // setAuthor('');
    // setGenre('');
    // setYear('')
    navigate('/books')
    
  }
  return (
    <div className='w-1/2 flex items-center justify-center flex-col mx-8 mt-10 p-6 border-2 rounded-md border-white backdrop-blur-md'>
      <h2 className='text-2xl mb-6 text-white'>Add Book</h2>
      <input type='text' value={title} placeholder='Title' className='w-full bg-black text-white p-2 my-2 mb-2 rounded' onChange={(event)=>setTitle(event.target.value)} ></input>
      <input type='text' value={author} placeholder='Author' className='w-full bg-black text-white p-2 my-2 mb-2 rounded' onChange={(event)=>setAuthor(event.target.value)} ></input>
      <input type='text' value={genre} placeholder='Genre' className='w-full bg-black text-white p-2 mb-2 my-2 rounded' onChange={(event)=>setGenre(event.target.value)} ></input>
      <input type='number' value={year} placeholder='Year' className='w-full bg-black text-white p-2 mb-2 my-2 rounded' onChange={(event)=>setYear(event.target.value)} ></input>
     <button onClick={submit1} className='w-full bg-black text-white text-xl bg-teal-800 text-white h-12 my-2 rounded p-2'>add book</button>
    </div>
  )
}

export default Books
