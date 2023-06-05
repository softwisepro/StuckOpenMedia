import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdAddCircle, MdCancel, MdInsights, MdOutlineHome, MdQuestionAnswer, MdTagFaces } from 'react-icons/md'

const Downbar = () => {

  const [toggleBar, setToggleBar] = useState(false)

  const handleCloseBar = (e) => {
    if(toggleBar) {
      setToggleBar(false);
    }
  }

  return (
    <div className='h-auto rounded-full text-white bottom-0 transition-all border ease-linear duration-300 bg-blue-400 shadow-lg p-3 m-2'>
      <div className='flex h-full flex-col gap-5 justify-center items-center w-full transition-all ease-linear duration-300'>
        {toggleBar && (
            <div className='flex flex-col space-y-3 transition-all ease-linear duration-300'>
              <Link to='/' onClick={handleCloseBar}><MdOutlineHome fontSize={20} /></Link>
              <Link to='/popular' onClick={handleCloseBar}><MdInsights fontSize={20} /></Link>
              <Link to='/Questions' onClick={handleCloseBar}><MdQuestionAnswer fontSize={20} /></Link>
              <Link to='/Tags' onClick={handleCloseBar}><MdTagFaces fontSize={20} /></Link>  
            </div>
        )}
        <div className='cursor-pointer w-full'>
          {!toggleBar ? <MdAddCircle fontSize={20} onClick={() => setToggleBar(!toggleBar)}/> : <MdCancel fontSize={20} onClick={() => setToggleBar(!toggleBar)}/>}
        </div>
      </div>
    </div>
  )
}

export default Downbar