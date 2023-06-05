import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'

const SearchBar = () => {

  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // request to an api
  }


  return (
    <>
      <form className='w-full relative gap-3 flex items-center rounded-full' onSubmit={e => onSubmit(e)}>
        <MdSearch fontSize={20} className='absolute left-0 -z-10 translate-x-3' />
        <input
          type="text"
          name="search"
          id="search"
          onChange={onChange}
          value={value}
          placeholder='Search...'
          className='w-full px-5 pl-10 py-[0.4rem] outline-none text-sm bg-transparent border rounded-full text-gray-400'
        />
      </form>
    </>
  )
}

export default SearchBar