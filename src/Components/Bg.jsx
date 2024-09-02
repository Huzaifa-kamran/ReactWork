import React from 'react'

const Bg = () => {
  return (
    <div className='w-full z-[2] h-screen fixed bg-zinc-800 relative'>

    <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] justify-center items-center'>
    <h1 className='text-zinc-600 text-9xl '>TODO</h1>
    </div>
    
    </div>
  )
}

export default Bg
