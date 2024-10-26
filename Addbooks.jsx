import React from 'react'
import Books from '../component/Books'

function Addbooks({addbooks}) {
  return (
    <div className='w-full flex items-center justify-center'>
      <Books addbooks={addbooks}/>
    </div>
  )
}

export default Addbooks
