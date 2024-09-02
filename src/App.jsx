import React from 'react'
import Bg from './Components/Bg'
import Foreground from './Components/Foreground'
import AddButton from './Components/AddButton'

const App = () => {
  return (
    <div className='relative overflow-hidden'>
      <Bg/>
      <Foreground/>
      <AddButton/>
    </div>
  )
}

export default App
