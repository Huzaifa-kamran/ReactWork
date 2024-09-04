import React, { useRef,useEffect,useState} from 'react'
import Cards from './Cards'
import AddButton from '../Components/AddButton'

const Foreground = () => {
  const ref = useRef(null);
   const [Check, setCheck] = useState('')
  let existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  
  return (
      <>
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-screen flex flex-wrap gap-3 p-3'>
      {
        existingTasks.map((temp,index)=>{
         return <Cards id={temp.id} title={temp.task}  date={temp.date} status={temp.status} reference={ref}/>
        })
      }
    </div>
    <AddButton check={setCheck}/>
  </>
  )
}

export default Foreground
