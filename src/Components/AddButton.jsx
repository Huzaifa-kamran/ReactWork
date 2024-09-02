import React from 'react'
import { MdAddCircleOutline } from "react-icons/md";
const AddButton = () => {
  return (
    <div className="absolute z-[5] flex justify-center content-center items-center drop-shadow-xl rounded-l-full -translate-y-[50%] bg-zinc-900 w-20 h-20 right-0 top-1/2">
        <button>
            <MdAddCircleOutline size={36} color="white" />
        </button>
    </div>
  )
}

export default AddButton
