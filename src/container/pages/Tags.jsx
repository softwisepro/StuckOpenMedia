import React, { useState, useEffect } from 'react'
import { MdAddCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'
import CreatePostModel from '../../post/CreatePostModel'
import PostCard from '../../post/PostCard'

const Tags = () => {
  const [openCreatePostModel, setOpenCreatePostModel] = useState(false);

  const handleCloseCreatePostModel = () => setOpenCreatePostModel(false);

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 20);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const tags = [
    { name :"Science" },
    { name :"Technology" },
    { name:"Programming"},
    { name:"Web development" },
    { name:"ICT and Electronics" },
    { name:"Arts and Designing" }
  ]

  return (
    <div>
      <div className='h-full'>
      <div className='flex flex-col lg:flex-row space-x-5'>
        <div className='md:w-[100%] p-5 flex flex-col'>
            <div className='font-bold text-3xl text-center my-5'>
              <h1>People's Tags...</h1>
              <p className='!text-sm !font-semibold'>
                Search questions categories depending on other people's tags
              </p>
            </div>
          <div className='w-full flex justify-end items-center'>
          </div>

          <div className='w-full flex flex-col mt-5 justify-center items-center'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
              {tags.slice(0, tags.length - 1).map((tag) => (
                <Link
                  to={`/tag/${tag.name}`}
                  key = {tag.name}
                  className='py-1 rounded px-3 border text-sm oveflow-hidden'
                >
                  <p>{ tag.name }</p>
                </Link>
              ))}
              
            </div>
          </div>

        </div>

        <div className='p-5 w-[50%] h-full'>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Tags