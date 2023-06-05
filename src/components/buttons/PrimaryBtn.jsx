import React from 'react'
import { Link } from 'react-router-dom'
import { MdAddCircle } from 'react-icons/md'

const PrimaryBtn = ({ onClick, label }) => {
  return (
    <>
      <Link
        onClick={onClick}
        className={`px-3 flex justify-center items-center gap-2 py-2 hover:bg-blue-100 hover:shadow-inner border-blue-300 bg-blue-300 rounded-sm text-blue-900 transition-colors ease-linear duration-75 $`}
      >
        <span><MdAddCircle fontSize={20} /></span>
        <span className='text-sm'>{ label }</span>
      </Link>
    </>
  )
}

export default PrimaryBtn