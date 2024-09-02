import React, { useRef } from 'react'
import Cards from './Cards'

const Foreground = () => {
  const ref = useRef(null)
  return (
      <>
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-screen flex flex-wrap gap-2 p-3'>
      <Cards title="lorem ipsum jsidhasd as dsd asdsadd" date="30-5-2024" status={false} reference={ref}/>
      <Cards reference={ref} title="lorem ipsum or me sdss jata tha " date="30-5-2024" status={true}/>
    </div>
  </>
  )
}

export default Foreground
