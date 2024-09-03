import {React,useState} from 'react'
import { motion, useDragControls } from "framer-motion"
import {MdDeleteForever } from "react-icons/md";
const Cards = (props) => {
  const controls = useDragControls()
  return (
    <motion.div 
    drag 
    dragControls={controls} 
    whileDrag={{scale:1.2}}  
    dragConstraints={props.reference} 
    dragElastic={0.2}
    className='relative text-zinc-300 overflow-hidden shrink-0 w-44 h-52 rounded-lg drop-shadow-xl bg-zinc-600 px-3 py-3'>
      <p>{props.title}</p>
  
      <div className='absolute bottom-0 left-0 w-full text-sm text-white h-auto'>
      <div className="flex justify-between px-2 mb-1">
          <span className='flex flex-row'>
           Date:{props.date}
          </span>

           <span className='text-xl text-red-400 hover:text-red-600 hover:scale-105'>
           <MdDeleteForever />
           </span>
       </div>
       <div className={`${props.status? 'bg-green-500':'bg-yellow-500'} bg-yellow-500 text-center py-1`}>

      <p>{props.status? "Completed":"Pending"}</p>
       </div>

      </div>
    </motion.div>
  )
}

export default Cards


