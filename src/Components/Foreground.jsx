import React, { useRef } from 'react'
import Cards from './Cards'

const Foreground = () => {
  const ref = useRef(null);
  const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  return (
      <>
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-screen flex flex-wrap gap-2 p-3'>
      {
        existingTasks.map((temp,index)=>{
         return <Cards id={temp.id} title={temp.task} date={temp.date} status={temp.status} reference={ref}/>
        })
      }
      {/* <Cards reference={ref} title="lorem ipsum or me sdss jata tha " date="30-5-2024" status={true}/> */}
    </div>
  </>
  )
}

export default Foreground
